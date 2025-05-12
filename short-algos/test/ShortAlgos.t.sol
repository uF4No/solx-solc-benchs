// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {ShortAlgos} from "../src/ShortAlgos.sol";

contract ShortAlgosTest is Test {
    ShortAlgos public shortAlgos;

    function setUp() public {
        shortAlgos = new ShortAlgos();
    }

    function testEmptyArray() public {
        // Create new arrays for each test to avoid any memory sharing issues
        uint[] memory emptyArr1 = new uint[](0);
        uint[] memory emptyArr2 = new uint[](0);
        uint[] memory emptyArr3 = new uint[](0);

        uint[] memory quickSorted = shortAlgos.quickSort(emptyArr1);
        uint[] memory bubbleSorted = shortAlgos.bubbleSort(emptyArr2);
        uint[] memory insertionSorted = shortAlgos.insertionSort(emptyArr3);

        // Check lengths
        assertEq(quickSorted.length, 0, "QuickSort should return empty array");
        assertEq(
            bubbleSorted.length,
            0,
            "BubbleSort should return empty array"
        );
        assertEq(
            insertionSorted.length,
            0,
            "InsertionSort should return empty array"
        );

        // Verify they are considered sorted
        assertTrue(
            shortAlgos.isSorted(quickSorted),
            "Empty array from QuickSort should be considered sorted"
        );
        assertTrue(
            shortAlgos.isSorted(bubbleSorted),
            "Empty array from BubbleSort should be considered sorted"
        );
        assertTrue(
            shortAlgos.isSorted(insertionSorted),
            "Empty array from InsertionSort should be considered sorted"
        );
    }

    function testSingleElement() public {
        uint[] memory arr = new uint[](1);
        arr[0] = 42;

        uint[] memory quickSorted = shortAlgos.quickSort(arr);
        uint[] memory bubbleSorted = shortAlgos.bubbleSort(arr);
        uint[] memory insertionSorted = shortAlgos.insertionSort(arr);

        assertEq(quickSorted[0], 42);
        assertEq(bubbleSorted[0], 42);
        assertEq(insertionSorted[0], 42);
    }

    function testAlreadySorted() public {
        uint[] memory arr = new uint[](5);
        arr[0] = 1;
        arr[1] = 2;
        arr[2] = 3;
        arr[3] = 4;
        arr[4] = 5;

        assertTrue(shortAlgos.isSorted(shortAlgos.quickSort(arr)));
        assertTrue(shortAlgos.isSorted(shortAlgos.bubbleSort(arr)));
        assertTrue(shortAlgos.isSorted(shortAlgos.insertionSort(arr)));
    }

    function testReverseSorted() public {
        uint[] memory arr = new uint[](5);
        arr[0] = 5;
        arr[1] = 4;
        arr[2] = 3;
        arr[3] = 2;
        arr[4] = 1;

        uint[] memory quickSorted = shortAlgos.quickSort(arr);
        uint[] memory bubbleSorted = shortAlgos.bubbleSort(arr);
        uint[] memory insertionSorted = shortAlgos.insertionSort(arr);

        for (uint i = 0; i < 5; i++) {
            assertEq(quickSorted[i], i + 1);
            assertEq(bubbleSorted[i], i + 1);
            assertEq(insertionSorted[i], i + 1);
        }
    }

    function testRandomArray() public {
        uint[] memory arr = new uint[](10);
        arr[0] = 64;
        arr[1] = 34;
        arr[2] = 25;
        arr[3] = 12;
        arr[4] = 22;
        arr[5] = 11;
        arr[6] = 90;
        arr[7] = 45;
        arr[8] = 33;
        arr[9] = 21;

        uint[] memory quickSorted = shortAlgos.quickSort(arr);
        uint[] memory bubbleSorted = shortAlgos.bubbleSort(arr);
        uint[] memory insertionSorted = shortAlgos.insertionSort(arr);

        assertTrue(shortAlgos.isSorted(quickSorted));
        assertTrue(shortAlgos.isSorted(bubbleSorted));
        assertTrue(shortAlgos.isSorted(insertionSorted));

        // Verify all arrays have the same sorted values
        for (uint i = 0; i < arr.length; i++) {
            assertEq(quickSorted[i], bubbleSorted[i]);
            assertEq(bubbleSorted[i], insertionSorted[i]);
        }
    }

    function testDuplicateValues() public {
        uint[] memory arr = new uint[](8);
        arr[0] = 3;
        arr[1] = 1;
        arr[2] = 4;
        arr[3] = 1;
        arr[4] = 5;
        arr[5] = 9;
        arr[6] = 2;
        arr[7] = 6;

        uint[] memory quickSorted = shortAlgos.quickSort(arr);
        uint[] memory bubbleSorted = shortAlgos.bubbleSort(arr);
        uint[] memory insertionSorted = shortAlgos.insertionSort(arr);

        assertTrue(shortAlgos.isSorted(quickSorted));
        assertTrue(shortAlgos.isSorted(bubbleSorted));
        assertTrue(shortAlgos.isSorted(insertionSorted));

        // Verify all arrays have the same sorted values
        for (uint i = 0; i < arr.length; i++) {
            assertEq(quickSorted[i], bubbleSorted[i]);
            assertEq(bubbleSorted[i], insertionSorted[i]);
        }
    }

    function testLargeArray() public {
        uint size = 100;
        uint[] memory arr = new uint[](size);

        // Fill array with descending values
        for (uint i = 0; i < size; i++) {
            arr[i] = size - i;
        }

        uint[] memory quickSorted = shortAlgos.quickSort(arr);
        uint[] memory bubbleSorted = shortAlgos.bubbleSort(arr);
        uint[] memory insertionSorted = shortAlgos.insertionSort(arr);

        assertTrue(shortAlgos.isSorted(quickSorted));
        assertTrue(shortAlgos.isSorted(bubbleSorted));
        assertTrue(shortAlgos.isSorted(insertionSorted));

        // Verify first, middle and last elements
        assertEq(quickSorted[0], 1);
        assertEq(quickSorted[size / 2], size / 2 + 1);
        assertEq(quickSorted[size - 1], size);

        assertEq(bubbleSorted[0], 1);
        assertEq(bubbleSorted[size / 2], size / 2 + 1);
        assertEq(bubbleSorted[size - 1], size);

        assertEq(insertionSorted[0], 1);
        assertEq(insertionSorted[size / 2], size / 2 + 1);
        assertEq(insertionSorted[size - 1], size);
    }

    function testGasComparison() public {
        uint size = 20;
        uint[] memory arr = new uint[](size);

        // Fill array with descending values
        for (uint i = 0; i < size; i++) {
            arr[i] = size - i;
        }

        // Measure gas for each sorting algorithm
        uint gasBefore;
        uint gasAfter;

        // QuickSort
        gasBefore = gasleft();
        shortAlgos.quickSort(arr);
        gasAfter = gasleft();
        console.log("QuickSort gas used:", gasBefore - gasAfter);

        // BubbleSort
        gasBefore = gasleft();
        shortAlgos.bubbleSort(arr);
        gasAfter = gasleft();
        console.log("BubbleSort gas used:", gasBefore - gasAfter);

        // InsertionSort
        gasBefore = gasleft();
        shortAlgos.insertionSort(arr);
        gasAfter = gasleft();
        console.log("InsertionSort gas used:", gasBefore - gasAfter);
    }
}
