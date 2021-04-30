import { web3 } from "./web3";

import NftCoach from "./contractNftcoach";

export const getTeamId = async () => {
    try {
        return (await NftCoach.methods.getMyTeam().call());
    } catch (err) {
        return "";
    }
}

export const getPlayers = async (owner) => {
    try {
        return (await NftCoach.methods.getPlayers(owner).call());
    } catch (err) {
        console.error(err);
        return [];
    }
}
