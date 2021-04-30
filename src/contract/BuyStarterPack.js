import React, { useContext } from "react";

import { web3 } from "./web3";
import Button from "react-bootstrap/Button";
import { GameContext } from "../context/GameContext";

import NftCoach from "./contractNftcoach";

const BuyStarterPack = () => {

    const [account,] = useContext(GameContext);

    const buyPack = async () => {
        try {
            await NftCoach.methods.getStarterPack().send({
                from: account,
                value: web3.utils.toWei("1", "ether"),
            });
        } catch (err) {
            console.error(err.message);
        }

    }

    return (
        <Button
            onClick={buyPack}
            variant="primary"
        >Buy Team</Button>
    );
}

export default BuyStarterPack;