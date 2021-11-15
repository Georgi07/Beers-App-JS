import React, {useContext} from 'react';
import { beersContext } from '../context/context';
import './Wallet.css';

const Wallet = () => {

    const {provider} = useContext(beersContext);

    return (
        <div className="Wallet">
         {console.log('provider')}
            <h1>Send ETH Payment</h1>
            <div className="Form">
                <input type="text" placeholder="Account Number" />
                <input type="number" placeholder="0.00" />
            </div>
            <button>Send ETH</button>
        </div>
    )
}

export default Wallet;