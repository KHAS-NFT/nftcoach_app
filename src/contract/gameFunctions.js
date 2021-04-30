import { web3 } from "./web3";

import NftCoach from "./contractNftcoach";
import Marketplace from "./contractMarketplace";

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

export const sellPlayer = async (playerId, price) => {
    try {
        console.log(await web3.eth.getAccounts()[0]);
        const priceAtomic = web3.utils.toWei(`${price}`, "ether");
        await Marketplace.methods.listPlayer(playerId, priceAtomic).call();
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
}

export const getListings = async () => {
    try {
        return (await Marketplace.methods.getListings().call());
    } catch (err) {
        console.log(err);
        return [];
    }
}

export const cancelListing = async (playerId) => {
    try {
        await Marketplace.methods.chancePrice(playerId, 0).call();
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
}