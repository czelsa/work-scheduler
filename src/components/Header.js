import React, { useState }from 'react';
import { Navbar, Nav, Button } from "react-bootstrap";
import UserInfoModal from './UserInfoModal';

const Header = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <div className="header">
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#">Work Scheduler</Navbar.Brand>
                <Nav className="ml-auto">
                    <Button variant="outline-primary" onClick={handleShowModal}>
                        User Info
                    </Button>
                </Nav>
            </Navbar>
            <UserInfoModal show={showModal} handleShowModal={handleShowModal} handleCloseModal={handleCloseModal} />
        </div>
    );
};

export default Header;