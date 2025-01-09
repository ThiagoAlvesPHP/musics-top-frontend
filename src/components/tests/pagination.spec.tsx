import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Pagination } from '../pagination';

import '@testing-library/jest-dom'

describe('Pagination component', () => {
  const mockOnGo = vi.fn();

  const mockData = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  const renderMock = (item: typeof mockData[0]) => <div key={item.id}>{item.name}</div>;

  it('renders items when data is provided', () => {
    render(<Pagination data={mockData} render={renderMock} currentPage={1} pages={3} />);
    mockData.forEach(item => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
    });
  });

  it('renders "not found" text when data is empty', () => {
    render(<Pagination data={[]} render={renderMock} />);
    expect(screen.getByText('Nenhum dado encontrado!')).toBeInTheDocument();
  });

  it('displays the correct current page and total pages', () => {
    render(<Pagination data={mockData} render={renderMock} currentPage={2} pages={3} />);
    expect(screen.getByText('Página 2 de 3')).toBeInTheDocument();
  });

  it('calls onGo with the correct page number when "next" is clicked', () => {
    render(
      <Pagination
        data={mockData}
        render={renderMock}
        currentPage={1}
        pages={3}
        isNextPage={true}
        onGo={mockOnGo}
      />
    );

    const nextButton = screen.getByRole('next');
    fireEvent.click(nextButton);

    expect(mockOnGo).toHaveBeenCalledWith(2); // Next page
  });

  it('calls onGo with the correct page number when "previous" is clicked', () => {
    render(
      <Pagination
        data={mockData}
        render={renderMock}
        currentPage={2}
        pages={3}
        isPrevPage={true}
        onGo={mockOnGo}
      />
    );

    const prevButton = screen.getByRole('prev');
    fireEvent.click(prevButton);

    expect(mockOnGo).toHaveBeenCalledWith(1); // Previous page
  });

  it('renders dots correctly for multiple pages', () => {
    render(
      <Pagination
        data={mockData}
        render={renderMock}
        currentPage={2}
        pages={5}
        qtdDots={3}
        onGo={mockOnGo}
      />
    );

    // Should render page buttons 1, 2, 3
    expect(screen.getByText('01')).toBeInTheDocument();
    expect(screen.getByText('02')).toBeInTheDocument();
    expect(screen.getByText('03')).toBeInTheDocument();
  });

  it('calls onGo with the correct page number when a page number is clicked', () => {
    render(
      <Pagination
        data={mockData}
        render={renderMock}
        currentPage={1}
        pages={3}
        onGo={mockOnGo}
      />
    );

    const pageButton = screen.getByText('02');
    fireEvent.click(pageButton);

    expect(mockOnGo).toHaveBeenCalledWith(2); // Page clicked
  });
});