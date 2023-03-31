import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";

function App() {
  return (
    <Container style={{ width: "400px" }}>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

// import { useState, useEffect } from 'react';

// import Login from './Login';
// import Home from './Home';
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from '../services/firebase'

// function App() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//   onAuthStateChanged(auth, user => {
//     setUser(user);
//   })
//   }, [])

//   console.log(user);

//   return (
//     <div className="app">
//       {user ? <Home user={user} /> : <Login />}
//     </div>
//   );
// }

// export default App;
