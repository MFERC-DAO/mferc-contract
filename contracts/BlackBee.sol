// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Royalty.sol";
import "@openzeppelin/contracts/token/common/ERC2981.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract BlackBee is ERC721Enumerable, ERC2981, ReentrancyGuard, Ownable {

    using Strings for uint256;

    address public mfercTokenAddress; // $MFERC token
    uint256 public mintFee = 20000000 ether; // the price of golden bee
    string private _baseTokenURI; // NFT base uri
    address immutable BlackHole = 0x000000000000000000000000000000000000dEaD;
    uint256 public immutable maxSupply = 66;
    // total burned mferc
    uint256 public totalBurned;
    // mapping whitelist
    mapping(address => bool) public whitelist;
    // mapping hasMintedNFT
    mapping(address => bool) public hasMintedNFT;

    constructor(
        string memory name,
        string memory symbol,
        address _mfercTokenAddress,
        address royaltyReceiver,
        string memory baseTokenURI
    ) ERC721(name, symbol) {
        mfercTokenAddress = _mfercTokenAddress;
        _baseTokenURI = baseTokenURI;
        // init royalty percentage to 5%
        _setDefaultRoyalty(royaltyReceiver, 500);
    }

 
    function addToWhitelist(address[] calldata addresses) external onlyOwner {
        for (uint256 i = 0; i < addresses.length; i++) {
            whitelist[addresses[i]] = true;
        }
    }

    function removeFromWhitelist(address[] calldata addresses) external onlyOwner {
        for (uint256 i = 0; i < addresses.length; i++) {
            whitelist[addresses[i]] = false;
        }
    }

    /**
     * @dev set base uri
     * @param baseTokenURI new base uri
     */
    function setBaseTokenURI(string memory baseTokenURI) external onlyOwner {
        _baseTokenURI = baseTokenURI;
    }

    /**
     * @dev get uri of a token id
     * @param tokenId NFT ID
     * @return
     */
    function tokenURI(
        uint256 tokenId
    ) public view override returns (string memory) {
        require(tokenId > 0 && tokenId <= maxSupply, "Invalid token id");
        return
            bytes(_baseTokenURI).length > 0
                ? string(abi.encodePacked(_baseTokenURI, tokenId.toString()))
                : _baseTokenURI;
    }

    function setDefaultRoyalty(
        address receiver,
        uint96 feeNumerator
    ) public onlyOwner {
        _setDefaultRoyalty(receiver, feeNumerator);
    }

    function mintNFT(uint256 tokenId) public nonReentrant {
        require(whitelist[msg.sender], "Address not in whitelisted");
        require(!hasMintedNFT[msg.sender], "Already minted a NFT");
        require(tokenId <= maxSupply && tokenId > 0, "Invalid token id");
        require(!_exists(tokenId), "Token has been minted");
        
        require(
            IERC20(mfercTokenAddress).balanceOf(msg.sender) >= mintFee,
            "Insufficient balance"
        );
        
        require(
            IERC20(mfercTokenAddress).transferFrom(
                msg.sender,
                BlackHole,
                mintFee
            ),
            "Burn MFERC fail"
        );
        _mint(msg.sender, tokenId);
        totalBurned += mintFee;
        
        hasMintedNFT[msg.sender] = true;
    }

    /**
     * @dev See {IERC165-supportsInterface}.
     */
    function supportsInterface(
        bytes4 interfaceId
    ) public view virtual override(ERC2981, ERC721Enumerable) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}