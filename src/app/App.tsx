import React from 'react';
import { ThemeProvider } from '@/lib/theme';
import { AppRouter } from './AppRouter';

export function App(): React.JSX.Element {
  return (
    <ThemeProvider defaultTheme="system" storageKey="attendance-tracker-theme">
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
