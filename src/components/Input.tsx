import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helpText?: string;
  id: string;
}

export default function Input({
  label,
  type = 'text',
  error,
  helpText,
  id,
  disabled,
  ...props
}: InputProps) {
  const baseInput = `w-full px-3 py-2 rounded-lg border transition-colors
    focus:outline-none focus:ring-2 dark:text-gray-100`;

  const stateClass = error
    ? 'border-red-500 focus:ring-red-500'
    : 'border-gray-300 focus:ring-primary-soft dark:border-gray-600';

  const disabledClass = disabled
    ? 'bg-gray-100 cursor-not-allowed dark:bg-gray-900'
    : 'bg-white dark:bg-gray-800';

  const describedBy = error
    ? `${id}-error`
    : helpText
      ? `${id}-help`
      : undefined;

  return (
    <div className="space-y-1">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {label}
        </label>
      )}

      <input
        id={id}
        type={type}
        disabled={disabled}
        className={`${baseInput} ${stateClass} ${disabledClass}`}
        aria-describedby={describedBy}
        aria-invalid={!!error}
        {...props}
      />

      {error && (
        <p id={`${id}-error`} role="alert" className="text-sm text-red-600 dark:text-red-400">
          {error}
        </p>
      )}

      {helpText && !error && (
        <p id={`${id}-help`} className="text-sm text-gray-500 dark:text-gray-400">
          {helpText}
        </p>
      )}
    </div>
  );
}
