import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import useUserData from '../hooks/useUserData';

const UserInfoModal = ({ showModal, handleCloseModal }) => {
    const { user } = useUserData();
    //   const [showModal, setShowModal] = useState(false);

    //   const toggleModal = () => setShowModal(!showModal);

    if (user) {
        return (
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>User Info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="user-info">
                        <h1>Hello, <span>{user.name}</span></h1>
                        <p>Email: {user.email}</p>
                        <img src={user.photoURL} alt="User Avatar" />
                    </div>
                </Modal.Body>
            </Modal>
        );
    }   
}

export default UserInfoModal;
