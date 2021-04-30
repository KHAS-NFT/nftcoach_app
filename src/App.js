import React, { Component } from "react";
import "./App.css";

// Basic Web3 - Metamask integration || Can be improved
import web3 from "./web3";
// Contract instances
import nftcoach from "./contract_nftcoach";
import marketplace from "./contract_marketplace";
import playernft from "./contract_playernft";

class App extends Component {
  state = {
    owner: "Please, connect to the Rinkeby Network!",
  };

  async componentDidMount() {
    const accounts = await web3.eth.getAccounts();
    const ow = await nftcoach.methods.owner().call();

    this.setState({ owner: ow });
  }

  render() {
    return (
      <div>
        <h1>NFTCOACH</h1>
        <p>{this.state.owner}</p>
      </div>
    );
  }
}

// function App() {
//   return (
//     <h1>NFTCOACH</h1>
//   );
// }

export default App;
