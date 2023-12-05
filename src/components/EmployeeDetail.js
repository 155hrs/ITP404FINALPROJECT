import React from 'react';
import { useParams } from 'react-router-dom';

document.title = "Employee Details";

const employees = [
    { id: 1, name: 'Alice Johnson', birthday: '1985-02-12', specialty: 'Software Development' },
    { id: 2, name: 'Bob Smith', birthday: '1990-07-08', specialty: 'Project Management' },
    { id: 3, name: 'Charlie Davis', birthday: '1982-11-23', specialty: 'Graphic Design' },
    { id: 4, name: 'Diana Evans', birthday: '1992-04-16', specialty: 'Human Resources' },
    { id: 5, name: 'Ethan Brown', birthday: '1978-09-29', specialty: 'Marketing' },
    { id: 6, name: 'Fiona Clarke', birthday: '1988-12-30', specialty: 'Sales' },
    { id: 7, name: 'George Wilson', birthday: '1994-05-14', specialty: 'Customer Support' },
    { id: 8, name: 'Hannah Miller', birthday: '1996-03-03', specialty: 'Data Analysis' },
    { id: 9, name: 'Ian Murphy', birthday: '1975-01-17', specialty: 'Quality Assurance' },
    { id: 10, name: 'Julia Turner', birthday: '1980-08-21', specialty: 'Operations' },
    { id: 11, name: 'Kevin Lopez', birthday: '1987-06-11', specialty: 'Finance' },
    { id: 12, name: 'Lily White', birthday: '1993-10-05', specialty: 'Legal' },
    { id: 13, name: 'Mason Green', birthday: '1977-04-19', specialty: 'Public Relations' },
    { id: 14, name: 'Nora Baker', birthday: '1989-07-24', specialty: 'Research and Development' },
    { id: 15, name: 'Oliver Ward', birthday: '1995-02-28', specialty: 'Information Technology' }
  ];

const EmployeeDetail = () => {
    const { employeeId } = useParams();
    const employee = employees.find(emp => emp.id === parseInt(employeeId));

    if (!employee) {
        return <div>Employee not found</div>;
    }

    return (
        <div className='container'>
            <h1>Employee Detail</h1>
            <p><strong>Name:</strong> {employee.name}</p>
            <p><strong>Birthday:</strong> {employee.birthday}</p>
            <p><strong>Specialty:</strong> {employee.specialty}</p>
        </div>
    );
};

export default EmployeeDetail;
