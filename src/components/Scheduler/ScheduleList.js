import React from "react";
import { Table } from "react-bootstrap";

const ScheduleList = () => {
  const schedules = [
    { id: 1, date: "2022-04-01", employee: "John Doe", shift: "Morning" },
    { id: 2, date: "2022-04-02", employee: "Jane Smith", shift: "Evening" },
    { id: 3, date: "2022-04-03", employee: "Bob Johnson", shift: "Night" }
  ];

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Date</th>
          <th>Employee</th>
          <th>Shift</th>
        </tr>
      </thead>
      <tbody>
        {schedules.map(schedule => (
          <tr key={schedule.id}>
            <td>{schedule.id}</td>
            <td>{schedule.date}</td>
            <td>{schedule.employee}</td>
            <td>{schedule.shift}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ScheduleList;
