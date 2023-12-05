import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductList from './components/ProductList';
import { BrowserRouter as Router } from 'react-router-dom';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

beforeEach(() => {
  fetch.resetMocks();
});

it('loads and displays products', async () => {
  fetch.mockResponseOnce(JSON.stringify({
    products: [
      {
        id: 1,
        title: "Test Product 1",
        thumbnail: "test-image1.jpg",
        description: "Description for Test Product 1"
      },
      {
        id: 2,
        title: "Test Product 2",
        thumbnail: "test-image2.jpg",
        description: "Description for Test Product 2"
      }
    ]
  }));

  render(
    <Router>
      <ProductList />
    </Router>
  );

  await waitFor(() => {
    expect(screen.getByText('Test Product 1')).toBeInTheDocument();
    expect(screen.getByText('Test Product 2')).toBeInTheDocument();
  });
});

test('displays error message on fetch failure', async () => {
  fetch.mockImplementationOnce(() => Promise.reject(new Error('API is down')));

  render(
    <Router>
      <ProductList />
    </Router>
  );

  await waitFor(() => {
    expect(screen.getByText('Error: Failed to load products')).toBeInTheDocument();
  });
});
