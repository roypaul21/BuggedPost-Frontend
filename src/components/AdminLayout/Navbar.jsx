import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, Navigate} from "react-router-dom";

import Logout from '../Logout';


function AdminNavbar() {  

  const handleLogout = async () => {
    await Logout();
  };

  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="light" fixed='top' id="navbar-bug">
      <Container>
        <Navbar.Brand>
          <Link to="/home">
            <img
                src='./images/bb-icon.png'
                width="100"
                height="45"
                className="d-inline-block align-top"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className='nav-link' to="/home">Home</Link>
            <Link className='nav-link' to="/my-post">My Post</Link>
            <Link className='nav-link' to="/create-blog">Create Post</Link>  
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <button className='nav-link' onClick={() => handleLogout()} >Logout</button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}



export default AdminNavbar;
