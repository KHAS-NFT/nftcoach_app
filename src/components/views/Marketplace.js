import React, { useState, useEffect, useContext } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import MarketCard from "../MarketCard";

import { GameContext } from "../../context/GameContext";

import { getListings, getPlayerDetails, fmtPrice } from "../../contract/gameFunctions";

const Marketplace = () => {

    const [account, , ,] = useContext(GameContext);
    const [players, setPlayers] = useState([]);
    const [playerDetails, setPlayerDetails] = useState([]);

    useEffect(() => {
        async function getListingsCtc() {
            const listings = await getListings();
            setPlayers(listings);

            for (var listing of listings) {
                const details = await getPlayerDetails(listing);
                setPlayerDetails(prevState => [...prevState, details]);
            }
        }
        getListingsCtc();
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
                {playerDetails.map(playerDetail => {
                    return <MarketCard
                        playerId={playerDetail.playerId}
                        price={playerDetail.price}
                        rate={playerDetail.rate}
                        level={playerDetail.level} />;
                })}
            </Row>
        </Container>
    );
}

export default Marketplace;