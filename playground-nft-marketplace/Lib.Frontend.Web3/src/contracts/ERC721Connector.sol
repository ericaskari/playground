// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import './ERC721Metadata.sol';

contract ERC721Connector is ERC721Metadata {
    constructor(string memory newName, string memory newSymbol) ERC721Metadata(newName, newSymbol) {}
}
