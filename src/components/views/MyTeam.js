import React, { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

import { getPlayers } from "../../contract/gameFunctions";

import Ulas from "../../assets/img/ulas.jpg"
import PlayerAvatar from "../PlayerAvatar";
import PriceCard from "../PriceCard";

const PlayerCard = ({ playerId }) => {

    console.log(playerId);

    return (
        <Col sm={6} lg={3}>
            <Card>
                <div className="d-flex justify-content-center">
                    <PlayerAvatar id={playerId} size="400px" />

                </div>

                <Card.Body>
                    <h5 className="mb-1">
                        Player #{playerId}
                    </h5>
                </Card.Body>
                <Card.Footer className="bg-white">
                    <div className="bg-transparent ts-border-none">
                        <Button variant="primary">Sell Player</Button>
                    </div>
                </Card.Footer>
            </Card>
        </Col>
    );
}

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
        <section id="team" className="ts-block">
            <Container>
                <div className="ts-title"></div>
                <div className="ts-title">
                    <h2>My Team</h2>
                </div>

                <Row>
                    {players.map(playerId => <PlayerCard playerId={playerId} />)}
                </Row>

                <Row>
                    <PriceCard price="1 AVAX" chances={[80, 15, 4, 1]} />
                    <PriceCard price="2 AVAX" chances={[20, 60, 15, 5]} />
                    <PriceCard price="3 AVAX" chances={[5, 25, 45, 25]} />
                </Row>
            </Container>
        </section>
    );
}

export default MyTeam;