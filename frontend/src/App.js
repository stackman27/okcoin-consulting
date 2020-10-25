import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState(0);

  const ethereum = window.ethereum;

  if (typeof ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
  
    const getAccount = async () => {
      let accounts = await ethereum.request({ 
        method: 'eth_requestAccounts' 
      });
      setAddress(accounts[0]);
      console.log(accounts[0]);
    }

    const getBalance = async () => {
      let currBalance = await ethereum.request({ 
        method: 'eth_getBalance', 
        params:[address, 'latest']
      });
      setBalance(currBalance);
      console.log(balance);
    }

    getAccount();
    getBalance();

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
