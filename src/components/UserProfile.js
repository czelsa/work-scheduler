import React, { useState, useEffect } from 'react';
import UserInfoModal from './UserInfoModal';

function UserProfile({ user }) {
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className="user-profile">
      <div className="user-info">
        <img src={user.photoURL} alt="User Avatar" />
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>
      <button onClick={handleModalOpen}>User Info</button>
      <UserInfoModal show={showModal} onClose={handleModalClose} user={user} />
    </div>
  );
}

export default UserProfile;
