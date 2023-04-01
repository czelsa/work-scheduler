import React from 'react'

const CompanyConfig = ({ numEmployees, employees, workDays, workHours }) => {
    return (
      <div>
        <h2>Configuration:</h2>
        <p>Number of employees: {numEmployees}</p>
        <ul>
          {employees.map((employee) => (
            <li key={employee.id}>{employee.name}</li>
          ))}
        </ul>
        <p>Work days: {workDays.join(', ')}</p>
        <p>Work hours: {workHours}</p>
      </div>
    );
  };

export default CompanyConfig