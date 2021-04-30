import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"

const PriceCard = ({ price }) => {

    return (
        <Card className="text-center ts-price-box ts-price-box__promoted">
            <Card.Header style={{ backgroundColor: "#346de0" }} className="p-0">
                <h5 style={{ backgroundColor: "#f46a20" }}
                    className="mb-0 py-3 text-white">Starter Pack</h5>
                <div className="ts-title text-white py-5 mb-0">
                    <h3 className="mb-0 font-weight-normal">
                        1 AVAX
                </h3>
                    <small className="ts-opacity__50">Pre-Launch Price for 5 standart player</small>
                </div>
            </Card.Header>

            <small className="ts-opacity__50">
                <br />Players will be created based on below percentages.<br />
            If you are lucky enough you will have a Legendary player<br /><br />
            </small>
            <Card.Body className="p-0">
                <ul className="list-unstyled ts-list-divided">
                    <li>80 % Rookie</li>
                    <li>15 % Amateur</li>
                    <li>4 % Star</li>
                    <li>1 % Legend</li>
                </ul>
            </Card.Body>

            <Card.Footer className="bg-transparent ts-border-none">
                <Button variant="primary">Buy Team</Button>
            </Card.Footer>
        </Card>
    );
}

const Home = () => {
    return (
        <Container>
            <Row className="no-gutters ts-cards-same-height mt-5">
                <Col className="offset-sm-4" sm={4} lg={4}>
                    <PriceCard price="1 AVAX" />
                </Col>
            </Row>
        </Container>
    );
}

export default Home;