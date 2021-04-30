import React from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const PriceCard = ({ price, chances }) => {
    return (
        <Card className="text-center ts-price-box ts-price-box__promoted">
            <Card.Header style={{ backgroundColor: "#346de0" }} className="p-0">
                <h5 style={{ backgroundColor: "#f46a20" }}
                    className="mb-0 py-3 text-white">Starter Pack</h5>
                <div className="ts-title text-white py-5 mb-0">
                    <h3 className="mb-0 font-weight-normal">
                        {price}
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
                    <li>{chances[0]} % Rookie</li>
                    <li>{chances[1]} % Amateur</li>
                    <li>{chances[2]} % Star</li>
                    <li>{chances[3]} % Legend</li>
                </ul>
            </Card.Body>

            <Card.Footer className="bg-transparent ts-border-none">
                <Button variant="primary">Buy Team</Button>
            </Card.Footer>
        </Card>
    );
}

export default PriceCard;