import React, { useContext } from "react";
import { web3, connectWallet } from "./web3";
import Button from "react-bootstrap/Button";

import { GameContext } from "../context/GameContext";

const ConnectMetamask = () => {
    const [account, setAccount] = useContext(GameContext);

    const connect = async () => {
        await connectWallet();

        const accounts = await web3.eth.getAccounts();
        console.log(accounts[0]);
        setAccount(accounts[0]);
    }

    return account !== ""
        ? <Button
            className="m-1 px-3"
            variant="primary"
            size="sm"
        >
            {account.slice(0, 7) + "..." + account.slice(account.length - 3, account.length - 1)}
        </Button>
        :

        (<Button
            className="m-1 px-3"
            variant="primary"
            size="sm"
            onClick={connect}
        >
            Connect Your METAMASK Wallet
        </Button>)
        ;
}

export default ConnectMetamask;