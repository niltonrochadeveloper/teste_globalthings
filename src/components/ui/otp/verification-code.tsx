"use client";

import React, {
  useRef,
  forwardRef,
  KeyboardEvent,
  ClipboardEvent,
} from "react";

interface VerificationCodeProps {
  value: string[];
  onChange: (value: string[]) => void;
  isValid: boolean;
  errorMessage?: string | undefined;
}

const VerificationCode = forwardRef<HTMLInputElement[], VerificationCodeProps>(
  ({ value, onChange, isValid, errorMessage }, ref) => {
    const inputs = useRef<(HTMLInputElement | null)[]>([]);

    const handleChange = (index: number, digitValue: string) => {
      if (digitValue.length <= 1 && /^[0-9]*$/.test(digitValue)) {
        const newCode = [...value];
        newCode[index] = digitValue;
        onChange(newCode); // Atualiza o react-hook-form com o novo valor

        if (digitValue !== "" && index < 5) {
          inputs.current[index + 1]?.focus();
        }
      }
    };

    const handleKeyDown = (
      index: number,
      e: KeyboardEvent<HTMLInputElement>
    ) => {
      if (e.key === "Backspace" && value[index] === "" && index > 0) {
        inputs.current[index - 1]?.focus();
      }
    };

    const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
      e.preventDefault();
      const pastedData = e.clipboardData.getData("text");
      const pastedCode = pastedData.slice(0, 6).split("");
      const newCode = [...value];
      pastedCode.forEach((digit, index) => {
        if (/^[0-9]$/.test(digit)) {
          newCode[index] = digit;
        }
      });
      onChange(newCode); // Atualiza o react-hook-form com o novo valor
      const lastFilledIndex = newCode.findIndex((digit) => digit === "") - 1;
      inputs.current[lastFilledIndex >= 0 ? lastFilledIndex : 5]?.focus();
    };

    return (
      <div className="flex justify-center items-center">
        <div className="flex items-center space-x-1 md:space-x-4">
          {value.map((digit, index) => (
            <div key={index} className="relative">
              <div className="relative">
                <input
                  ref={(el) => {
                    inputs.current[index] = el;
                    if (typeof ref === "function") {
                      ref(inputs.current.filter(Boolean) as HTMLInputElement[]); // Filtra nulos
                    } else if (ref) {
                      ref.current = inputs.current.filter(
                        Boolean
                      ) as HTMLInputElement[]; // Filtra nulos
                    }
                  }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={handlePaste}
                  className="w-12 h-12 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      digit ? "bg-transparent" : "bg-gray-300"
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {!isValid && errorMessage && (
          <span className="text-red-500 text-sm">{errorMessage}</span>
        )}
      </div>
    );
  }
);

VerificationCode.displayName = "VerificationCode";

export default VerificationCode;
