import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './RoboNavbar.css'
import React from 'react';

function RoboNavbar() {
    const donationWebsiteURL: string = "https://secure.qgiv.com/event/cphrobp2p"

    const openDonationWebsite = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    return (
        <Navbar bg="#09240d" variant="dark" className="Navbar" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="/" className="FontStuff1">
                    <img
                        src="/whitewolf.png"
                        width="80"
                        height="60"
                        className="d-inline-block align-top"
                        alt="Robolobos logo"
                    />

                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="collapse navbar-collapse justify-content-end margin-left">
                        <NavDropdown title={<span className="FontStuff">Teams</span>}
                                     id="basic-nav-dropdown"
                                     className="NavDropdown"
                                     menuVariant="dark">
                            <NavDropdown.Item href="/Teams/FRC" className="FontStuff">
                                FRC
                            </NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="/Teams/FTC" className="FontStuff">
                                FTC
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/Volunteer" className="FontStuff">
                            Volunteer</Nav.Link>
                        <Nav.Link href="/Calender" className="FontStuff">
                            Calender</Nav.Link>
                        <NavDropdown title={<span className="FontStuff">
                            Support Us</span>} id="basic-nav-dropdown"
                                     menuVariant="dark">
                            <NavDropdown.Item href="/Support-Us/Booster"
                                              className="FontStuff">
                                Booster
                            </NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="/Support-Us/Store"
                                              className="FontStuff">
                                Store
                            </NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="/Support-Us/Donate"
                                              className="FontStuff">
                                Donate
                            </NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="/Support-Us/Fundraising"
                                              className="FontStuff">
                                Fundraising
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/Resources"
                                  className="FontStuff">Resources
                        </Nav.Link>
                        <button style={{fontSize:15, fontWeight:"bold"}} className="btns btn btn-lg btn-outline-primary-reverse center" onClick={() => openDonationWebsite(donationWebsiteURL)}>Donate</button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default RoboNavbar;
