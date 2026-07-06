import React, { InputHTMLAttributes } from 'react';

interface WaitlistInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function WaitlistInput({ label, className = '', ...props }: WaitlistInputProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label className="text-sm font-bold text-neutral">
          {label}
        </label>
      )}
      <input
        className={`w-full px-4 py-3 rounded border border-outline-variant bg-surface outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 text-on-surface placeholder-neutral ${className}`}
        {...props}
      />
    </div>
  );
}
