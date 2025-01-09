import { describe, expect, it, afterEach, vi } from 'vitest'

import errorHandling from "../error-handling"; // Ajuste o caminho conforme necessário

import '@testing-library/jest-dom'

// Mock para console.error
vi.spyOn(console, "error").mockImplementation(() => {});

describe("errorHandling()", () => {
  afterEach(() => {
    vi.clearAllMocks(); // Clear mocks between tests
  });

  it("handles API response errors correctly", () => {
    const mockError = {
      isAxiosError: true,
      response: {
        status: 404,
        data: { message: "Not Found" },
      },
    };

    const result = errorHandling(mockError);

    expect(console.error).toHaveBeenCalledWith("Erro na resposta da API:", {
      status: 404,
      data: { message: "Not Found" },
    });
    expect(result).toBe(mockError); // The function should return the original error
  });

  it("handles no response errors correctly", () => {
    const mockError = {
      isAxiosError: true,
      request: {},
    };

    const result = errorHandling(mockError);

    expect(console.error).toHaveBeenCalledWith("Nenhuma resposta recebida:", mockError.request);
    expect(result).toBe(mockError);
  });

  it("handles request setup errors correctly", () => {
    const mockError = {
      isAxiosError: true,
      message: "Network Error",
    };

    const result = errorHandling(mockError);

    expect(console.error).toHaveBeenCalledWith("Erro ao fazer a requisição:", "Network Error");
    expect(result).toBe(mockError);
  });

  it("handles non-Axios errors correctly", () => {
    const mockError = new Error("Unexpected Error");

    const result = errorHandling(mockError);

    expect(console.error).toHaveBeenCalledWith("Erro inesperado:", mockError);
    expect(result).toBeNull();
  });
});