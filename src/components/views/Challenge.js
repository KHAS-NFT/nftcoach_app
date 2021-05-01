import React, { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import TeamCard from "../TeamCard";

import { getAllTeams } from "../../contract/gameFunctions";

const Challenge = () => {

    const [teams, setTeams] = useState([]);

    useEffect(() => {
        async function getCtc() {
            const allTeams = await getAllTeams();
            setTeams(allTeams);
        }
        getCtc();
    });

    return (
        <Container className="mt-5">
            <Row>
                {teams.map(teamId => <TeamCard teamId={teamId} />)}
            </Row>
        </Container>
    );
}

export default Challenge;