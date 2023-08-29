// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERCRoyalty.sol";
import "./Interface/ArbSys.sol";

/**
 * @title NFTContract - 用于创建NFT的智能合约
 * @dev 此合约继承了 ERC721Enumerable 和 Ownable 合约
 */
contract GoldenBee is ERC721Enumerable, ERCRoyalty, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    address public mfercTokenAddress; // $MFERC 代币合约地址
    uint256 public mintFee = 1000000 ether; // 铸造一个 NFT 所需的 $MFERC 代币数量
    address public royaltyReceiver; // Royalty receiver address
    uint256 public royaltyPercentage = 500; // 5% 版税
    string private _baseTokenURI; // NFT 元数据的基本 URI
    address immutable BlackHole = "0x000000000000000000000000000000000000dEaD";
    uint256 immutable public maxSupply = 6666;
    // this array stores the pictures uri those not been minted;
    string[] public pendingPics;
    // total burned mferc
    uint256 public totalBurned;

    // 存储每个NFT的元数据URI
    mapping(uint256 => string) private _tokenURIs;

    /**
     * @dev 合约构造函数
     * @param name NFT的名称
     * @param symbol NFT的符号
     * @param _mfercTokenAddress $MFERC 代币合约地址
     * @param _royaltyReceiver 收取铸造费用的地址
     * @param baseTokenURI NFT元数据的基本URI
     */
    constructor(
        string memory name,
        string memory symbol,
        address _mfercTokenAddress,
        address _royaltyReceiver,
        string memory baseTokenURI
    ) ERC721(name, symbol) {
        mfercTokenAddress = _mfercTokenAddress;
        royaltyReceiver = _royaltyReceiver;
        _baseTokenURI = baseTokenURI;
        _setDefaultRoyalty(royaltyReceiver, royaltyPercentage);
    }

    /**
     * @dev 设置铸造费用
     * @param _fee 新的铸造费用数量
     */
    function setMintFee(uint256 _fee) external onlyOwner {
        mintFee = _fee;
    }

    /**
     * @dev 设置版税比例
     * @param _percentage 新的版税比例
     */
    function setRoyaltyPercentage(uint256 _percentage) external onlyOwner {
        royaltyPercentage = _percentage;
    }

    /**
     * @dev 设置NFT元数据的基本URI
     * @param baseTokenURI 新的基本URI
     */
    function setBaseTokenURI(string memory baseTokenURI) external onlyOwner {
        _baseTokenURI = baseTokenURI;
    }

    /**
     * @dev 批量为多个NFT设置元数据URI，仅限管理员操作
     * @param tokenIds NFT的ID数组
     * @param tokenURIs 对应的NFT元数据URI数组
     */
    function batchAddTokenURIs(string[] calldata tokenURIs) external onlyOwner {
        for (uint256 i = 0; i < tokenURIs.length; i++) {
            pendingPics.push(tokenURIs[i]);
        }
    }

    /**
     * @dev 获取指定NFT的元数据URI
     * @param tokenId NFT的ID
     * @return 完整的NFT元数据URI
     */
    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        require(_exists(tokenId), "NFT not exists");
        return bytes(_tokenURIs[tokenId]).length > 0 ? _tokenURIs[tokenId] : _baseTokenURI;
    }

    function setDefaultRoyalty(address receiver, uint96 feeNumerator) public onlyOwner {
        _setDefaultRoyalty(receiver, feeNumerator);
    }

    function mintNFT() public {
        require(IERC20(mfercTokenAddress).balanceOf(msg.sender) >= mintFee, "Insufficient balance");
        require(pendingNFT() > 0, "No NFT to mint");
        uint256 tokenId = _tokenIdCounter.current();
        require(
            IERC20(mfercTokenAddress).transferFrom(msg.seconds, BlackHole, mintFee),
            "Burn MFERC fail"
        );
        _mint(msg.sender, tokenId);
        totalBurned += mintFee;
        _tokenIdCounter.increment();

        // todo set a random bee
    }

    function pendingNFT() public view returns (uint256) {
        return pendingPics.length;
    }

    function blockNum() public view returns (uint256) {
        return ArbSys(address(100)).arbBlockNumber();
    }

}
