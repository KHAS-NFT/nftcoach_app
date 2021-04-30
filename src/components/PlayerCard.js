import React, { useState } from "react";

import PlayerAvatar from "./PlayerAvatar";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import From from "react-bootstrap/Form";
import Form from "react-bootstrap/Form";

import ReactModal from "react-modal";

import { sellPlayer } from "../contract/gameFunctions";


const PlayerCard = ({ playerId }) => {

    const [show, setShow] = useState(false);
    const [price, setPrice] = useState(0);

    const changePrice = (e) => {
        console.log(e.target.value);
        setPrice(e.target.value);
    }

    const handleClose = async () => {
        console.log(playerId);
        await sellPlayer(playerId, price);
        setShow(false);
    }
    const handleShow = () => setShow(true);

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    };

    const SellModal = () => {
        return (
            <ReactModal style={customStyles} isOpen={show} contentLabel="Sell Player">
                <Modal.Header closeButton>
                    <Modal.Title>Sell Player</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className="text-center p-4">
                        <InputGroup>
                            <Form.Label>Price</Form.Label>
                            <Form.Control className="ml-4 mr-3" type="number" min="0.1" max="999.0" step="0.1" key="changePrice" value={price} onChange={changePrice} />
                            <InputGroup.Append>AVAX</InputGroup.Append>
                        </InputGroup>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Sell Player
                </Button>
                </Modal.Footer>
            </ReactModal>
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
                </Card.Body>
                <Card.Footer className="bg-white">
                    <div className="bg-transparent ts-border-none">
                        <Button variant="primary" onClick={handleShow}>Sell Player</Button>
                        <SellModal />
                    </div>
                </Card.Footer>
            </Card>
        </Col>
    );
}

export default PlayerCard;