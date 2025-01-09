import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AuthLogin } from '../auth-login'
import { Provider } from 'react-redux';
import configureStore from "redux-mock-store";
import { MemoryRouter } from 'react-router-dom';

import '@testing-library/jest-dom'

const mockStore = configureStore([]);

// Mock do store Redux
const renderWithProviders = (ui: React.ReactNode, storeState: any) => {
  const store = mockStore(storeState);
  return render(
    <Provider store={store}>
      <MemoryRouter>{ui}</MemoryRouter>
    </Provider>
  );
};

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    Navigate: ({ to }: { to: string }) => <div>Navigate to {to}</div>,
  };
});

describe('AuthLogin Component', () => {
  it('redirects to "/" when token and user data are present', () => {
    const initialState = {
      user: {
        token: 'mock-token',
        data: { id: 1, name: 'Test User' },
      },
    };

    renderWithProviders(<AuthLogin><div>Children Content</div></AuthLogin>, initialState);

    // Check if Navigate has rendered correctly
    expect(screen.getByText('Navigate to /')).toBeInTheDocument();
  });

  it('renders children when no token or user data are present', () => {
    const initialState = {
      user: {
        token: null,
        data: null,
      },
    };

    renderWithProviders(<AuthLogin><div>Children Content</div></AuthLogin>, initialState);

    // Checks if children are rendered
    expect(screen.getByText('Children Content')).toBeInTheDocument();
  });

  it('renders children when only token is present', () => {
    const initialState = {
      user: {
        token: 'mock-token',
        data: null,
      },
    };

    renderWithProviders(<AuthLogin><div>Children Content</div></AuthLogin>, initialState);

    // Checks if children are rendered
    expect(screen.getByText('Children Content')).toBeInTheDocument();
  });

  it('renders children when only user data is present', () => {
    const initialState = {
      user: {
        token: null,
        data: { id: 1, name: 'Test User' },
      },
    };

    renderWithProviders(<AuthLogin><div>Children Content</div></AuthLogin>, initialState);

    // Check if children are rendered
    expect(screen.getByText('Children Content')).toBeInTheDocument();
  });
});
