import React, { useContext } from "react";
import web3 from "./web3";

import { GameContext } from "../context/GameContext";

const connectMetamask = async () => {
    const [, setAccount] = useContext(GameContext);
    const accounts = await web3.eth.getAccounts();

    setAccount(accounts[0]);
}

export default connectMetamask;