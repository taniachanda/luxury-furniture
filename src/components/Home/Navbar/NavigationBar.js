import React, { useContext } from 'react';
import './Navbar.css';
import { Nav, Navbar, NavLink } from 'react-bootstrap';
import { UserContext } from '../../../App';
import { Link, useHistory } from 'react-router-dom';

const NavigationBar = () => {
  const [loggedInUser] = useContext(UserContext);
  const history = useHistory();
  const handleSignOut = () => {
    localStorage.clear();
    history.go(0);
  }
  const name = JSON.parse(localStorage.getItem("name"))
  const email = JSON.parse(localStorage.getItem("email"))
  return (
    <div>
      <Navbar className="navbar top-navbar fixed-top" collapseOnSelect expand="lg" >
        <Navbar className="ml-5 H-name" style={{ color: 'white' }}>Luxury <br /> Furniture</Navbar>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <NavLink exact activeClassName="nav-active"><Link to="/home"><h6 className="custom-nav-item mr-5">Home</h6></Link></NavLink>
            <NavLink to="/"><h6 className="custom-nav-item mr-5">Bedroom</h6></NavLink>
            <NavLink to="/"><h6 className="custom-nav-item mr-5">Kitchen</h6></NavLink>
            <Nav.Link to="/"><h6 className="custom-nav-item mr-5">Blog</h6></Nav.Link>
            {/* <NavLink  activeClassName="nav-active" > <Link  to="/signIn"><h6 className="custom-nav-item mr-5 bi-info">Sign in</h6></Link></NavLink> */}
            <Nav.Link eventKey={2}>
              {email && <Nav>{name}</Nav>}
              {email && <Nav.Link variant="dark" size="sm" onClick={handleSignOut}><h6 className="custom-nav-item mr-5 bi-info">Sign Out</h6></Nav.Link>}
              {!email && <Nav.Link variant="dark" size="sm"><Link to="/signIn"><h6 className="custom-nav-item mr-5 bi-info">Sign in</h6></Link></Nav.Link>}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;