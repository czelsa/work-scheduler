import React from 'react';
import Nav from 'react-bootstrap/Nav';

function Sidebar({ activeTab, handleTabClick }) {
  return (
    <Nav className="flex-column sidebar">
      <Nav.Item>
        <Nav.Link className={activeTab === 'userInfo' ? 'active' : ''} onClick={() => handleTabClick('userInfo')}>User Info</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className={activeTab === 'config' ? 'active' : ''} onClick={() => handleTabClick('config')}>Config</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className={activeTab === 'schedule' ? 'active' : ''} onClick={() => handleTabClick('schedule')}>Schedule</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Sidebar;
