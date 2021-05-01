import React, { createContext, useState } from "react";

export const ChallengeContext = createContext();

export const ChallengeProvider = props => {

    const [selectedTeamId, setSelectedTeamId] = useState("");
    const [selectedPlayers, setSelectedPlayers] = useState([]);

    return (
        <ChallengeContext.Provider value={[
            selectedTeamId, setSelectedTeamId,
            selectedPlayers, setSelectedPlayers
        ]}>
            {props.children}
        </ChallengeContext.Provider>
    );
}