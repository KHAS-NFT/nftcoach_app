import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

import Logo from "../assets/img/logo-240.png";

const Component = () => {

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
                        <Nav.Link className="text-white">Home</Nav.Link>
                        <Nav.Link className="text-white">My Team</Nav.Link>
                        <Nav.Link className="text-white">Buy Player</Nav.Link>
                        <Nav.Link className="text-white">Challenge</Nav.Link>
                        <Nav.Link className="text-white">Marketplace</Nav.Link>
                        <Nav.Link className="text-white"></Nav.Link>
                        <Button
                            className="m-1 px-3"
                            variant="primary"
                            size="sm"
                        >
                            Connect Your METAMASK Wallet
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Component;