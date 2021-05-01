import React from "react";

import { LinkContainer } from "react-router-bootstrap";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import Logo from "../assets/img/logo-240.png";
import ConnectMetamask from "../contract/ConnectMetamask";

const AppNavbar = () => {

    const navbarStyle = {
        backgroundColor: "#000",
    }

    return (
        <Navbar style={navbarStyle} expand="lg">
            <Container>
                <Navbar.Brand>
                    <img src={Logo} alt="NFT Coach Basketball Manager" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarNavAltMarkup" className="text-white bg-white" />

                <Navbar.Collapse id="navbarNavAltMarkup">
                    <Nav className="ml-auto text-white">
                        <LinkContainer to="/">
                            <Nav.Link className="text-white">My Team</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/challenge">
                            <Nav.Link className="text-white">Challenge</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/marketplace">
                            <Nav.Link className="text-white">Marketplace</Nav.Link>
                        </LinkContainer>
                        <Nav.Link className="text-white"></Nav.Link>
                        <ConnectMetamask />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AppNavbar;