import React, { useContext } from "react";

import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { ChallengeContext } from "../context/ChallengeContext";

import { generateFromString } from "generate-avatar";

const TeamCard = ({ teamId }) => {

    const [selectedTeamId, setSelectedTeamId] = useContext(ChallengeContext);

    const handleSelect = () => {
        setSelectedTeamId(teamId);
    }

    const selected = selectedTeamId === teamId;

    return (
        <Col sm={6} lg={3}>
            <Card>
                <div className="d-flex justify-content-center" style={{ height: "200px" }}>
                    <img src={`data:image/svg+xml;utf8,${generateFromString(teamId)}`} />
                </div>

                <Card.Body>
                    <h5 className="mb-1">
                        Team #{teamId}
                    </h5>
                </Card.Body>
                <Card.Footer className="bg-white">
                    <div className="bg-transparent ts-border-none">
                        <Button variant={selected ? "secondary" : "primary"} onClick={handleSelect}>{selected ? "Selected" : "Select Opponent"}</Button>
                    </div>
                </Card.Footer>
            </Card>
        </Col>
    );
}

export default TeamCard;