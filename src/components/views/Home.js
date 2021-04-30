import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PriceCard from "../PriceCard";

const Home = () => {
    return (
        <Container>
            <Row className="no-gutters ts-cards-same-height mt-5">
                <Col className="offset-sm-4" sm={4} lg={4}>
                    <PriceCard price="1 AVAX" chances={[80, 15, 4, 1]} />
                </Col>
            </Row>
        </Container>
    );
}

export default Home;