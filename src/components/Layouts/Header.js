import React, { useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap/';
import "../../styles/HeaderStyle.css"
import { Link } from 'react-router-dom';
import logo from "../../assets/logo/logo.png"

function Header() {
  const [nav, setNav] = useState(false);

  // Scroll Navbar
  const changeValueOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 100 ? setNav(true) : setNav(false);
  };

  window.addEventListener("scroll", changeValueOnScroll);



  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className={`${nav === true ? "sticky" : ""}`}
      >
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/" className='logo'>
              <img src={logo} alt='logo' className='img-fluid' />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/section1">About</Nav.Link>
              <Nav.Link as={Link} to="/section2">OUR Menu</Nav.Link>
              <Nav.Link as={Link} to="/section3">Shop</Nav.Link>
              <Nav.Link as={Link} to="/section4">promotion</Nav.Link>
              <Nav.Link as={Link} to="/section5">Blog</Nav.Link>
              <Nav.Link as={Link} to="/section7">Contact</Nav.Link>

              <Nav.Link as={Link} to="/">
                <div className='cart'>
                  <i class="bi bi-bag-heart-fill fs-5"></i>
                  <em className='roundpoint'>2</em>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>

  )
}

export default Header
