import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, {useState, useEffect} from 'react';

import Logout from '../Logout';

function AdminNavbar() {  
  const [username, setUsername] = useState("");

  const handleLogout = async () => {
    await Logout();
  }

  useEffect(() => {
    fetchUsername()
  }, [])

  const fetchUsername = async () => {
    const backend_url = import.meta.env.VITE_BACKEND_API_URL
    const url = backend_url + "/api/username"
    try{
        const response = await fetch(url,
            {
                method: 'GET',
                mode: 'cors',
                credentials: 'include',
            }
        )

        const data = await response.json()
        setUsername(data.username)

    } catch(error) {
       console.log(error)
    }
    
  } 


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
          <NavDropdown title={"Welcome " +  username} id="basic-nav-dropdown">
              <NavDropdown.Item>
                <button className='nav-link' onClick={() => handleLogout()} >Logout</button>
              </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}



export default AdminNavbar;
