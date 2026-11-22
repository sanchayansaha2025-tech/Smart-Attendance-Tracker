import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { GlassCard } from '@/components/glass/GlassCard';
import { GlassButton } from '@/components/glass/GlassButton';

describe('Glass UI Components', () => {
  it('renders GlassCard with children and default classes', () => {
    render(<GlassCard data-testid="test-card">Card Content</GlassCard>);
    const card = screen.getByTestId('test-card');
    expect(card).toBeInTheDocument();
    expect(card).toHaveTextContent('Card Content');
    expect(card).toHaveClass('glass-card');
    expect(card).toHaveClass('rounded-2xl');
  });

  it('renders GlassCard with luminous variant', () => {
    render(<GlassCard variant="luminous" data-testid="luminous-card">Luminous</GlassCard>);
    const card = screen.getByTestId('luminous-card');
    expect(card).toHaveClass('border-[var(--glass-border-luminous)]');
  });

  it('renders GlassButton and handles click', () => {
    render(<GlassButton>Click Me</GlassButton>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('glass-button');
    expect(button).toHaveClass('active:scale-[0.96]');
  });
});
