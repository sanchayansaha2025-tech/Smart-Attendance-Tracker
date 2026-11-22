import React from 'react';
import { GlassCard } from '@/components/glass/GlassCard';
import { User } from 'lucide-react';

export function ProfilePage(): React.JSX.Element {
  return (
    <div className="space-y-6">
      <GlassCard className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-xl bg-secondary text-secondary-foreground border border-border">
            <User className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-xl font-bold">User Profile & Settings</h1>
            <p className="text-xs text-foreground/60">Account configuration, academic criteria, and sync</p>
          </div>
        </div>
        <p className="text-sm text-foreground/70">
          Profile module placeholder. Future features: minimum attendance percentage threshold, Firebase Auth profile, and cloud sync.
        </p>
      </GlassCard>
    </div>
  );
}
