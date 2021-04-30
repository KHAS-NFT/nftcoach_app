import React, { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import MarketCard from "../MarketCard";

const Marketplace = () => {

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        async function getListings() {
            const listings = ["1238", "2223", "6464"];
            // getListings
            setPlayers(listings);
        }
        getListings();
    }, []);

    return (
        <Container>
            <div className="ts-title"></div>
            <div className="ts-title">
                <h2>Players for SALE</h2>
            </div>
            <Row>
                {players.map(playerId =>
                    <MarketCard playerId={playerId} />)}
            </Row>
        </Container>
    );
}

export default Marketplace;