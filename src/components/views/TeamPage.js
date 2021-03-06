import React, { useEffect, useContext } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PriceCardStarter from "../PriceCardStarter";


import { GameContext } from "../../context/GameContext";

import { getTeamId, } from "../../contract/gameFunctions";
import MyTeam from "./MyTeam";

const Home = () => {

    const [account, , teamId, setTeamId] = useContext(GameContext);

    useEffect(() => {
        async function getData() {
            const ctcResultId = await getTeamId();
            setTeamId(ctcResultId);
        }
        getData();
    }, []);

    const updateUp = (team) => { setTeamId(team); }

    if (account === "" || account === undefined) {
        return (
            <Container className="mt-5">
                <h1 className="text-center">Please connect your account to continue</h1>
            </Container>
        );
    }


    return teamId === "0" ? (
        <Container>
            <Row className="no-gutters ts-cards-same-height mt-5">
                <Col className="offset-sm-4" sm={4} lg={4}>
                    <PriceCardStarter
                        price="1 AVAX"
                        title="Starter Pack"
                        subtitle="Pre-launch price for 5 standard players"
                        chances={[80, 15, 4, 1]}
                        update={updateUp}
                        isPromoted={true} />
                </Col>
            </Row>
        </Container>
    ) :
        <MyTeam owner={account} />;
}

export default Home;