// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import {DSTestPlus} from "./utils/DSTestPlus.sol";

import {wadMul, wadDiv} from "../utils/SignedWadMath.sol";

contract SignedWadMathTest is DSTestPlus {
    function testWadMul(uint256 x, uint256 y, bool negX, bool negY) public {
        x = bound(x, 0, 99999999999999e18);
        y = bound(x, 0, 99999999999999e18);

        int256 xPrime = negX ? -int256(x) : int256(x);
        int256 yPrime = negY ? -int256(y) : int256(y);

        assertEq(wadMul(xPrime, yPrime), (xPrime * yPrime) / 1e18);
    }

    function testWadDiv(uint256 x, uint256 y, bool negX, bool negY) public {
        x = bound(x, 0, 99999999e18);
        y = bound(x, 1, 99999999e18);

        int256 xPrime = negX ? -int256(x) : int256(x);
        int256 yPrime = negY ? -int256(y) : int256(y);

        assertEq(wadDiv(xPrime, yPrime), (xPrime * 1e18) / yPrime);
    }
}
