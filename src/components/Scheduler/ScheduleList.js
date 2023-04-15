import React from "react";
import { Table } from "react-bootstrap";

const ScheduleList = (props) => {
  // const schedules = [
  //   { id: 1, date: "2022-04-01", employee: "John Doe", shift: "Morning" },
  //   { id: 2, date: "2022-04-02", employee: "Jane Smith", shift: "Evening" },
  //   { id: 3, date: "2022-04-03", employee: "Bob Johnson", shift: "Night" }
  // ];
  const schedules = props.schedule;
  console.log(schedules)

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Day of week</th>
          <th>Start hour</th>
          <th>End hour</th>
          <th>Employees</th>
        </tr>
      </thead>
      <tbody>
        {schedules.map((daySchedule) => (
          <tr key={daySchedule.dayOfWeek}>
            <td>{daySchedule.dayOfWeek}</td>
            <td>{daySchedule.startHour}</td>
            <td>{daySchedule.endHour}</td>
            <td>
              {daySchedule.employees.map((employee) => (
                <div key={employee.employeeIndex}>
                  Employee {employee.employeeIndex}: {employee.startHour}-{employee.endHour}
                </div>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ScheduleList;
