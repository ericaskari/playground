// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract ERC721Metadata {
    string private _name;
    string private _symbol;

    constructor(string memory newName, string memory newSymbol) {
        _name = newName;
        _symbol = newSymbol;
    }

    function name() external view returns (string memory) {
        return _name;
    }

    function symbol() external view returns (string memory) {
        return _symbol;
    }
}
