import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="p-4 box mt-3 text-center">
        Hello Welcome <br />
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </>
  );
};

export default Home;

// import React from 'react';
// import { auth } from '../services/firebase'

// const Home = ({ user }) => {
//   return (
//     <div className="home">
//       <h1>Hello, <span></span>{user.displayName}</h1>
//       <img src={user.photoURL} alt="" />
//       <button className="button signout" onClick={() => auth.signOut()}>Sign out</button>
//     </div>
//   )
// }

// export default Home;
