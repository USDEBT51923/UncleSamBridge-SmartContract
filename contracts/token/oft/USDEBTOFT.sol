// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./OFT.sol";

/// @title A LayerZero OmnichainFungibleToken example of BasedOFT
/// @notice Use this contract only on the BASE CHAIN. It locks tokens on source, on outgoing send(), and unlocks tokens when receiving from other chains.
contract USDEBTOFT is OFT {
 constructor(string memory _name,string memory _symbol, address _lzEndpoint) OFT(_name, _symbol, _lzEndpoint ) {
    }
}