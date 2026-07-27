"use client";

import { cn } from "@/lib/utils";
import { forwardRef, InputHTMLAttributes, ReactNode } from "react";

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  rightSlot?: ReactNode;
}

export const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  function FormField(
    { label, error, rightSlot, className, id, name, ...props },
    ref
  ) {
    const inputId = id ?? name;

    return (
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor={inputId}
          className="text-xs font-semibold text-text-primary"
        >
          {label}
        </label>
        <div
          className={cn(
            "flex items-center gap-2 rounded-xl bg-surface-muted px-3.5 py-3",
            error && "ring-1 ring-red-400"
          )}
        >
          <input
            ref={ref}
            id={inputId}
            name={name}
            className={cn(
              "w-full bg-transparent text-xs text-text-primary placeholder:text-text-secondary focus:outline-none",
              className
            )}
            {...props}
          />
          {rightSlot}
        </div>
        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);