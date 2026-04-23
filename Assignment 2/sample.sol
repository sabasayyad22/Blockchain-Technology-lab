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