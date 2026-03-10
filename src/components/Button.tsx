import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: `bg-surface dark:bg-gray-700 text-primary dark:text-primary-soft
    shadow-neo dark:shadow-md hover:shadow-neo-in hover:translate-y-0.5 dark:hover:shadow-inner
    focus-visible:ring-primary`,
  secondary: `bg-surface dark:bg-gray-700 text-slate-600 dark:text-gray-300
    shadow-neo dark:shadow-md hover:shadow-neo-in hover:translate-y-0.5 dark:hover:shadow-inner hover:text-primary
    focus-visible:ring-gray-500`,
  danger: `bg-surface dark:bg-gray-700 text-red-500 dark:text-red-400
    shadow-neo dark:shadow-md hover:shadow-neo-in hover:translate-y-0.5 dark:hover:shadow-inner
    focus-visible:ring-red-500`,
  ghost: `bg-transparent text-slate-600 dark:text-gray-300 hover:text-primary
    hover:bg-slate-50 dark:hover:bg-gray-800
    focus-visible:ring-gray-400`,
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm rounded-xl',
  md: 'px-6 py-3 text-base rounded-[20px]',
  lg: 'px-8 py-4 text-lg rounded-[20px]',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled,
  className = '',
  ...props
}: ButtonProps) {
  const base = `inline-flex items-center justify-center font-bold
    transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2`;

  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed pointer-events-none shadow-none text-slate-400' : 'active:shadow-neo-in dark:active:shadow-inner';

  return (
    <button
      className={`${base} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClass} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
