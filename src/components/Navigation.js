/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';

import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

function Navigation() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    // Clear event listener when component unmounts
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              onClick={() => onUpdateActiveLink('home')}
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              onClick={() => onUpdateActiveLink('skills')}
              className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
            >
              Skills
            </Nav.Link>

            <Nav.Link
              href="#projects"
              onClick={() => onUpdateActiveLink('projects')}
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
            >
              Projects
            </Nav.Link>
          </Nav>

          <span className="navbar-text">
            <div className="social-icon">
              <a href="#">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="#">
                <img src={navIcon2} alt="Facebook" />
              </a>
              <a href="#">
                <img src={navIcon3} alt="Instagram" />
              </a>
            </div>

            <button className="vvd" onClick={() => console.log('connect')}>
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
