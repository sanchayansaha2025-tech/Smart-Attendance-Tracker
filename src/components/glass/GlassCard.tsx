import React from 'react';
import { cn } from '@/lib/utils';

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'interactive' | 'luminous';
  glowEffect?: boolean;
}

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant = 'default', glowEffect = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'glass-card relative rounded-2xl border transition-all duration-300 ease-out',
          'bg-[var(--glass-bg)] border-[var(--glass-border)] shadow-[var(--glass-shadow)]',
          'backdrop-blur-[var(--glass-blur)] backdrop-saturate-[var(--glass-saturate)]',
          'hover:shadow-[var(--glass-shadow-hover)]',
          glowEffect && 'hover:border-[var(--glass-border-luminous)]',
          variant === 'interactive' && [
            'cursor-pointer',
            'hover:-translate-y-0.5',
            'hover:border-[var(--glass-border-luminous)]',
            'active:translate-y-0 active:scale-[0.99]',
          ],
          variant === 'luminous' && [
            'border-[var(--glass-border-luminous)]',
            'shadow-[var(--glass-shadow-hover)]',
          ],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlassCard.displayName = 'GlassCard';
