import React, { useState } from "react";

import PlayerAvatar from "./PlayerAvatar";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { fmtPrice, buyPlayer } from "../contract/gameFunctions";

// TODO: Implement buy player, with modal

const MarketCard = ({ playerId, rate, level, price }) => {

    const [show, setShow] = useState(false);
    const priceFormatted = fmtPrice(price);

    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);
    const callBuy = async () => await buyPlayer(playerId);

    const AcceptModal = () => {
        return (
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm to Buy</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you confirm buying this player for {priceFormatted} AVAX?</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Cancel
                </Button>
                    <Button variant="success" onClick={callBuy}>
                        Buy
                </Button>
                </Modal.Footer>
            </Modal>
        );
    }

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
                    <hr />
                    <h6 className="mb-1">Rate: {rate}</h6>
                    <h6 className="mb-1">Level: {level}</h6>
                    <br />
                    <h3>{priceFormatted.toString()} AVAX</h3>
                </Card.Body>
                <Card.Footer className="bg-white">
                    <div className="bg-transparent ts-border-none">
                        <Button onClick={handleOpen} variant="primary">Buy Player</Button>
                    </div>
                </Card.Footer>
            </Card>
            <AcceptModal />
        </Col>
    );
}

export default MarketCard;