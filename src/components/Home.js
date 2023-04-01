import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import UserInfo from './UserInfo';
import ScheduleList from './ScheduleList';
import CompanyConfig from './CompanyConfig';

function Home() {
  const [user, setUser] = useState(null);
  const [employees, setEmployees] = useState([]);

  const [activeTab, setActiveTab] = useState('userInfo'); // stan do przechowywania aktywnej podstrony

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  }

  useEffect(() => {
    fetch('http://localhost:1234/user')
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/employees')
      .then(response => response.json())
      .then(data => setEmployees(data))
      .catch(error => console.log(error));
  }, []);

  if (!user || !employees.length < 0) {
    return <div>Loading...</div>;
  }

  console.log(employees)
  const numEmployees = employees.length;
  const workDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const workHours = '8:00 AM - 5:00 PM';

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className={activeTab === 'userInfo' ? 'active' : ''} onClick={() => handleTabClick('userInfo')}>User Info</Nav.Link>
            <Nav.Link className={activeTab === 'config' ? 'active' : ''} onClick={() => handleTabClick('config')}>Config</Nav.Link>
            <Nav.Link className={activeTab === 'schedule' ? 'active' : ''} onClick={() => handleTabClick('schedule')}>Schedule</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="home">
        {activeTab === 'userInfo' && <UserInfo id={user.id} name={user.name} email={user.email} photoURL={user.photoURL} />}
        {activeTab === 'config' && <CompanyConfig numEmployees={numEmployees} employees={employees} workDays={workDays} workHours={workHours} />}
        {activeTab === 'schedule' && <ScheduleList />}
      </div>
    </>
  );
}

export default Home;
