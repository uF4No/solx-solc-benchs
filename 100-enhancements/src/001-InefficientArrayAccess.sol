// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract InefficientArrayAccess {

    uint[] public myArray;

    constructor() {
        // Initialize the array with some data
        for (uint i = 0; i < 10; i++) {
            myArray.push(i);
        }
    }

    // Public function to add an element to the array
    function addElement(uint _element) public {
        myArray.push(_element);
    }

    // Inefficient method: accessing the array length multiple times in a loop
    function inefficientSum() public view returns (uint sum) {
        for (uint i = 0; i < myArray.length; ++i) {
            sum += myArray[i];
        }
    }
}
