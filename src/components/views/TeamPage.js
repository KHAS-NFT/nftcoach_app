import React, { useEffect, useContext } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PriceCard from "../PriceCard";

import { GameContext } from "../../context/GameContext";

import { getTeamId } from "../../contract/gameFunctions";

const Home = () => {

    const [, , teamId, setTeamId] = useContext(GameContext);

    useEffect(() => {
        async function getData() {
            const ctcResultId = await getTeamId();
            setTeamId(ctcResultId);
        }
        getData();
    }, []);

    if (teamId === "") {
        console.log("Have no team");
    } else {
        console.log("Have team");
    }

    return teamId === "" ? (
        <Container>
            <Row className="no-gutters ts-cards-same-height mt-5">
                <Col className="offset-sm-4" sm={4} lg={4}>
                    <PriceCard price="1 AVAX" chances={[80, 15, 4, 1]} />
                </Col>
            </Row>
        </Container>
    ) :
        <Container>
            <Row>You have a team</Row>
        </Container>
        ;
}

export default Home;