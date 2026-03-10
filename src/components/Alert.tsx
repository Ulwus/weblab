import type { ReactNode } from 'react';

type AlertVariant = 'info' | 'success' | 'warning' | 'error';

interface AlertProps {
  children: ReactNode;
  variant?: AlertVariant;
  title?: string;
  dismissible?: boolean;
  onDismiss?: () => void;
}

const variantClasses: Record<AlertVariant, string> = {
  info: 'text-blue-700 dark:text-blue-400 ring-2 ring-blue-500/20',
  success: 'text-green-700 dark:text-green-400 ring-2 ring-green-500/20',
  warning: 'text-amber-700 dark:text-amber-400 ring-2 ring-amber-500/20',
  error: 'text-red-700 dark:text-red-400 ring-2 ring-red-500/20',
};

export default function Alert({
  children,
  variant = 'info',
  title,
  dismissible = false,
  onDismiss,
}: AlertProps) {
  return (
    <div role="alert" className={`rounded-2xl p-6 bg-surface dark:bg-gray-800 shadow-neo-in dark:shadow-inner ${variantClasses[variant]}`}>
      <div className="flex justify-between items-start gap-4">
        <div>
          {title && <p className="font-extrabold mb-2 text-[1.1rem] flex items-center gap-2">
            <span className="block w-2 h-2 rounded-full bg-current shrink-0" />
            {title}
          </p>}
          <div className={`text-[1.05rem] opacity-90 leading-relaxed font-medium ${title ? 'pl-4' : ''}`}>
            {children}
          </div>
        </div>

        {dismissible && (
          <button
            onClick={onDismiss}
            className="opacity-50 hover:opacity-100 transition-opacity flex items-center justify-center
              w-8 h-8 rounded-full hover:bg-black/5 dark:hover:bg-white/10 shrink-0"
            aria-label="Kapat"
          >
            &#10005;
          </button>
        )}
      </div>
    </div>
  );
}
