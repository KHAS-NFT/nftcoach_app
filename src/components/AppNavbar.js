import React from "react";

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

                <Navbar.Toggle aria-controls="navbarNavAltMarkup" />

                <Navbar.Collapse id="navbarNavAltMarkup">
                    <Nav className="ml-auto text-white">
                        <Nav.Link className="text-white">My Team</Nav.Link>
                        <Nav.Link className="text-white">Challenge</Nav.Link>
                        <Nav.Link className="text-white">Marketplace</Nav.Link>
                        <Nav.Link className="text-white"></Nav.Link>
                        <ConnectMetamask />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AppNavbar;