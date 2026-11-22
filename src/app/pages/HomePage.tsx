import React from 'react';
import { GlassCard } from '@/components/glass/GlassCard';
import { GlassButton } from '@/components/glass/GlassButton';
import { ThemeToggle } from '@/lib/theme';
import { ShieldCheck, Sparkles, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HomePage(): React.JSX.Element {
  return (
    <div className="space-y-6">
      {/* Hero Welcome Card */}
      <GlassCard variant="luminous" className="p-6 sm:p-8 overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Hybrid Liquid Glass Architecture</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Smart College Attendance Tracker
            </h1>
            <p className="text-sm text-foreground/70 max-w-xl">
              Real-time attendance intelligence, academic routine optimization, and predictive cut-off analytics for modern students.
            </p>
          </div>
          <div className="flex sm:flex-col items-center sm:items-end justify-between gap-3 pt-2 sm:pt-0">
            <span className="text-xs text-foreground/60">Quick Theme:</span>
            <ThemeToggle variant="segmented" />
          </div>
        </div>
      </GlassCard>

      {/* Grid of Status & Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Placeholder Setup Card */}
        <GlassCard variant="interactive" glowEffect className="p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-status-safe/15 text-status-safe border border-status-safe/30">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm">Project Scaffolding Complete</h3>
                <p className="text-xs text-foreground/60">Strict TypeScript • Vitest • Tailwind • Glass Tokens</p>
              </div>
            </div>
          </div>
          <p className="text-xs text-foreground/75 leading-relaxed">
            All foundation systems, tokens, components, and routing skeletons are verified and ready for feature implementation.
          </p>
          <div className="pt-2 flex items-center gap-2">
            <Link to="/attendance">
              <GlassButton variant="primary" size="sm">
                <span>View Attendance</span>
                <ArrowRight className="h-3.5 w-3.5 ml-1" />
              </GlassButton>
            </Link>
          </div>
        </GlassCard>

        {/* Quick Nav Card */}
        <GlassCard variant="interactive" glowEffect className="p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-primary/15 text-primary border border-primary/30">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm">Academic Schedule</h3>
                <p className="text-xs text-foreground/60">Interactive routines and attendance targets</p>
              </div>
            </div>
          </div>
          <p className="text-xs text-foreground/75 leading-relaxed">
            Monitor timetable shifts, upcoming holidays, and keep your eligibility safely above required thresholds.
          </p>
          <div className="pt-2 flex items-center gap-2">
            <Link to="/routine">
              <GlassButton variant="default" size="sm">
                <CheckCircle2 className="h-3.5 w-3.5 mr-1" />
                <span>Open Routine</span>
              </GlassButton>
            </Link>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
