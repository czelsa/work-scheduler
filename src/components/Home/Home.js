import React, { useState } from 'react';
import Schedule from '../Scheduler/Schedule';
import CompanyConfig from '../Config/CompanyConfig';
// import Tabs from './Tabs';
import Sidebar from '../Common/Sidebar';
import useUserData from '../../hooks/useUserData';
import './Home.css';


function Home() {
  const { user, employees } = useUserData();
  const [activeTab, setActiveTab] = useState('config'); // stan do przechowywania aktywnej podstrony
  
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
        {activeTab === 'config' && <CompanyConfig numEmployees={numEmployees} employees={employees} workDays={workDays} workHours={workHours} />}
        {/* {activeTab === 'schedule' && <WorkScheduleForm />} */}
        {activeTab === 'schedule' && <Schedule />}
      </div>
    </div>
  );
}

export default Home;
