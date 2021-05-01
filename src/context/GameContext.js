import React, { useState, createContext } from "react";

export const GameContext = createContext();

export const GameProvider = props => {

    const [account, setAccount] = useState("");
    const [teamId, setTeamId] = useState("");
    const [lastChallenge, setLastChallenge] = useState();

    return (
        <GameContext.Provider value={[
            account, setAccount,
            teamId, setTeamId,
            lastChallenge, setLastChallenge,
        ]
        }>
            {props.children}
        </GameContext.Provider>
    );
}
