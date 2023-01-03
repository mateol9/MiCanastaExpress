import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
      <Card.Img style={{ maxHeight: '90px', maxWidth: '90px' }} variant="top" src='https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/logo%2FLOGO%20PRINCIPAL.png?alt=media&token=398018ef-a6aa-49bc-9dd2-e93183b9c0a5' />
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            id='navBar'
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', textAlign: 'center', fontSize: '12px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">SURPRISE BREAKFAST</Nav.Link>
            <Nav.Link href="#action2">FLOWER BOUQUETS AND CHOCOLATES</Nav.Link>
            <Nav.Link href="#action2">CORPORATE AND EVENTS</Nav.Link>
            <Nav.Link href="#" disabled>ON US</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;