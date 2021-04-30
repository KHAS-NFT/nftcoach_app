import React, { useState, createContext } from "react";

export const GameContext = createContext();

export const GameProvider = props => {

    const [account, setAccount] = useState("");

    return (
        <GameContext.Provider value={
            [account, setAccount]
        }>
            {props.children}
        </GameContext.Provider>
    );
}
