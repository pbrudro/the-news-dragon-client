import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {
  const { user,logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then()
    .catch(error => console.error(error));
  }

  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto ">
              <Link className='me-3' to="/category/0">Home</Link>
              <Link className='me-3' to="">About</Link>
              <Link className='me-3' to="">Career</Link>
            </Nav>
            <Nav>
              {user &&
                  <FaUserCircle
                    style={{ fontSize: '2rem', marginRight: '10px' }}>
                  </FaUserCircle>
                    
              }
              {
                user ?
                    <Button onClick={handleLogOut} variant="secondary">
                      LogOut
                    </Button>
                  :
                  <Link to='/login'>
                    <Button variant="secondary">
                      Login
                    </Button>
                  </Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;