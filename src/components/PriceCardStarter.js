import React from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { buyPack } from "../contract/gameFunctions";

const PriceCard = ({ title, subtitle, price, chances, isPromoted, update }) => {

    const handleBuy = async () => {
        const teamId = await buyPack();
        update(teamId);
    }

    const primColor = isPromoted ? "#346de0" : "#f46a20";

    const cardClass = isPromoted ?
        "text-center ts-price-box ts-price-box__promoted" :
        "text-center ts-price-box"

    return (
        <Card className={cardClass}>
            <Card.Header className="p-0">
                <h5 style={{ backgroundColor: primColor }}
                    className="mb-0 py-3 text-white">{title}</h5>
                <div className="ts-title py-5 mb-0">
                    <h3 className="mb-0 font-weight-normal">
                        {price}
                    </h3>
                    <small className="ts-opacity__50">{subtitle}</small>
                </div>
            </Card.Header>

            <small className="ts-opacity__50">
                <div className="mx-2">
                    <br />Players will be created based on below percentages.<br />
            If you are lucky enough you will have a Legendary player<br /><br />
                </div>
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
                <Button
                    onClick={handleBuy}
                    variant="primary"
                >Buy Team</Button>
            </Card.Footer>
        </Card>
    );
}

export default PriceCard;