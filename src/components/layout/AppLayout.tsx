import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Home, CheckCircle2, CalendarDays, BarChart3, User, Sparkles } from 'lucide-react';
import { ThemeToggle } from '@/lib/theme';
import { cn } from '@/lib/utils';

interface NavItem {
  name: string;
  to: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  { name: 'Home', to: '/', icon: Home },
  { name: 'Attendance', to: '/attendance', icon: CheckCircle2 },
  { name: 'Routine', to: '/routine', icon: CalendarDays },
  { name: 'Analytics', to: '/analytics', icon: BarChart3 },
  { name: 'Profile', to: '/profile', icon: User },
];

export function AppLayout(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-background text-foreground bg-ambient relative flex flex-col font-sans transition-colors duration-300">
      {/* Top Header */}
      <header className="sticky top-0 z-40 w-full border-b border-[var(--glass-border)] bg-[var(--glass-bg)]/80 backdrop-blur-[var(--glass-blur)]">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary shadow-sm">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <span className="font-semibold tracking-tight text-sm sm:text-base">Smart Attendance</span>
              <span className="hidden sm:inline-block ml-2 text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                College Tracker
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle variant="cycle" />
          </div>
        </div>
      </header>

      {/* Main Outlet */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 pt-6 pb-28">
        <Outlet />
      </main>

      {/* Floating Glass Bottom Navigation */}
      <nav
        aria-label="Bottom Navigation"
        className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 max-w-md w-[calc(100%-2rem)] sm:w-auto"
      >
        <div className="glass-nav flex items-center justify-around sm:justify-center gap-1 sm:gap-2 px-3 py-2 rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] shadow-[var(--glass-shadow-hover)] backdrop-blur-[var(--glass-blur)] backdrop-saturate-[var(--glass-saturate)]">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  cn(
                    'relative flex flex-col sm:flex-row items-center gap-1 sm:gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 select-none',
                    isActive
                      ? 'bg-primary text-primary-foreground shadow-sm shadow-primary/30 scale-105'
                      : 'text-foreground/70 hover:text-foreground hover:bg-[var(--glass-bg-hover)]'
                  )
                }
              >
                <Icon className="h-4 w-4" />
                <span className="text-[10px] sm:text-xs font-medium">{item.name}</span>
              </NavLink>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
