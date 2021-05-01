import React, { useContext, useEffect } from "react";
import { web3, connectWallet } from "./web3";
import Button from "react-bootstrap/Button";

import NftCoach from "./contractNftcoach";

import { GameContext } from "../context/GameContext";

const ConnectMetamask = () => {
    const [account, setAccount, , setTeamId] = useContext(GameContext);

    useEffect(() => {

        // If already connected to the wallet, setAccount

        async function check() {
            if (web3.eth.net.isListening()) {
                const accounts = await web3.eth.getAccounts();
                setAccount(accounts[0]);

                try {
                    const t = await NftCoach.methods.getMyTeam().call({
                        from: accounts[0]
                    });
                    setTeamId(t);
                } catch {
                    console.log("No Teams");
                }
            }
        }
        check();
    }, []);

    const connect = async () => {
        await connectWallet();

        const accounts = await web3.eth.getAccounts();
        console.log(accounts[0]);
        setAccount(accounts[0]);
    }

    return (account !== "" && account !== undefined)
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