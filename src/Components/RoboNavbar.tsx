import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function RoboNavbar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#HomePage">
                    <img
                        src="/logo192.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Robolobos logo"
                    />
                    Robolobos
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Teams" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/#/Screens/FRCPage">
                                FRC
                            </NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="/#/Screens/FTCPage">
                                FTC
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#VolunteerPage">Volunteer</Nav.Link>
                        <Nav.Link href="#CalenderPage">Calender</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default RoboNavbar;