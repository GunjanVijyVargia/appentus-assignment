import React from "react";
import { Nav, Navbar, Button, Row, Col, Container } from "react-bootstrap"
import './index.css';
import { FaCameraRetro, FaTwitter, FaFacebook } from "react-icons/fa";

const Header = () => {
    return (
        <div className="content-padding pt-2 bg-primary">
            <Navbar bg="primary" expand="lg" >
                <Container>
                    <Navbar.Brand href="#home" className="brand-name  logo-name fs-1"><div className="main-logo-name">Creative</div><div className="sub-logo-name">Agency</div></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="justify-content-end w-100">
                            <Nav.Link href="#home"><FaCameraRetro /></Nav.Link>
                            <Nav.Link href="#home"><FaTwitter /></Nav.Link>
                            <Nav.Link href="#home"><FaFacebook /></Nav.Link>
                            <Nav.Link href="#home">HOME</Nav.Link>
                            <Nav.Link href="#service">SERVICES</Nav.Link>
                            <Nav.Link href="#portfolio">PORTFOLIO</Nav.Link>
                            <Nav.Link href="#testimonial">TESTIMONIAL</Nav.Link>
                            <Nav.Link href="#contact">CONTACT</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Row className=" d-flex justify-content-center bg-primary pl-5 pt-5 pb-5 m-0">
                <Col lg={12} md sm>
                    <h1 className="text-white fw-600">Welcome</h1>
                    <p className="text-white ss-100">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totamrem aperiam, eaque ipsa quae ab illo inventore veritatis et.</p>
                    <Button className="start-btn px-5  me-3">START</Button>
                    <Button className="portfolio-btn ">PORTFOLIO</Button>
                </Col>

            </Row>
        </div>
    );
}
export default Header;