import React from "react";

import PlayerAvatar from "./PlayerAvatar";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

// TODO: Implement sell player, with modal

const PlayerCard = ({ playerId }) => {
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

export default PlayerCard;