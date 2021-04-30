import React, { useState, createContext } from "react";

export const GameContext = createContext();

export const GameProvider = props => {

    const [account, setAccount] = useState("");
    const [teamId, setTeamId] = useState("");

    return (
        <GameContext.Provider value={
            [account, setAccount,
                teamId, setTeamId]
        }>
            {props.children}
        </GameContext.Provider>
    );
}
