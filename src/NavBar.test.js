import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';

describe('NavBar', () => {
  test('renders nav links correctly', () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );

    expect(screen.getByText('Inventory App')).toBeInTheDocument();
    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(screen.getByText('Inventory Management')).toBeInTheDocument();
    expect(screen.getByText('Admin')).toBeInTheDocument();
    expect(screen.getByText('Employees')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByText('Subscription')).toBeInTheDocument();
    expect(screen.getByText('Customer Reviews')).toBeInTheDocument();

    expect(screen.getByText('Products').closest('a')).toHaveAttribute('href', '/products');
  });
});
