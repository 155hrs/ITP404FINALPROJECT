import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { toast } from 'react-toastify';
import LoginPage from './components/LoginPage';

jest.mock('react-toastify', () => {
  const actualToast = jest.requireActual('react-toastify');
  return {
    ...actualToast,
    toast: {
      ...actualToast.toast,
      success: jest.fn(),
      error: jest.fn()
    }
  };
});

describe('LoginPage', () => {
  test('displays error toast on invalid credentials', () => {
    render(<LoginPage />);
    fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'wronguser' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'wrongpass' } });
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    expect(toast.error).toHaveBeenCalledWith('Invalid username or password!', expect.anything());
  });

  test('displays success toast on valid credentials', () => {
    render(<LoginPage />);
    fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'ITP404' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'FALL2023' } });
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    expect(toast.success).toHaveBeenCalledWith('Login successful!', expect.anything());
  });

  test('validates fields are not empty', () => {
    render(<LoginPage />);
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    expect(screen.getByText('Username is required')).toBeInTheDocument();
    expect(screen.getByText('Password is required')).toBeInTheDocument();
  });
});
