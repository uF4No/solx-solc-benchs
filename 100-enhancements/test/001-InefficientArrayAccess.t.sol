// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "forge-std/Test.sol";
import "../src/001-InefficientArrayAccess.sol"; // Update with the correct path to the contract

contract InefficientArrayAccessTest is Test {
    InefficientArrayAccess public contractUnderTest;

    function setUp() public {
        // Deploy the contract before each test
        contractUnderTest = new InefficientArrayAccess();
    }

    function testInitialArraySum() public {
        // Check the sum after deployment; the array is initialized with [0, 1, 2, ..., 9]
        uint expectedSum = 45; // 0 + 1 + 2 + ... + 9
        uint result = contractUnderTest.inefficientSum();
        assertEq(result, expectedSum, "Initial sum should be 45");
    }

    function testSumAfterAddingElement() public {
        // Add a new element to the array using the function
        uint newElement = 10;
        contractUnderTest.addElement(newElement);

        // Check the new sum after adding the element
        uint expectedSum = 45 + newElement; // 45 + 10 = 55
        uint result = contractUnderTest.inefficientSum();
        assertEq(result, expectedSum, "Sum should be updated after adding an element");
    }
}

