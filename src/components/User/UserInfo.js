import React from 'react';

const UserInfo = ({ name, email, photoURL, role }) => {
  return (
    <div className="user-info">
      <h1>Hello, <span>{name}</span></h1>
      <p>Your role is: {role}</p>
      <p>Email: {email}</p>
      <img src={photoURL} alt="User Avatar" />
    </div>
  );
}

export default UserInfo;
