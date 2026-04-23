# Even Odd Smart Contract (Polygon Amoy Testnet)

## Overview

This project implements a simple Solidity smart contract that identifies and emits even and odd numbers from 1 to a given number using blockchain events. The contract is deployed on the Polygon Amoy Testnet.

## Smart Contract Details

* Contract Name: EvenOddPrinter
* Language: Solidity
* Version: ^0.8.0
* Network: Polygon Amoy Testnet

## Features

* Accepts a number `n` as input
* Iterates from 1 to `n`
* Determines whether each number is even or odd
* Emits results using events

## Smart Contract Code

```solidity id="8x7t2k"
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EvenOddPrinter {

    event Result(string message, uint number);

    function printEvenOdd(uint n) public {
        require(n > 0, "Enter a number greater than 0");

        for (uint i = 1; i <= n; i++) {
            if (i % 2 == 0) {
                emit Result("Even", i);
            } else {
                emit Result("Odd", i);
            }
        }
    }
}
```

## Prerequisites

* MetaMask wallet installed
* Test MATIC tokens
* Access to Remix IDE

## Steps to Deploy on Polygon Amoy Testnet

### 1. Setup Wallet

* Install MetaMask browser extension
* Create or import a wallet

### 2. Add Polygon Amoy Network

Add the following network in MetaMask:

* Network Name: Polygon Amoy Testnet
* RPC URL: https://rpc-amoy.polygon.technology
* Chain ID: 80002
* Currency Symbol: MATIC

### 3. Get Test MATIC from Faucet

* Visit the Polygon Faucet
* Enter your wallet address
* Request test MATIC tokens

### 4. Deploy Using Remix

1. Open Remix IDE
2. Create a new Solidity file and paste the contract
3. Compile the contract
4. Go to "Deploy & Run Transactions"
5. Select **Injected Provider (MetaMask)**
6. Connect MetaMask (ensure Amoy network is selected)
7. Click Deploy and confirm the transaction

## How to Use the Contract

* Call the function `printEvenOdd(n)`
* Example: `printEvenOdd(5)`

## Output

* Output is emitted as events
* View results in Remix Logs or transaction logs

Example output:

```
Odd, 1  
Even, 2  
Odd, 3  
Even, 4  
Odd, 5  
```

## Notes

* Solidity does not support direct printing
* Events are used to display output
* Gas fees are paid using test MATIC

## Author

Afia Shaikh

## Assignment

Blockchain Lab Assignment – Smart Contract Deployment on Polygon Testnet
