import React, { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { getPlayers } from "../../contract/gameFunctions";

import PriceCard from "../PriceCard";
import PlayerCard from "../PlayerCard";

const MyTeam = ({ owner }) => {

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        async function getCtcPlayers() {
            const playerList = await getPlayers(owner);
            setPlayers(await playerList);
        }
        getCtcPlayers();
    }, []);

    return (
        <section id="team" className="mt-0">
            <Container>
                <div className="ts-title"></div>
                <div className="ts-title">
                    <h2>My Team</h2>
                </div>

                <Row>
                    {players.map(playerId => <PlayerCard playerId={playerId} />)}
                </Row>
            </Container>

            <Container style={{ backgroundColor: "#f7f7f7" }} className="py-3 mt-3" >

                <div class="ts-title text-center">
                    <h2>Buy Extra Player</h2>
                </div>

                <Row className="w-100 no-gutters ts-cards-same-height text-center justify-content-center">
                    <Col lg={4}>
                        <PriceCard
                            price="1 AVAX"
                            title="Standard"
                            subtitle="per player"
                            isPromoted={false}
                            boxType={1}
                            chances={[80, 15, 4, 1]}
                        />
                    </Col>
                    <Col lg={4}>
                        <PriceCard
                            price="2 AVAX"
                            title="Rare"
                            subtitle="per player"
                            isPromoted={true}
                            boxType={2}
                            chances={[20, 60, 15, 5]}
                        />
                    </Col>
                    <Col lg={4}>
                        <PriceCard
                            price="3 AVAX"
                            title="Mythical"
                            subtitle="per player"
                            isPromoted={false}
                            boxType={3}
                            chances={[5, 25, 45, 25]}
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default MyTeam;