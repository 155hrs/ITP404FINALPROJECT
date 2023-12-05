import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { toast } from 'react-toastify';
import InventoryManagement from './components/InventoryManagement';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ products: [{ id: 1, title: "Sample Product" }] }),
  })
);

jest.mock('react-toastify', () => {
  const actualToast = jest.requireActual('react-toastify');
  return {
    ...actualToast,
    toast: {
      ...actualToast.toast,
      success: jest.fn(),
      error: jest.fn(),
    },
  };
});

describe('InventoryManagement', () => {
    beforeEach(() => {
        global.fetch = jest.fn(() =>
          Promise.resolve({
            json: () => Promise.resolve({ products: [{ id: 1, title: "Sample Product" }] }),
          })
        );
      });      

  test('loads and displays products', async () => {
    render(<InventoryManagement />);
    const productList = await screen.findByText('Sample Product');
    expect(productList).toBeInTheDocument();
  });

  test('allows a user to add a product', async () => {
    render(<InventoryManagement />);
    fireEvent.click(screen.getByText('Add New Product'));
    fireEvent.change(screen.getByPlaceholderText('Enter product name'), { target: { value: 'New Product' } });
    fireEvent.click(screen.getByText('Submit'));

    await waitFor(() => {
      expect(toast.success).toHaveBeenCalledWith('Changes made!', expect.anything());
    });
  });

  test('allows a user to delete a product', async () => {
    render(<InventoryManagement />);
    await screen.findByText('Sample Product');
    fireEvent.click(screen.getByText('Delete'));

    await waitFor(() => {
      expect(toast.success).toHaveBeenCalledWith('changes made!', expect.anything());
    });
  });
});
