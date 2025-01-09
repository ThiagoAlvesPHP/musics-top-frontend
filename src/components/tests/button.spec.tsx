import { describe, expect, it, vi  } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Button } from '../button'

import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';

describe('Button component', () => {
  it('renders correctly with children', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('applies additional className', () => {
    render(<Button className="custom-class">Styled Button</Button>);
    const button = screen.getByText('Styled Button');
    expect(button).toHaveClass('custom-class');
  });

  it('shows loading spinner when isLoading is true', () => {
    render(<Button isLoading={true}>Loading...</Button>);
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument(); // Children are hidden
    expect(screen.getByRole('loading')).toBeInTheDocument(); // Ensure the spinner is shown
  });

  it('triggers onClick event', async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);

    const button = screen.getByText('Click Me');
    await userEvent.click(button);

    expect(handleClick).toHaveBeenCalledOnce();
  });
});
