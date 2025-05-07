// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {MyToken} from "../src/MyToken.sol";

contract MyTokenTest is Test {
    MyToken public token;
    address public user1;
    address public user2;
    uint256 public constant INITIAL_BALANCE = 1000000 * 10 ** 18;
    uint256 public constant TRANSFER_AMOUNT = 1000 * 10 ** 18;

    function setUp() public {
        token = new MyToken();
        user1 = address(0x1);
        user2 = address(0x2);

        // Transfer some tokens to users for testing
        token.transfer(user1, TRANSFER_AMOUNT);
        token.transfer(user2, TRANSFER_AMOUNT);
    }

    function test_Name() public view {
        assertEq(token.name(), "MyToken");
    }

    function test_Symbol() public view {
        assertEq(token.symbol(), "MT");
    }

    function test_Transfer() public {
        uint fromBefore = token.balanceOf(address(this));
        address to = address(0x3);
        token.transfer(to, 100);
        assertEq(token.balanceOf(to), 100);
        assertEq(token.balanceOf(address(this)), fromBefore - 100);
    }

    function test_approve() public {
        address spender = address(0x3);
        token.approve(spender, 100);
        assertEq(token.allowance(address(this), spender), 100);
    }

    function test_transferFrom() public {
        address spender = address(0x3);
        token.approve(spender, 100);

        vm.prank(spender);
        token.transferFrom(address(this), spender, 100);
        assertEq(token.balanceOf(spender), 100);
    }

    // Additional tests for more comprehensive coverage

    function test_IncreaseAllowance() public {
        address spender = address(0x3);
        uint256 initialAllowance = 100;
        uint256 increaseAmount = 50;

        token.approve(spender, initialAllowance);
        assertEq(token.allowance(address(this), spender), initialAllowance);

        // Increase allowance
        vm.prank(address(this));
        token.approve(spender, initialAllowance + increaseAmount);
        assertEq(
            token.allowance(address(this), spender),
            initialAllowance + increaseAmount
        );
    }

    function test_DecreaseAllowance() public {
        address spender = address(0x3);
        uint256 initialAllowance = 100;
        uint256 decreaseAmount = 50;

        token.approve(spender, initialAllowance);
        assertEq(token.allowance(address(this), spender), initialAllowance);

        // Decrease allowance
        vm.prank(address(this));
        token.approve(spender, initialAllowance - decreaseAmount);
        assertEq(
            token.allowance(address(this), spender),
            initialAllowance - decreaseAmount
        );
    }

    function test_MultipleTransfers() public {
        address recipient = address(0x4);
        uint256 amount = 10;

        for (uint i = 0; i < 5; i++) {
            token.transfer(recipient, amount);
        }

        assertEq(token.balanceOf(recipient), amount * 5);
    }

    function test_TransferBetweenUsers() public {
        uint256 user1Before = token.balanceOf(user1);
        uint256 user2Before = token.balanceOf(user2);
        uint256 transferAmount = 500;

        vm.prank(user1);
        token.transfer(user2, transferAmount);

        assertEq(token.balanceOf(user1), user1Before - transferAmount);
        assertEq(token.balanceOf(user2), user2Before + transferAmount);
    }

    function test_ApproveAndTransferFrom() public {
        address spender = address(0x5);
        address recipient = address(0x6);
        uint256 approveAmount = 1000;
        uint256 transferAmount = 500;

        // Approve
        token.approve(spender, approveAmount);

        // Transfer using allowance
        vm.prank(spender);
        token.transferFrom(address(this), recipient, transferAmount);

        assertEq(token.balanceOf(recipient), transferAmount);
        assertEq(
            token.allowance(address(this), spender),
            approveAmount - transferAmount
        );
    }

    function test_TransferZeroAmount() public {
        address recipient = address(0x7);
        uint256 initialBalance = token.balanceOf(address(this));

        // Transfer zero tokens
        token.transfer(recipient, 0);

        assertEq(token.balanceOf(recipient), 0);
        assertEq(token.balanceOf(address(this)), initialBalance);
    }

    function test_MaximumApproval() public {
        address spender = address(0x8);
        uint256 maxAmount = type(uint256).max;

        token.approve(spender, maxAmount);
        assertEq(token.allowance(address(this), spender), maxAmount);
    }

    // === FUZZ TESTS ===

    function testFuzz_Transfer(uint256 amount) public {
        // Constrain the amount to not exceed the balance
        vm.assume(amount <= token.balanceOf(address(this)));

        uint256 initialSenderBalance = token.balanceOf(address(this));
        address recipient = address(0x9999);
        uint256 initialRecipientBalance = token.balanceOf(recipient);

        token.transfer(recipient, amount);

        assertEq(token.balanceOf(address(this)), initialSenderBalance - amount);
        assertEq(token.balanceOf(recipient), initialRecipientBalance + amount);
    }

    function testFuzz_Approve(address spender, uint256 amount) public {
        // Skip zero address
        vm.assume(spender != address(0));

        token.approve(spender, amount);
        assertEq(token.allowance(address(this), spender), amount);
    }

    function testFuzz_TransferFrom(uint256 amount) public {
        // Constrain the amount to not exceed the balance
        vm.assume(amount <= token.balanceOf(address(this)));

        address spender = address(0x8888);
        address recipient = address(0x7777);

        uint256 initialSenderBalance = token.balanceOf(address(this));
        uint256 initialRecipientBalance = token.balanceOf(recipient);

        // Approve first
        token.approve(spender, amount);

        vm.prank(spender);
        token.transferFrom(address(this), recipient, amount);

        assertEq(token.balanceOf(address(this)), initialSenderBalance - amount);
        assertEq(token.balanceOf(recipient), initialRecipientBalance + amount);
        assertEq(token.allowance(address(this), spender), 0);
    }

    function testFuzz_SequentialApprovals(
        address spender,
        uint256 initialAmount,
        uint256 newAmount
    ) public {
        // Skip zero address
        vm.assume(spender != address(0));

        token.approve(spender, initialAmount);
        assertEq(token.allowance(address(this), spender), initialAmount);

        token.approve(spender, newAmount);
        assertEq(token.allowance(address(this), spender), newAmount);
    }

    function testFuzz_TransferFromWithMaxAllowance(
        address spender,
        address recipient,
        uint256 amount
    ) public {
        // Skip zero addresses
        vm.assume(spender != address(0) && recipient != address(0));
        // Constrain the amount to be within balance
        vm.assume(amount <= token.balanceOf(address(this)));

        uint256 initialSenderBalance = token.balanceOf(address(this));
        uint256 initialRecipientBalance = token.balanceOf(recipient);

        // Set maximum allowance
        token.approve(spender, type(uint256).max);

        vm.prank(spender);
        token.transferFrom(address(this), recipient, amount);

        assertEq(token.balanceOf(address(this)), initialSenderBalance - amount);
        assertEq(token.balanceOf(recipient), initialRecipientBalance + amount);

        // Max allowance should not decrease
        assertEq(token.allowance(address(this), spender), type(uint256).max);
    }

    function testFuzz_MultipleTransferFroms(
        address spender,
        uint256 approvalAmount
    ) public {
        // Skip zero address
        vm.assume(spender != address(0));

        // Set a reasonable upper limit to avoid excessive runtime
        vm.assume(approvalAmount <= 1000 * 10 ** 18);
        // Ensure at least 4 transfers of equal amounts can be made
        vm.assume(approvalAmount % 4 == 0 && approvalAmount > 0);

        // Get a transfer amount that can be used multiple times
        uint256 transferAmount = approvalAmount / 4;

        // Ensure we have enough balance
        vm.assume(transferAmount * 4 <= token.balanceOf(address(this)));

        address recipient = address(0x6666);
        uint256 initialSenderBalance = token.balanceOf(address(this));
        uint256 initialRecipientBalance = token.balanceOf(recipient);

        // Approve the full amount
        token.approve(spender, approvalAmount);

        // Perform multiple transfers and check remaining allowance after each
        for (uint i = 0; i < 4; i++) {
            vm.prank(spender);
            token.transferFrom(address(this), recipient, transferAmount);

            assertEq(
                token.allowance(address(this), spender),
                approvalAmount - transferAmount * (i + 1)
            );
        }

        // Verify final balances
        assertEq(
            token.balanceOf(address(this)),
            initialSenderBalance - approvalAmount
        );
        assertEq(
            token.balanceOf(recipient),
            initialRecipientBalance + approvalAmount
        );
        assertEq(token.allowance(address(this), spender), 0);
    }
}
