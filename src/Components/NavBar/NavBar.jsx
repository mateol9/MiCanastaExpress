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
      <Card.Img id='logoNav' style={{ maxHeight: '90px', maxWidth: '90px' }} variant="top" src='https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/logo%2FLOGO%20PRINCIPAL.png?alt=media&token=398018ef-a6aa-49bc-9dd2-e93183b9c0a5' />
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
          <a
            href='https://www.facebook.com/profile.php?id=100083066395537'
          >
          <Card.Img variant="top" src="https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/rrss%2Ffacebook.svg?alt=media&token=f1d8628c-c89c-469d-a105-fadd1eb7d88e" style={{ width: '1rem', height: '1rem', alignSelf: 'center', margin: "10px"}} />
          </a>
          <a
            href='https://www.instagram.com/micanastaexpress/'
          >
          <Card.Img variant="top" src="https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/rrss%2Finstagram.svg?alt=media&token=86e74074-ba0d-4d19-8b6e-8df97a859cd0" style={{ width: '1rem', height: '1rem', alignSelf: 'center', margin: "10px"}} />
          </a>
          <a
            href='https://api.whatsapp.com/send?phone=13058146416'
          >
          <Card.Img variant="top" src="https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/rrss%2Fwhatsapp.svg?alt=media&token=f560f445-deb1-4e0e-bf2d-1a94389bb01b" style={{ width: '1rem', height: '1rem', alignSelf: 'center', margin: "10px"}} />
          </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;