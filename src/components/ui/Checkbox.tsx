"use client";

import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { Control, FieldPath, FieldValues, useController } from "react-hook-form";

interface CheckboxProps<TFieldValues extends FieldValues = FieldValues> {
  name: FieldPath<TFieldValues>;
  control: Control<TFieldValues>;
  label: string;
  className?: string;
}

export function Checkbox<TFieldValues extends FieldValues = FieldValues>({
  name,
  control,
  label,
  className,
}: CheckboxProps<TFieldValues>) {
  const {
    field: { value, onChange, onBlur, ref },
  } = useController({ name, control });

  return (
    <label className="inline-flex cursor-pointer items-center gap-2">
      <button
        type="button"
        ref={ref}
        role="checkbox"
        aria-checked={!!value}
        onBlur={onBlur}
        onClick={() => onChange(!value)}
        className={cn(
          "flex h-3 w-3 shrink-0 items-center justify-center rounded-[3px] border border-brand transition-colors",
          value && "bg-brand"
        )}
      >
        {value && <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />}
      </button>
      <span className={cn("text-[11px] text-text-secondary", className)}>
        {label}
      </span>
    </label>
  );
}