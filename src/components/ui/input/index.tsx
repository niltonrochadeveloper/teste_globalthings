/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { cn } from "@/lib/utils";
import { XIcon } from "lucide-react"; // Usando Lucide para os ícones
// import { useFormContext } from "react-hook-form";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
  isValid?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { label, errorMessage, isValid, disabled, className, type, ...props },
    ref
  ) => {
    // const methods = useFormContext();
    return (
      <div className="w-full">
        {label && (
          <label className="mb-3 block text-md text-primary-dark font-bold">
            {label}
          </label>
        )}

        <div className="relative">
          <input
            type={type}
            // placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50
            className={cn(
              "flex bg-white h-10 w-full rounded border border-gray-400 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:ring-offset-0",
              isValid === false
                ? "border-red-500 focus-visible:ring-red-500"
                : "",
              isValid === true
                ? "border-gray-400  focus-visible:text-black-light"
                : "border-input",
              className
            )}
            disabled={disabled}
            ref={ref}
            {...props}
          />

          {/* {methods.formState.isValid && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex justify-center items-center text-center rounded-full bg-green-600 w-6 h-6">
              <CheckIcon className="size-4 text-white" />
            </div>
          )} */}
          {isValid === false && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex justify-center items-center text-center rounded-full bg-red-600 w-6 h-6">
              <XIcon className="size-4 text-white" />
            </div>
          )}
        </div>

        {errorMessage && (
          <p className="mt-2 text-xs text-red-500">{errorMessage}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
