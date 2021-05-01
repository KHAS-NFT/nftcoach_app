import React, { useContext, useState, useEffect } from "react";

import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { ChallengeContext } from "../context/ChallengeContext";

import PlayerAvatar from "./PlayerAvatar";

const PlayerCardChallenge = ({ playerId, rate, level, idx }) => {

    const [, , selectedPlayers, setSelectedPlayers] = useContext(ChallengeContext);

    const [selected, setSelected] = useState(false);

    useEffect(() => setSelected(selectedPlayers.includes(idx)), []);

    const handleClick = () => {
        if (selected) {
            setSelectedPlayers(prevState => {
                const removeIdx = prevState.indexOf(idx);
                var temp = prevState;
                temp.splice(removeIdx, 1);
                return temp;
            });
            setSelected(false);
        } else if (selectedPlayers.length < 5) {
            setSelectedPlayers(prevState => [...prevState, idx]);
            setSelected(true);
        }
    }

    return (
        <Col sm={6} lg={3}>
            <Card>
                <div className="d-flex justify-content-center">
                    <PlayerAvatar id={playerId} size="400px" />
                </div>

                <Card.Body>
                    <h5 className="mb-1">
                        Player <small>#{playerId}</small>
                    </h5>
                    <br />
                    <h5>Level: {level}</h5>
                    <h5>Rate: {rate}</h5>
                </Card.Body>
                <Card.Footer className="bg-white">
                    <div className="bg-transparent ts-border-none">
                        <Button variant={selected ? "secondary" : "primary"} onClick={handleClick}>{selected ? "Selected" : "Select Player"}</Button>
                    </div>
                </Card.Footer>
            </Card>
        </Col>
    );
}

export default PlayerCardChallenge;