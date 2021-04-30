import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const MyTeam = () => {
    return (
        <section id="team" className="ts-block">
            <Container>
                <div class="ts-title"></div>
                <div class="ts-title">
                    <h2>My Team</h2>
                </div>

                <Row>
                    <Col sm={6} lg={3}>
                        <Card>
                            <Card.Image>
                                {/* AVATAR HERE */}
                            </Card.Image>
                            <Card.Body>
                                <h5 className="mb-1">
                                    {/* PLAYER NAME HERE */}
                                </h5>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default MyTeam;