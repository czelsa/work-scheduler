import React from 'react';

const UserInfo = ({ name, email, photoURL }) => {
  return (
    <div className="user-info">
      <h1>Hello, <span>{name}</span></h1>
      <p>Email: {email}</p>
      <img src={photoURL} alt="User Avatar" />
    </div>
  );
}

export default UserInfo;
