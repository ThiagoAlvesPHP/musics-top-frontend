import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Switch } from '../switch'

import '@testing-library/jest-dom'

describe('Switch component', () => {
  it('renders with the default unchecked state', () => {
    render(<Switch checked={false} />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-gray-100');
    expect(button).not.toHaveClass('bg-blue-500');
  });

  it('renders with the checked state', () => {
    render(<Switch checked={true} />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-blue-500');
    expect(button).not.toHaveClass('bg-gray-100');
  });

  it('toggles the visual state when checked changes', () => {
    const { rerender } = render(<Switch checked={false} />);
    const button = screen.getByRole('button');

    // Initial state: unchecked
    expect(button).toHaveClass('bg-gray-100');

    // Rerender with checked=true
    rerender(<Switch checked={true} />);
    expect(button).toHaveClass('bg-blue-500');
  });

  it('triggers the onChecked callback when clicked', async () => {
    const handleChecked = vi.fn();
    render(<Switch checked={false} onChecked={handleChecked} />);

    const button = screen.getByRole('button');
    await userEvent.click(button);

    expect(handleChecked).toHaveBeenCalledOnce();
  });

  it('updates the slider position based on checked state', () => {
    render(<Switch checked={true} />);
    const slider = screen.getByRole('button').firstChild as HTMLElement;
    expect(slider).toHaveClass('translate-x-full');
  });

  it('renders the slider in the initial position when unchecked', () => {
    render(<Switch checked={false} />);
    const slider = screen.getByRole('button').firstChild as HTMLElement;
    expect(slider).not.toHaveClass('translate-x-full');
  });
});
