import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";

import TeamCard from "../TeamCard";
import { ChallengeProvider, ChallengeContext } from "../../context/ChallengeContext";
import { GameContext } from "../../context/GameContext";

import { getAllTeams, getPlayers, getPlayerDetails, getTeamId, makeChallenge } from "../../contract/gameFunctions";
import PlayerCardChallenge from "../PlayerCardChallenge";

const Challenge = () => {

    const [account, , teamId, setTeamId, , setLastChallenge] = useContext(GameContext);

    const [teams, setTeams] = useState([]);
    const [playerDetails, setPlayerDetails] = useState([]);

    useEffect(() => {
        async function getCtc() {
            const teamIdCtc = await getTeamId();
            setTeamId(teamIdCtc);

            const allTeams = await getAllTeams();
            setTeams(allTeams);

            const allPlayers = await getPlayers(account);
            for (var playerId of allPlayers) {
                const playerDetail = await getPlayerDetails(playerId);
                setPlayerDetails(prevState => [...prevState, playerDetail]);
            }
        }
        getCtc();
    }, []);

    return (
        <ChallengeProvider>
            <Container className="mt-5">
                <Alert className="text-center" variant="dark">YOUR TEAM'S ID: {teamId}</Alert>

                <h2 className="py-5">Select a Team to Match</h2>
                <Row>
                    {teams.map(id => {
                        if (id !== teamId) {
                            return (<TeamCard teamId={id} />);
                        }
                    })}
                </Row>
                <h2 className="py-5">Select Your Players</h2>
                <Row>
                    {playerDetails.map((playerDetail, idx) =>
                        <PlayerCardChallenge
                            playerId={playerDetail.playerId}
                            level={playerDetail.level}
                            rate={playerDetail.rate}
                            idx={idx} />)}
                </Row>
                <Row className="my-5">
                    <Col md={4} />
                    <Col md={4}>
                        <ChallengeButton setLast={setLastChallenge} />
                    </Col>
                </Row>
            </Container>
        </ChallengeProvider>
    );
}

const ChallengeButton = ({ setLast }) => {
    const [selectedTeamId, , selectedPlayers,] = useContext(ChallengeContext);
    const isActive = selectedTeamId !== "" && selectedPlayers.length === 5;

    const [show, setShow] = useState(false);
    const history = useHistory();


    const LoadingModal = () => {
        return (
            <Modal centered show={show}>
                <Modal.Body className="text-center">
                    <h5>Match is being played right now...</h5>
                    <Spinner animation="border" />
                </Modal.Body>
            </Modal>);
    }

    const handleClick = async () => {
        setShow(true);
        setLast(selectedTeamId);
        const result = await makeChallenge(selectedTeamId, selectedPlayers);
        history.push(result ? "/challenge/w" : "/challenge/l");
    }

    return (<>
        <Button
            block={true}
            size="lg"
            disabled={!isActive}
            variant={isActive ? "primary" : "secondary"}
            onClick={handleClick}>
            Challenge
        </Button>
        <LoadingModal />
    </>);
}

export default Challenge;