import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import fetchMock from 'jest-fetch-mock';
import AdminPage from './components/AdminPage';
import { ToastContainer } from 'react-toastify';

fetchMock.enableMocks();

beforeEach(() => {
  fetch.resetMocks();
});

it('loads and displays products', async () => {
  fetch.mockResponseOnce(JSON.stringify({
    products: [
      { id: 1, title: "Product 1" },
      { id: 2, title: "Product 2" }
    ]
  }));

  render(<AdminPage />);

  await waitFor(() => {
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 2')).toBeInTheDocument();
  });
});

it('selects and deletes products', async () => {
  fetch.mockResponseOnce(JSON.stringify({
    products: [
      { id: 1, title: "Product 1" },
      { id: 2, title: "Product 2" }
    ]
  }));

  render(<AdminPage />);
  await waitFor(() => screen.getByText('Product 1'));

  fireEvent.click(screen.getAllByRole('checkbox')[1]);
  expect(screen.getByText('Delete Selected (1)')).toBeInTheDocument();

  fireEvent.click(screen.getByText('Delete Selected (1)'));
  await waitFor(() => expect(screen.queryByText('Product 1')).not.toBeInTheDocument());
});