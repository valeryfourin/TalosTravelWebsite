import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import "../styles/Footer.scss";
import Nav from 'react-bootstrap/Nav';
import instagram from '../images/icons/instagram.png';
import facebook from '../images/icons/facebook.png';
import whatsapp from '../images/icons/whatsapp.png';
import Logo from './Logo';

const Footer = () => {
    return (
        <div className="footer mb-auto">
            <Row>
                <Col className="d-flex justify-content-center">
                    <Logo />
                </Col>
                <Col>
                <Navbar>
                    <Nav className="d-flex flex-column">
                        <Nav.Link href="#"><p><b>About</b></p></Nav.Link>
                        <Nav.Link href="#">About Talos Travel</Nav.Link>
                        <Nav.Link href="#">How it works</Nav.Link>
                        <Nav.Link href="#">Careers</Nav.Link>
                        <Nav.Link href="#">Blog</Nav.Link>
                        <Nav.Link href="#">Forum</Nav.Link>
                    </Nav>
                    </Navbar>
                </Col>
                <Col>
                <Navbar>
                    <Nav className="d-flex flex-column">
                    <Nav.Link href="#"><p><b>Partner with us</b></p></Nav.Link>
                    <Nav.Link href="#">Partnership programs</Nav.Link>
                    <Nav.Link href="#">Affiliate programs</Nav.Link>
                    <Nav.Link href="#">Connectivity partners</Nav.Link>
                    <Nav.Link href="#">Integrations</Nav.Link>
                    <Nav.Link href="#">Community</Nav.Link>
                    </Nav>
                </Navbar>
                </Col>
                <Col>
                <Navbar>
                    <Nav className="d-flex flex-column">
                    <Nav.Link href="#"><p><b>Support</b></p></Nav.Link>
                    <Nav.Link href="#">Help Center</Nav.Link>
                    <Nav.Link href="#">Contact us</Nav.Link>
                    <Nav.Link href="#">Privacy policy</Nav.Link>
                    <Nav.Link href="#">Terms of service</Nav.Link>
                    <Nav.Link href="#">Trust and safety</Nav.Link>
                    <Nav.Link href="#">Accessibility</Nav.Link>
                    </Nav>
                </Navbar>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col className="icons d-flex ">
                    <img src={instagram} alt="instagram"></img>
                    <img src={facebook} alt="facebook"></img>
                    <img src={whatsapp} alt="whatsapp"></img>
                </Col>
                <Col className="d-flex justify-content-center">&#169;2021 Talos Travel incorporated</Col>
            </Row>
            
        </div>
    );
}

export default Footer;