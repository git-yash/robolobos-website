import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function RoboNavbar() {
    return (
        <Navbar bg="dark" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="/" style={{color:"white"}}>
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
                        <NavDropdown title="Teams" id="basic-nav-dropdown" menuVariant="dark" style={{color:"white"}}>
                            <NavDropdown.Item href="/Teams/FRC" style={{color:"white"}}>
                                FRC
                            </NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="/Teams/FTC" style={{color:"white"}}>
                                FTC
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/Volunteer" style={{color:"white"}}>Volunteer</Nav.Link>
                        <Nav.Link href="/Calender" style={{color:"white"}}>Calender</Nav.Link>
                        <NavDropdown title="Support Us" id="basic-nav-dropdown" menuVariant="dark">
                            <NavDropdown.Item href="/Support-Us/Booster" style={{color:"white"}}>
                                Booster
                            </NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="/Support-Us/Store" style={{color:"white"}}>
                                Store
                            </NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="/Support-Us/Donate" style={{color:"white"}}>
                                Donate
                            </NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="/Support-Us/Fundraising" style={{color:"white"}}>
                                Fundraising
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/Resources" style={{color:"white"}}>Resources</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default RoboNavbar;