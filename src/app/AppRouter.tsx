import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from '@/components/layout/AppLayout';
import { HomePage } from '@/app/pages/HomePage';
import { AttendancePage } from '@/app/pages/AttendancePage';
import { RoutinePage } from '@/app/pages/RoutinePage';
import { AnalyticsPage } from '@/app/pages/AnalyticsPage';
import { ProfilePage } from '@/app/pages/ProfilePage';

export function AppRouter(): React.JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="attendance" element={<AttendancePage />} />
          <Route path="routine" element={<RoutinePage />} />
          <Route path="analytics" element={<AnalyticsPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
