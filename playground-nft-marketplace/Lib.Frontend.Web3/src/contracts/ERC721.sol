// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import './ERC721Metadata.sol';

/*
    building minting function
        a.  nft to point to an address
        b.  keep track of the token ids
        c.  keep track token owner addresses to token ids
        d.  keep track of how many tokens an owner address has
        e.  create and event that emits a
        transfer log - contract address, where it is being minted to, the id.
*/


contract ERC721 {
    // indexed is to save gas?
    event Transfer(address indexed from, address indexed to, uint indexed tokenId);

    mapping(uint => address) private _tokenOwner;

    mapping(address => uint) private _ownedTokensCount;

    function _exists(uint tokenId) internal view returns(bool) {
        address owner = _tokenOwner[tokenId];
        return owner != address(0);
    }

    function _mint(address to, uint tokenId) internal {
        require(to != address(0), 'ERC721: minting to the zero address is not allowed');
        require(!_exists(tokenId), 'ERC721: token already minted');
        //  minting process
        _tokenOwner[tokenId] = to;
        _ownedTokensCount[to] += 1;

        emit Transfer(address(0), to, tokenId);
    }
}
