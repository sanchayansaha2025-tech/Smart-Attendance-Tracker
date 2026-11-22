import React from 'react';
import { cn } from '@/lib/utils';

export interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'destructive' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'icon';
}

export const GlassButton = React.forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ className, variant = 'default', size = 'md', children, disabled, ...props }, ref) => {
    const sizeClasses = {
      sm: 'h-8 px-3 text-xs rounded-lg gap-1.5',
      md: 'h-10 px-4 text-sm rounded-xl gap-2',
      lg: 'h-12 px-6 text-base rounded-2xl gap-2.5',
      icon: 'h-10 w-10 p-0 rounded-xl justify-center',
    };

    const variantClasses = {
      default: cn(
        'bg-[var(--glass-bg)] text-foreground border border-[var(--glass-border)]',
        'hover:bg-[var(--glass-bg-hover)] hover:border-[var(--glass-border-luminous)] hover:shadow-[var(--glass-shadow-hover)]'
      ),
      primary: cn(
        'bg-primary/80 text-primary-foreground border border-primary/40 shadow-sm',
        'hover:bg-primary hover:border-primary/60 hover:shadow-md'
      ),
      destructive: cn(
        'bg-destructive/80 text-destructive-foreground border border-destructive/40',
        'hover:bg-destructive hover:border-destructive/60'
      ),
      ghost: 'bg-transparent border border-transparent text-foreground hover:bg-[var(--glass-bg-hover)]',
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          'glass-button inline-flex items-center justify-center font-medium shadow-[var(--glass-shadow)]',
          'backdrop-blur-[var(--glass-blur)] backdrop-saturate-[var(--glass-saturate)]',
          'transition-all duration-200 ease-out select-none',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          'active:scale-[0.96] active:bg-[var(--glass-bg-active)]',
          'disabled:pointer-events-none disabled:opacity-50',
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

GlassButton.displayName = 'GlassButton';
