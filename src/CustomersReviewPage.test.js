import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { toast } from 'react-toastify';
import CustomersReviewPage from './components/CustomersReviewPage';

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

describe('CustomersReviewPage', () => {
    test('submits a comment and displays success toast', async () => {
      render(<CustomersReviewPage />);
  
      fireEvent.change(screen.getByPlaceholderText(/your name/i), { target: { value: 'John Doe' } });
      fireEvent.change(screen.getByPlaceholderText(/your comment/i), { target: { value: 'Great service!' } });
  
      fireEvent.click(screen.getByRole('button', { name: /submit/i }));
  
      await waitFor(() => {
        expect(toast.success).toHaveBeenCalledWith('Comment added successfully!');
      });
    });
});
