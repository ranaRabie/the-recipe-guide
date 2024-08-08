import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../assets/logo-shape.jpg";
import logoText from "../../assets/logo-text.jpg";

function Header() {
    return (
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt="The recipe guide"
                        src={logo}
                        height="70"
                        className="d-inline-block align-top"
                    />{' '}
                    <img
                        alt="The recipe guide"
                        src={logoText}
                        width="280"
                        className="d-inline-block align-top"
                    />{' '}
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Favorites</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;