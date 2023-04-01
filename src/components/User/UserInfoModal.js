import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import useUserData from '../../hooks/useUserData';
import UserInfo from './UserInfo';

const UserInfoModal = ({ show, handleShowModal, handleCloseModal }) => {
    const { user } = useUserData();
    if (user) {
        return (
            <Modal show={show} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{user.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <UserInfo name={user.name} email={user.email} photoURL={user.photoURL} role={user.role} />
                </Modal.Body>
            </Modal>
        );
    }

};

export default UserInfoModal;
