// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
 
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/Base64.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
 
contract InternVerseTest is ERC721URIStorage, Ownable  {
 
    using Strings for uint256;
    using Counters for Counters.Counter;
    Counters.Counter public _tokenIds; // !private
 
    struct Attr {
        string name;
        string skill1;
        string skill2;
        string skill3;
    }
 
    mapping(uint256 => Attr) public attributes;
 
    constructor() ERC721 ("InternVerseTest", "INTV"){
    }
 
    // generates SVG and converts into BASE64
    function getSVG(uint256 tokenId) public view returns(string memory){
    require(_exists(tokenId));
    bytes memory svg = abi.encodePacked(
        '<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" viewBox="0 0 350 350">',
        '<style>.base { fill: white; font-family: serif; font-size: 14px; }</style>',
        '<rect width="100%" height="100%" fill="#08246d" />',
        '<text x="50%" y="40%" class="base" dominant-baseline="middle" text-anchor="middle">',"InternVerser #", tokenId.toString(),'</text>',
        '<text x="50%" y="50%" class="base" dominant-baseline="middle" text-anchor="middle">', "Name: ", attributes[tokenId].name,'</text>',
        '<text x="50%" y="60%" class="base" dominant-baseline="middle" text-anchor="middle">', "Skills: ", attributes[tokenId].skill1, " ", attributes[tokenId].skill2, " ", attributes[tokenId].skill3,'</text>',
        '</svg>'
    );
    return string(
        abi.encodePacked(
            "data:image/svg+xml;base64,",
            Base64.encode(svg)
        ));
    }
 
    //
 
    // generates JSON metadata and converts into BASE64
    function getTokenURI(uint256 tokenId) public view returns (string memory){
        require(_exists(tokenId));
                bytes memory dataURI = abi.encodePacked(
            '{',
                '"name": "InternVerse #', tokenId.toString(), '",',
                '"description": "InternVerse PoW",',
                '"image_data": "', getSVG(tokenId), '",',
                '"attributes": [{"trait_type": "Name", "value": "', attributes[tokenId].name, '"},',
                '{"trait_type": "Skill #1", "value": "', attributes[tokenId].skill1, '"},',
                '{"trait_type": "Skill #2", "value": "', attributes[tokenId].skill2, '"},',
                '{"trait_type": "Skill #3", "value": "', attributes[tokenId].skill3, '"}',
            ']}'
        );
        return string(
            abi.encodePacked(
                "data:application/json;base64,",
                Base64.encode(dataURI)
            )
        );
    }
 
    uint MAX_INTERNS = 10000;
    // mint
    function mint(string memory _name, string memory _skill1, string memory _skill2, string memory _skill3) public {
        require(balanceOf(msg.sender) == 0, "You already own a NFT!");
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _safeMint(msg.sender, newItemId);
        attributes[newItemId] = Attr(_name, _skill1, _skill2, _skill3);
        _setTokenURI(newItemId, getTokenURI(newItemId));
    }
 
}
