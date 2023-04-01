import React, { useState }from 'react';
import { Navbar, Nav, Button } from "react-bootstrap";
import UserInfoModal from './UserInfoModal';

const Header = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#">Work Scheduler</Navbar.Brand>
                <Nav className="ml-auto">
                    <Button variant="outline-primary" onClick={handleShowModal}>
                        User Info
                    </Button>
                </Nav>
            </Navbar>
            <UserInfoModal show={showModal} onHide={handleCloseModal} />
        </>
    );
};

export default Header;