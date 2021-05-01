import React from "react";

import Container from "react-bootstrap/Container";

import Logo from "../assets/img/logo-240.png";

const AppFooter = () => {
    return (
        <footer className="ts-footer" style={{ backgroundColor: "#000" }}>
            <Container className="text-center mt-5 py-3 text-white">
                <div className="ts-title mt-4">
                    <h6>NFT Coach is a basketball manager game where every team and every player is a NFT.</h6>
                    <h6>Connect your wallet and be a part of the community!</h6>
                </div>
                <div className="text-center text-white pb-2 d-inline-block">
                    <img src={Logo} className="ml-5" height="50px" />

                    <small>© 2021 NFTCoach.io, All Rights Reserved</small>
                </div>
            </Container>
        </footer >
    );
}

export default AppFooter;