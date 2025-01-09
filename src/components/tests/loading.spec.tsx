import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Loading } from '../loading'

import '@testing-library/jest-dom'

describe("<Loading>", () => {
  it("renders without crashing", () => {
    render(<Loading />);
    const loader = screen.getByRole("loading");
    expect(loader).toBeInTheDocument();
  });

  it("applies the correct classes", () => {
    render(<Loading />);
    const loader = screen.getByRole("loading");

    expect(loader).toHaveClass("loader border-4 border-first border-b-transparent");
  });
});
