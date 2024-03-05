import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";

function GuestNavbar({loginModalOpened}) {

  const loginModalOpen = () => {
    loginModalOpened();
  }

  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="light" fixed='top' id="navbar-bug">
      <Container>
        <Navbar.Brand>
          <Link to="/landing">
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
            <Link className='nav-link' to="#">About</Link>
            <Link className='nav-link' to="#">Contact</Link>
            <Link className='nav-link' to="/signup">Register</Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <button  onClick={loginModalOpen} className='nav-link'>Login</button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}



export default GuestNavbar;
