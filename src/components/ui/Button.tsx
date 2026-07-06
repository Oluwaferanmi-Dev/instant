import React, { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'provider';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
}

export function Button({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}: ButtonProps) {
  
  const baseStyles = "inline-flex items-center justify-center font-bold tracking-tight rounded transition-all duration-200 px-6 py-3";
  
  const variants = {
    primary: "bg-primary text-on-primary hover:bg-opacity-90 border border-transparent",
    secondary: "bg-transparent text-primary border border-primary hover:bg-surface-dim",
    provider: "bg-tertiary text-on-tertiary hover:bg-opacity-90 border border-transparent"
  };
  
  const widthClass = fullWidth ? "w-full" : "";
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
