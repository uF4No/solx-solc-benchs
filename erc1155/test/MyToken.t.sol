// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {MyToken} from "../src/MyToken.sol";
import {IERC1155Receiver} from "@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {Pausable} from "@openzeppelin/contracts/utils/Pausable.sol";

error OwnableUnauthorizedAccount(address account);
error EnforcedPause();

contract ERC1155ReceiverMock is IERC1155Receiver {
    function onERC1155Received(
        address,
        address,
        uint256,
        uint256,
        bytes memory
    ) public virtual override returns (bytes4) {
        return this.onERC1155Received.selector;
    }

    function onERC1155BatchReceived(
        address,
        address,
        uint256[] memory,
        uint256[] memory,
        bytes memory
    ) public virtual override returns (bytes4) {
        return this.onERC1155BatchReceived.selector;
    }

    function supportsInterface(
        bytes4 interfaceId
    ) public view virtual override returns (bool) {
        return interfaceId == type(IERC1155Receiver).interfaceId;
    }
}

contract MyTokenTest is Test, ERC1155ReceiverMock {
    MyToken public token;
    address public owner;
    address public user1;
    address public user2;

    // Test constants
    uint256 constant TOKEN_ID_1 = 1;
    uint256 constant TOKEN_ID_2 = 2;
    uint256 constant INITIAL_AMOUNT = 1000;
    bytes constant MINT_DATA = "";

    function setUp() public {
        owner = makeAddr("owner");
        user1 = makeAddr("user1");
        user2 = makeAddr("user2");

        vm.startPrank(owner);
        token = new MyToken(owner);
        vm.stopPrank();
    }

    // ======== URI Tests ========

    function test_InitialURI() public {
        assertEq(token.uri(TOKEN_ID_1), "https:example.com");
    }

    function test_SetURI() public {
        string memory newUri = "https://newuri.com";
        vm.prank(owner);
        token.setURI(newUri);
        assertEq(token.uri(TOKEN_ID_1), newUri);
    }

    function test_SetURINotOwner() public {
        vm.prank(user1);
        vm.expectRevert(
            abi.encodeWithSelector(OwnableUnauthorizedAccount.selector, user1)
        );
        token.setURI("https://newuri.com");
    }

    // ======== Pause/Unpause Tests ========

    function test_Pause() public {
        vm.prank(owner);
        token.pause();
        assertTrue(token.paused());
    }

    function test_Unpause() public {
        vm.startPrank(owner);
        token.pause();
        token.unpause();
        vm.stopPrank();
        assertFalse(token.paused());
    }

    function test_PauseNotOwner() public {
        vm.prank(user1);
        vm.expectRevert(
            abi.encodeWithSelector(OwnableUnauthorizedAccount.selector, user1)
        );
        token.pause();
    }

    function test_TransferWhenPaused() public {
        // First mint some tokens
        vm.prank(owner);
        token.mint(user1, TOKEN_ID_1, INITIAL_AMOUNT, MINT_DATA);

        // Pause the contract
        vm.prank(owner);
        token.pause();

        // Try to transfer
        vm.prank(user1);
        vm.expectRevert(EnforcedPause.selector);
        token.safeTransferFrom(
            user1,
            user2,
            TOKEN_ID_1,
            INITIAL_AMOUNT,
            MINT_DATA
        );
    }

    // ======== Minting Tests ========

    function test_Mint() public {
        vm.prank(owner);
        token.mint(address(this), TOKEN_ID_1, INITIAL_AMOUNT, MINT_DATA);
        assertEq(token.balanceOf(address(this), TOKEN_ID_1), INITIAL_AMOUNT);
    }

    function test_MintBatch() public {
        uint256[] memory ids = new uint256[](2);
        ids[0] = TOKEN_ID_1;
        ids[1] = TOKEN_ID_2;

        uint256[] memory amounts = new uint256[](2);
        amounts[0] = INITIAL_AMOUNT;
        amounts[1] = INITIAL_AMOUNT * 2;

        vm.prank(owner);
        token.mintBatch(address(this), ids, amounts, MINT_DATA);

        assertEq(token.balanceOf(address(this), TOKEN_ID_1), INITIAL_AMOUNT);
        assertEq(
            token.balanceOf(address(this), TOKEN_ID_2),
            INITIAL_AMOUNT * 2
        );
    }

    function test_MintNotOwner() public {
        vm.prank(user1);
        vm.expectRevert(
            abi.encodeWithSelector(OwnableUnauthorizedAccount.selector, user1)
        );
        token.mint(user2, TOKEN_ID_1, INITIAL_AMOUNT, MINT_DATA);
    }

    // ======== Transfer Tests ========

    function test_SafeTransferFrom() public {
        // Mint tokens first
        vm.prank(owner);
        token.mint(user1, TOKEN_ID_1, INITIAL_AMOUNT, MINT_DATA);

        // Transfer
        vm.prank(user1);
        token.safeTransferFrom(
            user1,
            address(this),
            TOKEN_ID_1,
            INITIAL_AMOUNT / 2,
            MINT_DATA
        );

        assertEq(token.balanceOf(user1, TOKEN_ID_1), INITIAL_AMOUNT / 2);
        assertEq(
            token.balanceOf(address(this), TOKEN_ID_1),
            INITIAL_AMOUNT / 2
        );
    }

    // ======== Burning Tests ========

    function test_Burn() public {
        // Mint tokens first
        vm.prank(owner);
        token.mint(user1, TOKEN_ID_1, INITIAL_AMOUNT, MINT_DATA);

        // Burn
        vm.prank(user1);
        token.burn(user1, TOKEN_ID_1, INITIAL_AMOUNT / 2);

        assertEq(token.balanceOf(user1, TOKEN_ID_1), INITIAL_AMOUNT / 2);
    }

    function test_BurnBatch() public {
        // Mint batch first
        uint256[] memory ids = new uint256[](2);
        ids[0] = TOKEN_ID_1;
        ids[1] = TOKEN_ID_2;

        uint256[] memory amounts = new uint256[](2);
        amounts[0] = INITIAL_AMOUNT;
        amounts[1] = INITIAL_AMOUNT * 2;

        vm.prank(owner);
        token.mintBatch(user1, ids, amounts, MINT_DATA);

        // Burn batch
        uint256[] memory burnAmounts = new uint256[](2);
        burnAmounts[0] = INITIAL_AMOUNT / 2;
        burnAmounts[1] = INITIAL_AMOUNT;

        vm.prank(user1);
        token.burnBatch(user1, ids, burnAmounts);

        assertEq(token.balanceOf(user1, TOKEN_ID_1), INITIAL_AMOUNT / 2);
        assertEq(token.balanceOf(user1, TOKEN_ID_2), INITIAL_AMOUNT);
    }

    // ======== Fuzz Tests ========

    function testFuzz_Mint(uint256 id, uint256 amount) public {
        // Ensure reasonable amounts
        vm.assume(amount > 0 && amount <= type(uint64).max);

        vm.prank(owner);
        token.mint(address(this), id, amount, MINT_DATA);
        assertEq(token.balanceOf(address(this), id), amount);
    }

    function testFuzz_MintBatchAndTransfer(
        uint256[3] memory ids,
        uint256[3] memory amounts
    ) public {
        // Ensure reasonable amounts
        for (uint i = 0; i < amounts.length; i++) {
            vm.assume(amounts[i] > 0 && amounts[i] <= type(uint64).max);
            vm.assume(ids[i] != 0);
        }

        // Convert arrays to dynamic arrays
        uint256[] memory dynamicIds = new uint256[](3);
        uint256[] memory dynamicAmounts = new uint256[](3);
        for (uint i = 0; i < 3; i++) {
            dynamicIds[i] = ids[i];
            dynamicAmounts[i] = amounts[i];
        }

        // Mint batch
        vm.prank(owner);
        token.mintBatch(address(this), dynamicIds, dynamicAmounts, MINT_DATA);

        // Transfer half of each amount
        for (uint i = 0; i < 3; i++) {
            token.safeTransferFrom(
                address(this),
                address(this),
                ids[i],
                amounts[i] / 2,
                MINT_DATA
            );
            assertEq(token.balanceOf(address(this), ids[i]), amounts[i]);
        }
    }

    function testFuzz_ApprovalForAll(address operator, bool approved) public {
        vm.assume(operator != address(0));
        vm.assume(operator != user1);

        vm.prank(user1);
        token.setApprovalForAll(operator, approved);
        assertEq(token.isApprovedForAll(user1, operator), approved);
    }

    function testFuzz_BurnAndMint(
        uint256 id,
        uint256 mintAmount,
        uint256 burnAmount
    ) public {
        // Ensure reasonable amounts
        vm.assume(mintAmount > 0 && mintAmount <= type(uint64).max);
        vm.assume(burnAmount > 0 && burnAmount <= mintAmount);
        vm.assume(id != 0);

        // Mint tokens
        vm.prank(owner);
        token.mint(address(this), id, mintAmount, MINT_DATA);
        assertEq(token.balanceOf(address(this), id), mintAmount);

        // Burn tokens
        token.burn(address(this), id, burnAmount);
        assertEq(token.balanceOf(address(this), id), mintAmount - burnAmount);
    }

    function testFuzz_SafeTransferFrom(uint256 id, uint256 amount) public {
        // Ensure reasonable amounts
        vm.assume(amount > 0 && amount <= type(uint64).max);

        // Mint tokens to this contract
        vm.prank(owner);
        token.mint(address(this), id, amount, MINT_DATA);

        // Transfer to self (this contract implements ERC1155Receiver)
        token.safeTransferFrom(
            address(this),
            address(this),
            id,
            amount,
            MINT_DATA
        );

        // Verify balance
        assertEq(token.balanceOf(address(this), id), amount);
    }
}
