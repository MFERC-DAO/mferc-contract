// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Royalty.sol";
import "@openzeppelin/contracts/token/common/ERC2981.sol";
import "@openzeppelin/contracts/vendor/arbitrum/IArbSys.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract GoldenBee is ERC721Enumerable, ERC2981, ReentrancyGuard, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    address public mfercTokenAddress; // $MFERC token
    uint256 public mintFee = 1000000 ether; // the price of golden bee
    string private _baseTokenURI; // NFT base uri
    address immutable BlackHole = 0x000000000000000000000000000000000000dEaD;
    uint256 public immutable maxSupply = 6666;
    // this array stores the pictures uri those not been minted;
    string[] public pendingPics;
    // total burned mferc
    uint256 public totalBurned;

    // mapping token id to token uri
    mapping(uint256 => string) private _tokenURIs;

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

    /**
     * @dev set base uri
     * @param baseTokenURI new base uri
     */
    function setBaseTokenURI(string memory baseTokenURI) external onlyOwner {
        _baseTokenURI = baseTokenURI;
    }

    /**
     * @dev add new pics to contract, only owner can add new pics
     * user can mint NFT if there exists pending pics
     */
    function batchAddTokenURIs(string[] calldata tokenURIs) external onlyOwner {
        for (uint256 i = 0; i < tokenURIs.length; i++) {
            pendingPics.push(tokenURIs[i]);
        }
    }

    /**
     * @dev get uri of a token id
     * @param tokenId NFT ID
     * @return
     */
    function tokenURI(
        uint256 tokenId
    ) public view override returns (string memory) {
        require(_exists(tokenId), "NFT not exists");
        return
            bytes(_tokenURIs[tokenId]).length > 0
                ? string(abi.encodePacked(_baseTokenURI, _tokenURIs[tokenId]))
                : _baseTokenURI;
    }

    function setDefaultRoyalty(
        address receiver,
        uint96 feeNumerator
    ) public onlyOwner {
        _setDefaultRoyalty(receiver, feeNumerator);
    }

    function mintNFT() public nonReentrant {
        require(
            IERC20(mfercTokenAddress).balanceOf(msg.sender) >= mintFee,
            "Insufficient balance"
        );
        require(pendingNFTLength() > 0, "No NFT to mint");
        _tokenIdCounter.increment();
        require(
            _tokenIdCounter.current() <= maxSupply,
            "NFT has been sold out!"
        );
        uint256 tokenId = _tokenIdCounter.current();
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

        // todo set a random bee
        uint256 randomIndex = blockNum() % pendingNFTLength();
        _tokenURIs[tokenId] = pendingPics[randomIndex];
        pendingPics[randomIndex] = pendingPics[pendingPics.length - 1];
        pendingPics.pop();
    }

    function pendingNFTLength() public view returns (uint256) {
        return pendingPics.length;
    }

    function blockNum() public view returns (uint256) {
        // for test
        return block.number;
        return IArbSys(address(100)).arbBlockNumber();
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
