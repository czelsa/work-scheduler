import React from "react";
import { Dropdown } from "react-bootstrap";
import UserInfo from "./UserInfo";

const UserInfoDropdown = ({ user }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="light" id="user-dropdown">
        {user.name}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <UserInfo />
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default UserInfoDropdown;
