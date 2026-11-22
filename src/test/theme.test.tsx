import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider, ThemeToggle } from '@/lib/theme';

describe('Theme System', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.className = '';
  });

  it('initializes with system theme and allows cycling theme', async () => {
    const user = userEvent.setup();

    render(
      <ThemeProvider defaultTheme="light">
        <ThemeToggle />
      </ThemeProvider>
    );

    const toggleButton = screen.getByRole('button');
    expect(toggleButton).toBeInTheDocument();
    expect(document.documentElement).toHaveClass('light');

    // Click to cycle light -> dark
    await user.click(toggleButton);
    expect(document.documentElement).toHaveClass('dark');
  });
});
