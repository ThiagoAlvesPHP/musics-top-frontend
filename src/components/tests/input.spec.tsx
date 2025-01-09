import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Input } from '../input'

import '@testing-library/jest-dom'

describe("<Input>", () => {
  it("renders a basic input", () => {
    render(<Input placeholder="Enter text" />);

    const input = screen.getByPlaceholderText("Enter text");
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass(
      "p-3 px-5 w-full outline-none border-2 border-stone-200 bg-transparent dark:border-stone-800 text-gray-800 dark:text-gray-200"
    );
  });

  it("renders a completed layout with label, icons, and error message", () => {
    render(
      <Input
        layout="completed"
        options={{
          label: "Email",
          iconLeft: <span data-testid="icon-left">👈</span>,
          iconRight: <span data-testid="icon-right">👉</span>,
          error: "This field is required",
        }}
        placeholder="Enter your email"
      />
    );

    const label = screen.getByText("Email");
    const input = screen.getByPlaceholderText("Enter your email");
    const iconLeft = screen.getByTestId("icon-left");
    const iconRight = screen.getByTestId("icon-right");
    const errorMessage = screen.getByText("This field is required");

    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(iconLeft).toBeInTheDocument();
    expect(iconRight).toBeInTheDocument();
    expect(errorMessage).toBeInTheDocument();
  });

  it("renders the input with a custom className", () => {
    render(<Input className="custom-class" placeholder="Enter text" />);

    const input = screen.getByPlaceholderText("Enter text");
    expect(input).toHaveClass("custom-class");
  });

  it("renders correctly without crashing when no options are provided", () => {
    render(<Input layout="completed" placeholder="Enter text" />);
    const input = screen.getByPlaceholderText("Enter text");

    expect(input).toBeInTheDocument();
  });
});
