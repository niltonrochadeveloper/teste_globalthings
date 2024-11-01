"use client";

import * as React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { ButtonForRadioButton } from "@/components/ui/button";
import clsx from "clsx";

interface CheckboxProps {
  label: string;
  value: string;
}

interface CheckboxSelectorsProps {
  options: CheckboxProps[];
  name: string;
  columns?: number;
  label: string;
}

const CheckboxButton = React.forwardRef<HTMLDivElement, CheckboxSelectorsProps>(
  ({ options, name, label }, ref) => {
    const {
      control,
      formState: { errors },
    } = useFormContext();

    const getErrorMessage = (name: string) => {
      const error = errors[name];
      if (Array.isArray(error)) {
        return error[0]?.message || "";
      }
      return error?.message || "";
    };

    const errorMessage = getErrorMessage(name || "");

    return (
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          // Garantir que field.value seja um array
          const value = field.value ?? [];

          return (
            <div className="flex-1" ref={ref}>
              <div className="flex flex-col gap-4">
                <h2 className="text-primary-dark font-bold text-center md:text-left">
                  {label}
                </h2>
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                {options.map((option) => {
                  const isSelected =
                    Array.isArray(value) && value.includes(option.value);

                  return (
                    <ButtonForRadioButton
                      key={option.value}
                      type="button"
                      size="sm"
                      variant={isSelected ? "default" : "outline"}
                      className={`flex rounded-full  ${
                        isSelected ? "bg-blue-600 text-white" : "text-blue-600"
                      }`}
                      onClick={() => {
                        if (isSelected) {
                          field.onChange(
                            value.filter((val: string) => val !== option.value)
                          );
                        } else {
                          field.onChange([...value, option.value]);
                        }
                      }}
                    >
                      {option.label}
                    </ButtonForRadioButton>
                  );
                })}
              </div>
              {errorMessage && (
                <small className="text-red-500">{errorMessage}</small>
              )}
            </div>
          );
        }}
      />
    );
  }
);

CheckboxButton.displayName = "CheckboxButton";

export default CheckboxButton;
