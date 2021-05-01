import React, { useContext } from "react";

import Container from "react-bootstrap/Container";
import { GameContext } from "../../context/GameContext";

import BG from "../../assets/img/bg-hand-mobile.jpg";

const WinChallenge = () => {

    const [, , , , lastChallenge,] = useContext(GameContext);

    const winStyle = {
        backgroundImage: `url(${BG})`,
        backgroundColor: "00AB00",
        opacity: ".3",
        height: "500px",
        marginBottom: "-3em"
    }

    return (
        <div style={winStyle} className="w-100 text-center text-white pt-4">
            <div className="ts-title pt-5">
                <br /><h1>You Challenged Team {lastChallenge}</h1>
                <br /><h1>You WON</h1>
                <br />
                <h3>You can challenge 3 minutes later again.
                Your players are improved now.
                You can navigate to your team page and see the improvement</h3>
            </div>
        </div>
    );
}

export default WinChallenge;
