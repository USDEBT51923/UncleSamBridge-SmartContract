// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./INativeOFT.sol";

contract NativeBridge {
    INativeOFT public immutable nativeOft;
    constructor(address _nativeOft) {
        require(_nativeOft != address(0), "SwappableBridge: invalid Native OFT address");
        nativeOft = INativeOFT(_nativeOft);
    }

    function bridge(uint amountIn, uint16 dstChainId, address to, address payable refundAddress, address zroPaymentAddress, bytes calldata adapterParams) external payable {
        require(to != address(0), "SwappableBridge: invalid to address");
        require(msg.value >= amountIn, "SwappableBridge: not enough value sent");

        nativeOft.deposit{value: amountIn}();
        nativeOft.sendFrom{value: msg.value - amountIn}(address(this), dstChainId, abi.encodePacked(to), amountIn, refundAddress, zroPaymentAddress, adapterParams);
    }
}