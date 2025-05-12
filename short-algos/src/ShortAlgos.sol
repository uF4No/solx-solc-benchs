// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract ShortAlgos {
    /// @notice Sorts an array using QuickSort algorithm
    /// @dev Uses recursive partitioning with the last element as pivot
    /// @param arr The array to sort
    /// @return The sorted array
    function quickSort(uint[] memory arr) public pure returns (uint[] memory) {
        if (arr.length <= 1) {
            return arr;
        }
        quickSortHelper(arr, 0, int(arr.length - 1));
        return arr;
    }

    /// @dev Helper function for quickSort that implements the recursive logic
    /// @param arr The array being sorted
    /// @param left The left boundary of current partition
    /// @param right The right boundary of current partition
    function quickSortHelper(
        uint[] memory arr,
        int left,
        int right
    ) internal pure {
        // Additional safety check
        if (
            arr.length == 0 ||
            left < 0 ||
            right < 0 ||
            uint(left) >= arr.length ||
            uint(right) >= arr.length
        ) {
            return;
        }

        if (left < right) {
            uint pivot = arr[uint(right)];
            int i = left - 1;

            for (int j = left; j < right; j++) {
                if (arr[uint(j)] <= pivot) {
                    i++;
                    (arr[uint(i)], arr[uint(j)]) = (arr[uint(j)], arr[uint(i)]);
                }
            }

            (arr[uint(i + 1)], arr[uint(right)]) = (
                arr[uint(right)],
                arr[uint(i + 1)]
            );
            int partitionIndex = i + 1;

            quickSortHelper(arr, left, partitionIndex - 1);
            quickSortHelper(arr, partitionIndex + 1, right);
        }
    }

    /// @notice Sorts an array using BubbleSort algorithm
    /// @dev Repeatedly steps through the array, compares adjacent elements and swaps them if needed
    /// @param arr The array to sort
    /// @return The sorted array
    function bubbleSort(uint[] memory arr) public pure returns (uint[] memory) {
        if (arr.length <= 1) {
            return arr;
        }

        uint n = arr.length;
        bool swapped;

        for (uint i = 0; i < n - 1; i++) {
            swapped = false;
            for (uint j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    (arr[j], arr[j + 1]) = (arr[j + 1], arr[j]);
                    swapped = true;
                }
            }
            // If no swapping occurred in this pass, array is already sorted
            if (!swapped) {
                break;
            }
        }
        return arr;
    }

    /// @notice Sorts an array using InsertionSort algorithm
    /// @dev Builds the final sorted array one item at a time
    /// @param arr The array to sort
    /// @return The sorted array
    function insertionSort(
        uint[] memory arr
    ) public pure returns (uint[] memory) {
        if (arr.length <= 1) {
            return arr;
        }

        uint n = arr.length;
        for (uint i = 1; i < n; i++) {
            uint key = arr[i];
            int j = int(i) - 1;

            while (j >= 0 && arr[uint(j)] > key) {
                arr[uint(j + 1)] = arr[uint(j)];
                j--;
            }
            arr[uint(j + 1)] = key;
        }
        return arr;
    }

    /// @notice Utility function to verify if an array is sorted
    /// @dev Checks if each element is less than or equal to the next element
    /// @param arr The array to check
    /// @return True if the array is sorted, false otherwise
    function isSorted(uint[] memory arr) public pure returns (bool) {
        if (arr.length <= 1) {
            return true;
        }

        for (uint i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                return false;
            }
        }
        return true;
    }
}
