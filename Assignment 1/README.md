# Even Odd Smart Contract

## Overview

This project implements a simple smart contract in Solidity to identify and display even and odd numbers from 1 to a given number using blockchain events.

## Smart Contract Details

* Contract Name: EvenOddPrinter
* Language: Solidity
* Version: ^0.8.0

The contract uses events to output results since Solidity does not support direct printing like traditional programming languages.

## Features

* Accepts a number `n` as input
* Iterates from 1 to `n`
* Identifies whether each number is even or odd
* Emits results using blockchain events

## Logic

* If a number is divisible by 2, it is even
* Otherwise, it is odd

## Smart Contract Code

```solidity
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

## How to Run

1. Open Remix IDE
2. Create a new file and paste the contract code
3. Compile the contract
4. Deploy the contract
5. Call the function `printEvenOdd(n)`

## Output

The output is displayed in the Logs section.

Example for `n = 5`:

```
Odd, 1  
Even, 2  
Odd, 3  
Even, 4  
Odd, 5  
```

## Note

Solidity does not support direct console printing. Events are used to display output in transaction logs.

## Author

Afia Shaikh

## Assignment

Blockchain Lab Assignment
