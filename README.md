# Blockchain Lab Assignments

## Student Details

* **Name:** Saba Sayyad
* **Roll Number:** 123B1B026
* **Course:** Blockchain Technology

---

# Overview

This repository contains 5 practical assignments demonstrating core blockchain concepts including smart contract development, deployment, frontend interaction, IPFS integration, and DAO implementation.

---

# Tech Stack Used

* Solidity (Smart Contracts)
* Hardhat (Development & Deployment)
* MetaMask (Wallet Interaction)
* Polygon Amoy Testnet
* IPFS (via Pinata)
* HTML, CSS, JavaScript (Frontend)

---

# Assignments Description

---

##  Assignment 1: Smart Contract Development

###  What was done:

* Created a basic smart contract in Solidity
* Implemented functions to:

  * Store data
  * Retrieve data
* Deployed contract using Remix IDE

###  Key Learning:

* Understanding of smart contract structure
* Writing functions in Solidity
* Compilation and deployment process

---

##  Assignment 2: Polygon Deployment

###  What was done:

* Deployed the smart contract on **Polygon Amoy Testnet**
* Connected MetaMask wallet
* Used test MATIC from faucet
* Verified transaction on Polygon explorer

###  Key Learning:

* Working with test networks
* Gas fees and transactions
* Blockchain deployment process

---

##  Assignment 3: Web Interface + MetaMask

### What was done:

* Built a simple frontend using HTML, CSS, and JavaScript
* Integrated MetaMask for wallet connection
* Used Ethers.js to:

  * Connect to smart contract
  * Send transactions
  * Retrieve stored data

###  Key Learning:

* Connecting frontend with blockchain
* Wallet interaction using MetaMask
* Handling transactions via UI

---

## Assignment 4: IPFS Integration

### What was done:

* Uploaded file to IPFS using **Pinata**
* Generated CID (Content Identifier)
* Retrieved file using IPFS gateway
* Verified file availability using public link

###  Example CID:

```
QmdyGVpYEibCV9kLiPN7DhDd6wRhL676ejFfngms9WGMy
```

###  Key Learning:

* Decentralized file storage
* How IPFS works
* Using pinning services

---

##  Assignment 5: DAO Smart Contract

###  What was done:

* Developed a DAO smart contract with:

  * Proposal creation
  * Voting system
  * Proposal execution
* Deployed and tested using Remix + MetaMask

###  Workflow:

1. User creates proposal
2. Users vote on proposal
3. Votes are counted
4. Proposal is executed

###  Key Learning:

* Governance using blockchain
* Voting mechanisms in smart contracts
* Decentralized decision making

---

#  How to Run

##  Common Setup

```bash
npm install
```

---

## ▶ Assignment 1

```bash
cd assignment-1
npx hardhat compile
```

---

## Assignment 2

```bash
cd assignment-2
npx hardhat run scripts/deploy.js --network amoy
```

---

##  Assignment 3

```bash
cd assignment-3
python3 -m http.server 8080
```

Open: http://localhost:8080

---

##  Assignment 4

```bash
cd assignment-4/ipfs-code
node upload.js
```

---

## Assignment 5

```bash
cd assignment-5
npx hardhat compile
```

---

# Polygon Amoy Testnet Details

* RPC URL: https://rpc-amoy.polygon.technology/
* Chain ID: 80002
* Currency: MATIC
* Explorer: https://amoy.polygonscan.com/

---

# Screenshot Checklist

Each assignment contains a `screenshots/` folder with:

* Smart contract compilation & deployment
* Transaction confirmations
* Frontend interaction
* IPFS file upload & access
* DAO proposal, voting & execution

---

#  Conclusion

This project demonstrates end-to-end blockchain development including smart contracts, deployment, frontend integration, decentralized storage, and DAO implementation.

---
# Blockchain-Technology-lab
