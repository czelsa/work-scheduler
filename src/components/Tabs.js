import React from 'react';

const Tabs = ({ tabs, activeTab, handleTabClick }) => {
  return (
    <ul className="tabs">
      {tabs.map(tab => (
        <li className={activeTab === tab.key ? 'active' : ''} onClick={() => handleTabClick(tab.key)} key={tab.key}>
          {tab.label}
        </li>
      ))}
    </ul>
  );
}

export default Tabs;
