import React from 'react';
import { GlassCard } from '@/components/glass/GlassCard';
import { BarChart3 } from 'lucide-react';

export function AnalyticsPage(): React.JSX.Element {
  return (
    <div className="space-y-6">
      <GlassCard className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-xl bg-accent text-foreground border border-border">
            <BarChart3 className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-xl font-bold">Attendance Analytics</h1>
            <p className="text-xs text-foreground/60">Statistical trends, risk forecasts, and subject breakdowns</p>
          </div>
        </div>
        <p className="text-sm text-foreground/70">
          Analytics module placeholder. Recharts integration ready for trend lines, bar comparisons, and target trajectory charts.
        </p>
      </GlassCard>
    </div>
  );
}
