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
  const baseInput = `w-full px-6 py-5 border-none rounded-2xl transition-all
    text-[1.05rem] font-[inherit] focus:outline-none bg-surface dark:bg-gray-800
    shadow-neo-in dark:shadow-inner text-gray-900 dark:text-gray-100`;

  const stateClass = error
    ? 'ring-2 ring-red-500/50 focus:ring-red-500'
    : 'focus:ring-2 focus:ring-primary/50';

  const disabledClass = disabled
    ? 'opacity-60 cursor-not-allowed'
    : '';

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
          className="block font-semibold mb-3 text-slate-600 dark:text-gray-300 pl-2"
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
        <p id={`${id}-error`} role="alert" className="text-red-500 text-[0.9rem] font-semibold mt-2 pl-2">
          {error}
        </p>
      )}

      {helpText && !error && (
        <p id={`${id}-help`} className="text-[0.9rem] text-slate-500 dark:text-gray-400 mt-2 pl-2 font-medium">
          {helpText}
        </p>
      )}
    </div>
  );
}
