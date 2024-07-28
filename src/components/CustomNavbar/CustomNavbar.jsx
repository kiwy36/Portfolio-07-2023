import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './CustomNavbar.css';

function CustomNavbar() {
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => {
    setExpanded(false);
  };

  return (
    <>
      <Navbar expand="lg" bg="dark" variant="dark" sticky="top" className='barra-de-navegacion'expanded={expanded}>
        <Container fluid className='container'>
          <Navbar.Brand href='#inicio' id="banner-link" onClick={() => setExpanded(false)}>
            <h1 className="logo">Wittner Kevin</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" onClick={() => setExpanded(!expanded)} />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link id="mydate-link"  onClick={handleNavClick}>
                <li className="link">Sobre mi</li>
              </Nav.Link>
              <Nav.Link id="curriculum-link" onClick={handleNavClick}>
                <li className="link">Skills</li>
              </Nav.Link>
              <Nav.Link id="proyec-link" onClick={handleNavClick}>
                <li className="link">Proyectos</li>
              </Nav.Link>
              {/* <Nav.Link id="contacto-link" onClick={() => {}}>
                <li className="link">Contacto</li>
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default CustomNavbar;
