import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useParams } from 'react-router-dom';
import EmployeeDetail from './components/EmployeeDetail';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

describe('EmployeeDetail', () => {
    test('displays employee details for a valid ID', () => {
        useParams.mockReturnValue({ employeeId: '1' });
        render(<EmployeeDetail />);
        
        expect(screen.getByText(/Alice Johnson/)).toBeInTheDocument();
        expect(screen.getByText(/1985-02-12/)).toBeInTheDocument();
        expect(screen.getByText(/Software Development/)).toBeInTheDocument();
      });
      

  test('displays not found message for an invalid ID', () => {
    useParams.mockReturnValue({ employeeId: '999' });
    render(<EmployeeDetail />);
    expect(screen.getByText('Employee not found')).toBeInTheDocument();
  });
});
