import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Music, Props, StatusColor, StatusText } from '../music'

import '@testing-library/jest-dom'

describe('Music component', () => {
  const defaultProps: Props = {
    to: 'https://example.com',
    index: 1,
    title: 'Sample Music',
    views: '1,000',
    image: 'https://via.placeholder.com/150',
    status: 'approved',
  };

  it('renders with all props', () => {
    render(<Music {...defaultProps} />);
    
    // Check if the link is correct
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', defaultProps.to);

    // Check the index
    const index = screen.getByText('01');
    expect(index).toBeInTheDocument();

    // Check the title
    const title = screen.getByText(defaultProps.title!);
    expect(title).toBeInTheDocument();

    // Check views
    const views = screen.getByText(`${defaultProps.views} Visualizações`);
    expect(views).toBeInTheDocument();

    // Check status
    const status = screen.getByText(StatusText[defaultProps.status!]);
    expect(status).toHaveClass(StatusColor[defaultProps.status!]);

    // Check the image
    const image = screen.getByRole('image');
    expect(image).toHaveAttribute('src', defaultProps.image);
  });

  it('renders without index', () => {
    render(<Music {...defaultProps} index={undefined} />);
    
    // Checks if index is not rendered
    const index = screen.queryByText('01');
    expect(index).not.toBeInTheDocument();
  });

  it('renders without status', () => {
    render(<Music {...defaultProps} status={undefined} />);
    
    // Checks if status is not rendered
    const status = screen.queryByText(StatusText.approved);
    expect(status).not.toBeInTheDocument();
  });
});
