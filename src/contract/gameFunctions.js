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
        const accounts = await web3.eth.getAccounts();
        const priceAtomic = web3.utils.toWei(`${price}`, "ether");
        await Marketplace.methods.listPlayer(playerId, priceAtomic).send({ from: accounts[0] });
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

export const buyPack = async () => {
    try {
        const accounts = await web3.eth.getAccounts();
        await NftCoach.methods.getStarterPack().send({
            from: accounts[0],
            value: web3.utils.toWei("1", "ether"),
        });
        return true;
    } catch (err) {
        console.error(err.message);
        return false;
    }
}

export const buyPlayer = async (box) => {
    try {
        const accounts = await web3.eth.getAccounts();
        await NftCoach.methods.createPlayer(box).send({
            from: accounts[0],
            value: web3.utils.toWei(`${1 * box}`, "ether")
        });
        return true;
    } catch (err) {
        console.error(err.message);
        return false;
    }
}

export const getPlayerDetails = async (playerId) => {
    try {
        const player = await NftCoach.methods.playerIdToPlayer(playerId).call();
        return player;
    } catch (err) {
        console.error(err.message);
        return ({})
    }
}

export const fmtPrice = (price) => {
    return web3.utils.fromWei(price, "ether");
}

export const getAllTeams = async () => {
    try {
        const teams = await NftCoach.methods.getAllTeams().call();
        return teams;
    } catch (err) {
        console.error(err.message);
        return [];
    }
}