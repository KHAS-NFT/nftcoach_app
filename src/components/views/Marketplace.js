import React, { useState, useEffect, useContext } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import MarketCard from "../MarketCard";

import { GameContext } from "../../context/GameContext";

const Marketplace = () => {

    const [account, , ,] = useContext(GameContext);
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        async function getListings() {
            const listings = ["1238", "2223", "6464"];
            // getListings
            setPlayers(listings);
        }
        getListings();
    }, []);

    if (account === "") {
        return (
            <Container className="mt-5">
                <h1 className="text-center">Please connect your account to continue</h1>
            </Container>
        );
    }

    return (
        <Container>
            <div className="ts-title"></div>
            <div className="ts-title">
                <h2>Players for Sale</h2>
            </div>
            <Row>
                {players.map(playerId =>
                    <MarketCard playerId={playerId} />)}
            </Row>
        </Container>
    );
}

export default Marketplace;