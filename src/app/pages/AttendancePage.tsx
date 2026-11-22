import React from 'react';
import { GlassCard } from '@/components/glass/GlassCard';
import { CheckCircle2 } from 'lucide-react';

export function AttendancePage(): React.JSX.Element {
  return (
    <div className="space-y-6">
      <GlassCard className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-xl bg-status-safe/15 text-status-safe border border-status-safe/30">
            <CheckCircle2 className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-xl font-bold">Attendance Records</h1>
            <p className="text-xs text-foreground/60">Track daily subjects, logs, and margin status</p>
          </div>
        </div>
        <p className="text-sm text-foreground/70">
          Attendance module placeholder. Future features: real-time marking, bunks allowance engine, and smart safe-skip planner.
        </p>
      </GlassCard>
    </div>
  );
}
