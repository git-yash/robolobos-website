import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './RoboNavbar.css'

function RoboNavbar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="/" style={{color: "white", fontSize:35, fontFamily:"Lucida Console"}}>
                    <img
                        src="/roboticsLogo.png"
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                        alt="Robolobos logo"
                    />
                    Robolobos
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="collapse navbar-collapse justify-content-end margin-left">
                        <NavDropdown title={<span style={{color: "white", fontSize:20, fontFamily:"Lucida Console"}}>Teams</span>}
                                     id="basic-nav-dropdown"
                                     menuVariant="dark">
                            <NavDropdown.Item href="/Teams/FRC" style={{color: "white", fontFamily:"Lucida Console"}}>
                                FRC
                            </NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="/Teams/FTC" style={{color: "white", fontFamily:"Lucida Console"}}>
                                FTC
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/Volunteer" style={{color: "white", fontSize:20, fontFamily:"Lucida Console"}}>
                            Volunteer</Nav.Link>
                        <Nav.Link href="/Calender" style={{color: "white", fontSize:20, fontFamily:"Lucida Console"}}>
                            Calender</Nav.Link>
                        <NavDropdown title={<span style={{color: "white", fontSize:20, fontFamily:"Lucida Console"}}>
                            Support Us</span>} id="basic-nav-dropdown"
                                     menuVariant="dark">
                            <NavDropdown.Item href="/Support-Us/Booster"
                                              style={{color: "white", fontFamily:"Lucida Console"}}>
                                Booster
                            </NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="/Support-Us/Store"
                                              style={{color: "white", fontFamily:"Lucida Console"}}>
                                Store
                            </NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="/Support-Us/Donate"
                                              style={{color: "white", fontFamily:"Lucida Console"}}>
                                Donate
                            </NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="/Support-Us/Fundraising"
                                              style={{color: "white", fontFamily:"Lucida Console"}}>
                                Fundraising
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/Resources"
                                  style={{color: "white", fontSize:20, fontFamily:"Lucida Console"}}>Resources</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default RoboNavbar;
