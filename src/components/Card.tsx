import type { ReactNode } from 'react';

type CardVariant = 'elevated' | 'outlined' | 'filled';

interface CardProps {
  title?: string;
  children: ReactNode;
  image?: string;
  imageAlt?: string;
  footer?: ReactNode;
  variant?: CardVariant;
}

const variantClasses: Record<CardVariant, string> = {
  elevated: 'bg-surface dark:bg-gray-800 shadow-neo dark:shadow-md hover:shadow-neo-in dark:hover:shadow-inner transition-all',
  outlined: 'bg-surface dark:bg-gray-800 border-2 border-slate-200 dark:border-gray-700 shadow-sm transition-all',
  filled: 'bg-gradient-to-br from-slate-400/5 to-slate-400/20 dark:from-gray-800 dark:to-gray-700 shadow-neo-in dark:shadow-inner transition-all',
};

export default function Card({
  title,
  children,
  image,
  imageAlt,
  footer,
  variant = 'elevated',
}: CardProps) {
  return (
    <div className={`rounded-3xl overflow-hidden ${variantClasses[variant]}`}>
      {image && (
        <img src={image} alt={imageAlt || ''} className="w-full h-48 object-cover border-b-2 border-surface dark:border-gray-700" />
      )}

      <div className="p-8">
        {title && (
          <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mb-3">
            {title}
          </h3>
        )}
        <div className="text-slate-600 dark:text-gray-400 text-[1.05rem] leading-relaxed">
          {children}
        </div>
      </div>

      {footer && (
        <div className="px-8 py-5 border-t-2 border-black/5 dark:border-white/5 bg-black/5 dark:bg-white/5">
          {footer}
        </div>
      )}
    </div>
  );
}
