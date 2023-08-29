// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MFERC20 is ERC20 {
    constructor(
        string _name,
        string _symbol
    ) ERC20(_name, _symbol) {
        _mint(msg.sender, 10000000 ether)
    }
}