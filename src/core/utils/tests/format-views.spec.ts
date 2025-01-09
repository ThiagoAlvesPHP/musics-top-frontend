import { describe, expect, it, afterEach, vi } from 'vitest'

import formatViews from "../format-views"; // Ajuste o caminho conforme necessário

import '@testing-library/jest-dom'

describe("formatViews utility", () => {
  it("formats numbers in the billions correctly", () => {
    expect(formatViews(1000000000)).toBe("1B");
    expect(formatViews(1500000000)).toBe("2B"); // Rounding
  });

  it("formats numbers in the millions correctly", () => {
    expect(formatViews(1000000)).toBe("1M");
    expect(formatViews(2500000)).toBe("3M"); // Rounding
  });

  it("formats numbers in the thousands correctly", () => {
    expect(formatViews(1000)).toBe("1K");
    expect(formatViews(4999)).toBe("5K"); // Rounding
  });

  it("returns small numbers without formatting", () => {
    expect(formatViews(999)).toBe("999");
    expect(formatViews(0)).toBe("0");
  });

  it("handles edge cases", () => {
    expect(formatViews(999999)).toBe("1M"); // Test the edge of the thousand to million scale
    expect(formatViews(999999999)).toBe("1B"); // Test the edge of the million to billion scale
  });
});