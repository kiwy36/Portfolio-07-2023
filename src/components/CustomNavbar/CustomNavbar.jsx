import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './CustomNavbar.css';

function CustomNavbar() {
  return (
    <>
      <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
        <Container fluid className='container'>
          <Navbar.Brand href='/' id="banner-link" onClick={() => {}}><h1 className="logo">Wittner Kevin</h1></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link id="mydate-link" onClick={() => {}}>
                <li className="link">Sobre mi</li>
              </Nav.Link>
              <Nav.Link id="curriculum-link" onClick={() => {}}>
                <li className="link">Curriculum</li>
              </Nav.Link>
              <Nav.Link id="proyec-link" onClick={() => {}}>
                <li className="link">Proyectos</li>
              </Nav.Link>
              <Nav.Link  id="contacto-link" onClick={() => {}}>
                <li className="link">Contacto</li>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default CustomNavbar;
