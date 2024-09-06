import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { IoIosSchool } from 'react-icons/io';

function Navbars() {
  return (
    <Navbar
      className="sticky-top" // Bootstrap class to make the navbar sticky
      style={{ backgroundColor: 'blue', paddingRight: '800px' }}
    >
      <Container>
        <Navbar.Brand style={{ color: 'white', fontSize: '30px' }} href="#home">
          <IoIosSchool />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Navbar.Brand style={{ color: 'white' }} href="#home">
              School Management System By <u>Hassan Ud-Din</u>
            </Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
