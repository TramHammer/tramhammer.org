import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
function BasicExample() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg">
      <Container>

                <Navbar.Brand className="mb-2" href="/">
                <img
                  src="/img/logo.png"
                  width="270"
                  height="46"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
                </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Aligning login link to the right */}
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="https://stats.tramhammer.org">Status</Nav.Link>
              <Button href="/login" variant="danger" className="ms-3">Login</Button>
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default BasicExample;