import React from "react";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import './Header.css';

function Header(){
    //EXPERIENCE, PROJECTS, ABOUT, CONTACT ME
    return (
        <Navbar className="header fixed-top" expand="lg" bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand className="d-flex justify-content-center align-items-center pl-5">
                    <Container>
                        <Row>
                            <Col>
                                <div id="logo">
                                    <div className="circle">
                                        <div id="divider" />
                                        <div id="left">J</div>
                                        <div id="right">C</div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end font-size-lg">
                    <Nav>
                        <Nav.Item className="px-4">
                            <Nav.Link className="h4">Experience</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="px-4">
                            <Nav.Link className="h4">Projects</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="px-4">
                            <Nav.Link className="h4">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="px-4">
                            <Nav.Link className="h4">Contact</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
    )
}

export default Header;