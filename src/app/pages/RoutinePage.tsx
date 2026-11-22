import React from 'react';
import { GlassCard } from '@/components/glass/GlassCard';
import { CalendarDays } from 'lucide-react';

export function RoutinePage(): React.JSX.Element {
  return (
    <div className="space-y-6">
      <GlassCard className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-xl bg-primary/15 text-primary border border-primary/30">
            <CalendarDays className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-xl font-bold">Academic Routine</h1>
            <p className="text-xs text-foreground/60">Weekly schedule, time slots, and room allocations</p>
          </div>
        </div>
        <p className="text-sm text-foreground/70">
          Routine module placeholder. Future features: multi-slot routines, lab sessions, and dynamic rescheduling.
        </p>
      </GlassCard>
    </div>
  );
}
