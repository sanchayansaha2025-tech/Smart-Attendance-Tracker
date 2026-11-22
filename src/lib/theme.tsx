import React, { createContext, useContext, useEffect, useState } from 'react';
import { Sun, Moon, Laptop } from 'lucide-react';
import { GlassButton } from '@/components/glass/GlassButton';
import { cn } from '@/lib/utils';

export type Theme = 'dark' | 'light' | 'system';

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}

interface ThemeProviderState {
  theme: Theme;
  resolvedTheme: 'dark' | 'light';
  setTheme: (theme: Theme) => void;
}

const initialState: ThemeProviderState = {
  theme: 'system',
  resolvedTheme: 'light',
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'vite-ui-theme',
}: ThemeProviderProps): React.JSX.Element {
  const [theme, setThemeState] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  const [resolvedTheme, setResolvedTheme] = useState<'dark' | 'light'>('light');

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');

    let effectiveTheme: 'dark' | 'light';

    if (theme === 'system') {
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      effectiveTheme = systemDark ? 'dark' : 'light';
    } else {
      effectiveTheme = theme;
    }

    root.classList.add(effectiveTheme);
    setResolvedTheme(effectiveTheme);
  }, [theme]);

  // Listen to system theme changes when in system mode
  useEffect(() => {
    if (theme !== 'system') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (): void => {
      const root = window.document.documentElement;
      root.classList.remove('light', 'dark');
      const newTheme = mediaQuery.matches ? 'dark' : 'light';
      root.classList.add(newTheme);
      setResolvedTheme(newTheme);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  const value: ThemeProviderState = {
    theme,
    resolvedTheme,
    setTheme: (newTheme: Theme) => {
      localStorage.setItem(storageKey, newTheme);
      setThemeState(newTheme);
    },
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export function useTheme(): ThemeProviderState {
  const context = useContext(ThemeProviderContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

interface ThemeToggleProps {
  className?: string;
  variant?: 'cycle' | 'segmented';
}

export function ThemeToggle({
  className,
  variant = 'cycle',
}: ThemeToggleProps): React.JSX.Element {
  const { theme, resolvedTheme, setTheme } = useTheme();

  if (variant === 'segmented') {
    return (
      <div
        className={cn(
          'inline-flex items-center rounded-xl p-1 border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-[var(--glass-blur)]',
          className
        )}
        role="group"
        aria-label="Theme selector"
      >
        <button
          type="button"
          onClick={() => setTheme('light')}
          className={cn(
            'flex items-center justify-center rounded-lg px-2.5 py-1.5 text-xs font-medium transition-all duration-200',
            theme === 'light'
              ? 'bg-primary/20 text-primary font-semibold shadow-sm'
              : 'text-foreground/70 hover:text-foreground'
          )}
          aria-label="Light theme"
        >
          <Sun className="h-3.5 w-3.5 mr-1" />
          Light
        </button>
        <button
          type="button"
          onClick={() => setTheme('dark')}
          className={cn(
            'flex items-center justify-center rounded-lg px-2.5 py-1.5 text-xs font-medium transition-all duration-200',
            theme === 'dark'
              ? 'bg-primary/20 text-primary font-semibold shadow-sm'
              : 'text-foreground/70 hover:text-foreground'
          )}
          aria-label="Dark theme"
        >
          <Moon className="h-3.5 w-3.5 mr-1" />
          Dark
        </button>
        <button
          type="button"
          onClick={() => setTheme('system')}
          className={cn(
            'flex items-center justify-center rounded-lg px-2.5 py-1.5 text-xs font-medium transition-all duration-200',
            theme === 'system'
              ? 'bg-primary/20 text-primary font-semibold shadow-sm'
              : 'text-foreground/70 hover:text-foreground'
          )}
          aria-label="System theme"
        >
          <Laptop className="h-3.5 w-3.5 mr-1" />
          System
        </button>
      </div>
    );
  }

  // Cycle mode: switches between light -> dark -> system
  const cycleTheme = (): void => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('system');
    else setTheme('light');
  };

  const getIcon = (): React.JSX.Element => {
    if (theme === 'system') {
      return <Laptop className="h-4 w-4 text-primary animate-pulse" />;
    }
    return resolvedTheme === 'dark' ? (
      <Moon className="h-4 w-4 text-primary" />
    ) : (
      <Sun className="h-4 w-4 text-amber-500" />
    );
  };

  return (
    <GlassButton
      variant="default"
      size="icon"
      onClick={cycleTheme}
      className={cn('relative', className)}
      aria-label={`Current theme: ${theme}. Click to change theme`}
      title={`Theme: ${theme.toUpperCase()} (Click to cycle)`}
    >
      {getIcon()}
    </GlassButton>
  );
}
