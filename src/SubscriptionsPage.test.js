import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { toast } from 'react-toastify';
import SubscriptionsPage from './components/SubscriptionsPage';

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

describe('SubscriptionsPage', () => {
    test('validates fields are filled and terms are agreed', () => {
        render(<SubscriptionsPage />);
        fireEvent.click(screen.getByRole('button', { name: /submit form/i }));
      
        expect(toast.error).toHaveBeenCalledWith("Please fill all fields and agree to the terms and conditions.");
      });
      
});
