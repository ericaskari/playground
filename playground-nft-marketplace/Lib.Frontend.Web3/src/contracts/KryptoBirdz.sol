// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import './ERC721Connector.sol';

contract KryptoBird is ERC721Connector {

    //  Array to store nfts
    string[] public kryptoBirdz;

    mapping(string => bool) _kryptoBirdzExists;

    function mint(string memory kryptoBird) public {
        // validation if kryptoBird is already added
        require(!_kryptoBirdzExists[kryptoBird], 'kryptoBird already exists');

        // adding kryptoBird
        kryptoBirdz.push(kryptoBird);

        // using index of kryptoBird in array as id
        uint _id = kryptoBirdz.length - 1;

        // saving the token and _tokenOwner
        _mint(msg.sender, _id);

        // to add a validation to check that kryptoBird is not already added.
        _kryptoBirdzExists[kryptoBird] = true;
    }


    constructor() ERC721Connector('KryptoBird', 'KBIRDZ') {}
}
