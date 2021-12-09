import { ethers } from "ethers";
import React, { useContext, useState } from "react";
import { beersContext } from "../context/context";
import "./Wallet.css";

const Wallet = () => {
  const { provider, signer } = useContext(beersContext);
  const [account, setAccount] = useState();
  const [ethValue, setEthValue] = useState();

  const sendEthToAccount = async () => {
    let etherTransaction = await signer.sendTransaction({
      to: account,
      value: ethers.utils.parseEther("0.01"),
    });
    setAccount("");
    setEthValue("");
  };

  return (
    <div className="Wallet">
      {console.log("provider", provider)}
      <h1>Send ETH Payment</h1>
      <div className="Form">
        <input
          type="text"
          value={account}
          onChange={(e) => setAccount(e.target.value)}
          placeholder="Account Number"
        />
        <input
          type="number"
          value={ethValue}
          onChange={(e) => setEthValue(e.target.value)}
          placeholder="0.00"
        />
      </div>
      <button onClick={() => sendEthToAccount()}>Send ETH</button>
    </div>
  );
};

export default Wallet;
