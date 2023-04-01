import React, { useState, useEffect } from 'react';
import UserInfo from './UserInfo';
import ScheduleList from './ScheduleList';
import CompanyConfig from './CompanyConfig';
// import Tabs from './Tabs';
import Sidebar from './Sidebar';
import useUserData from '../hooks/useUserData';


function Home() {
  const { user, employees } = useUserData();
  const [activeTab, setActiveTab] = useState('userInfo'); // stan do przechowywania aktywnej podstrony

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  }

  if (!user || !employees.length < 0) {
    return <div>Loading...</div>;
  }

  const numEmployees = employees.length;
  const workDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const workHours = '8:00 AM - 5:00 PM';

  return (
    <div className="home">
      <Sidebar activeTab={activeTab} handleTabClick={handleTabClick} />
      <div className="content">
        {activeTab === 'userInfo' && <UserInfo id={user.id} name={user.name} email={user.email} photoURL={user.photoURL} />}
        {activeTab === 'config' && <CompanyConfig numEmployees={numEmployees} employees={employees} workDays={workDays} workHours={workHours} />}
        {activeTab === 'schedule' && <ScheduleList />}
      </div>
    </div>
  );
}

export default Home;
