import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import EmployeesPage from './components/EmployeesPage';

test('EmployeesPage renders correctly', () => {
  render(
    <Router>
      <EmployeesPage />
    </Router>
  );
  expect(screen.getByText('Employees')).toBeInTheDocument();
});
