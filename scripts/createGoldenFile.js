const fs = require('fs');

async function main() {
    let json = [
        {
            "name": "Mferc Community Member",
            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/Qme8MQ6eCLTQPR1Jp4ohQ95nuNqGDEZgCv97K9VvjkjbFr"
            },
            {
            "name": "Mferc Community Member",
            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmNegDPecVGhPBMYKbxVMfCmQh6yjeGfnY5zJiJ2zmjBrk"
            },
            {
            "name": "Mferc Community Member",
            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmUsksAT2vySMCnSouQ8Dt2i43S7qaYKJYQ7nXBRAQT9Sp"
            },
            {
            "name": "Mferc Community Member",
            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmdDodof1GtHNkhTNXfH2SdWD3XFPfc3BhXXrSipMJwjma"
            },
            {
            "name": "Mferc Community Member",
            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmdMpHmBv4EXSkQjwVA6n5pEAfvr5fMtiJPcQbsEehjTdJ"
            },
            {
            "name": "Mferc Community Member",
            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmVmKHeVMveChudE7jM48K1vA3nvRAgJy9TWGfyk25B12H"
            },
            {
            "name": "Mferc Community Member",
            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmeLYzjV7QbYtJAijWSYkiDEAaPNTL9sy1GSJroQdZUYSj"
            },
            {
            "name": "Mferc Community Member",
            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmfHD5PZayn7WazKkPr7cuMxVpsCWqAsama5hz4LqKKDK1"
            },
            {
            "name": "Mferc Community Member",
            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmePb6UovsSjM9jtGHWUQyNnq34yMhbrCgtvt8sDU2NkEe"
            },
            {
            "name": "Mferc Community Member",
            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmUtx3FQxRZd1FbhLxxT4oWV8grV1BkAytik35yzWHCHWb"
            },
            {
                "name": "Mferc Community Member",
                "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                "image": "https://gateway.nutbox.app/ipfs/QmQRgj2PDN4vNAJfZAWnnB5zpbegGLacjMZmhx7yRY95az"
                },
                {
                "name": "Mferc Community Member",
                "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                "image": "https://gateway.nutbox.app/ipfs/QmRGTPV2fwzH9bbaqajHvmktYaYHt7QSv8zNm7Ez5jXFHd"
                },
                {
                "name": "Mferc Community Member",
                "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                "image": "https://gateway.nutbox.app/ipfs/QmYRT2K2yRp45SA7S8ea3sArTSJEPtEoW3Q3nAGkLJMY6C"
                },
                {
                "name": "Mferc Community Member",
                "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                "image": "https://gateway.nutbox.app/ipfs/QmbKvjP1DvnwSLSJ9LqmvArRRSvw1ZJ5rj3rwaw5t7Bb1s"
                },
                {
                "name": "Mferc Community Member",
                "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                "image": "https://gateway.nutbox.app/ipfs/QmYRwmiqNjFEBErkqnXPfvJgiHUrmjtCMfDnzH61LfXsSZ"
                },
                {
                "name": "Mferc Community Member",
                "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                "image": "https://gateway.nutbox.app/ipfs/Qmch19ceh8kBE2twHp6VvSBhhW8QsjqiFw43eXeWLTSiiJ"
                },
                {
                "name": "Mferc Community Member",
                "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                "image": "https://gateway.nutbox.app/ipfs/QmeYmebEVgM7isxMyeVuEvQYEXDFtzwjfFbWjyoMA7Jam9"
                },
                {
                "name": "Mferc Community Member",
                "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                "image": "https://gateway.nutbox.app/ipfs/QmbtGNJfDtpzKzCC3m89vnnBCzep6hA45C9ZPwNRGazUuq"
                },
                {
                "name": "Mferc Community Member",
                "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                "image": "https://gateway.nutbox.app/ipfs/QmRbnJbmPKMphZEJiPXCeWB1aWtSjkVwE2eWvPwKjEtLHn"
                },
                {
                "name": "Mferc Community Member",
                "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                "image": "https://gateway.nutbox.app/ipfs/QmPvu2s4u3RquF5cAvCjjX9jegySzTJ11UsiDb4htA8cC2"
                },
                {
                    "name": "Mferc Community Member",
                    "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                    "image": "https://gateway.nutbox.app/ipfs/QmSRLJFTzA8p9iKTb35Uw4nUgYxHUJWVof6o3xT3rRe3Pr"
                    },
                    {
                    "name": "Mferc Community Member",
                    "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                    "image": "https://gateway.nutbox.app/ipfs/QmeqfBMV7a2mUBBxbn5HvGPZXtdhEEM7vwLUN2b6zUsvxm"
                    },
                    {
                    "name": "Mferc Community Member",
                    "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                    "image": "https://gateway.nutbox.app/ipfs/QmbniRKgsSadxZRhqkDy7arZW1vNQG9bjnyeXAGjvBecwo"
                    },
                    {
                    "name": "Mferc Community Member",
                    "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                    "image": "https://gateway.nutbox.app/ipfs/QmRNretXFjH15aRKZfrUQBVhUwrepWWUzzD2nK4CczWgf2"
                    },
                    {
                    "name": "Mferc Community Member",
                    "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                    "image": "https://gateway.nutbox.app/ipfs/QmbUHCWsLD9GrZQ4VfKaLLXaXpi1FtfenQzjFnLd4QbH1P"
                    },
                    {
                    "name": "Mferc Community Member",
                    "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                    "image": "https://gateway.nutbox.app/ipfs/QmRgeJn52B3EjBAs35UC9cSNqu7nYfxfPALaP2PMvHAuH6"
                    },
                    {
                    "name": "Mferc Community Member",
                    "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                    "image": "https://gateway.nutbox.app/ipfs/QmZCLTHsFsfcBz5CWyJqRpbb6LS5b4YT6HK4774Z987YWK"
                    },
                    {
                    "name": "Mferc Community Member",
                    "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                    "image": "https://gateway.nutbox.app/ipfs/QmR78z6LMnWTYKr3onSJneysdvwpiTDG2rstsN8bLCoDNi"
                    },
                    {
                    "name": "Mferc Community Member",
                    "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                    "image": "https://gateway.nutbox.app/ipfs/QmSqXwqoubt27ThZiSb4K8HvSomVLby5yXvS25pqzMRjH4"
                    },
                    {
                    "name": "Mferc Community Member",
                    "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                    "image": "https://gateway.nutbox.app/ipfs/QmTuBtgX1wPxtvgk3673bfAqPH7fff9RwJtWFYVE7hvoGM"
                    },
                    {
                        "name": "Mferc Community Member",
                        "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                        "image": "https://gateway.nutbox.app/ipfs/QmdwksNakFLbEg6FhKViAJwJpRprhorGMwn8a3mTQcEd2j"
                        },
                        {
                        "name": "Mferc Community Member",
                        "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                        "image": "https://gateway.nutbox.app/ipfs/QmQwnj3eFynDMFtTxHsrZ9JTtP1WaL83TbqU6RZS6XR6BC"
                        },
                        {
                        "name": "Mferc Community Member",
                        "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                        "image": "https://gateway.nutbox.app/ipfs/QmSA2WnG8BsofJEUHkVRhP4uTQ2rjCtr5tzLvY227mctsP"
                        },
                        {
                        "name": "Mferc Community Member",
                        "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                        "image": "https://gateway.nutbox.app/ipfs/Qmbfww3zNThdgRgCmNrZAuEJYwvbEaktrxEuuhYgZT2GFV"
                        },
                        {
                        "name": "Mferc Community Member",
                        "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                        "image": "https://gateway.nutbox.app/ipfs/QmV5nHZLWJqhmpmtXxfyPYdps4MYhn5HK4C3HchkK99PBA"
                        },
                        {
                        "name": "Mferc Community Member",
                        "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                        "image": "https://gateway.nutbox.app/ipfs/Qmed9yTGUiPwvjJdLs1stYy7PnB84xU6YBdHHNYgnWi6nX"
                        },
                        {
                        "name": "Mferc Community Member",
                        "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                        "image": "https://gateway.nutbox.app/ipfs/QmVZfsjYWcaxFJQJ1T1nEHUKzv31VYxAmTXxWKWwvkdC6X"
                        },
                        {
                        "name": "Mferc Community Member",
                        "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                        "image": "https://gateway.nutbox.app/ipfs/QmNsiziGs9kEScbn96tpvPrnH9uFuxjcy1UcT8n631DXAR"
                        },
                        {
                        "name": "Mferc Community Member",
                        "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                        "image": "https://gateway.nutbox.app/ipfs/QmXGe6GtP1riTFqw2iZTbuxNFR65tdF9HckwvMXhVHfKjW"
                        },
                        {
                        "name": "Mferc Community Member",
                        "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                        "image": "https://gateway.nutbox.app/ipfs/QmdNSt5FAGEAWnYbG2t1ehz8Fc2LtLJUdjCUP6hJrcFgNi"
                        },
                        {
                        "name": "Mferc Community Member",
                        "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                        "image": "https://gateway.nutbox.app/ipfs/QmPVRcUZsysXLJYDjQGkjLqEFXj2NnPdkpecA3eCezYzM1"
                        },
                        {
                        "name": "Mferc Community Member",
                        "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                        "image": "https://gateway.nutbox.app/ipfs/QmdTrAuubBU37S4neyQnwNHWGum54GvbqUK6Ft6HSjsm4G"
                        },
                        {
                        "name": "Mferc Community Member",
                        "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                        "image": "https://gateway.nutbox.app/ipfs/QmeffBH1mirJVyhi1ZtSkG866h6rLoPSz3kwG58KJWioHh"
                        },
                        {
                        "name": "Mferc Community Member",
                        "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                        "image": "https://gateway.nutbox.app/ipfs/QmVxSWuJcDi8yvyYWj4c4fwLCjNnPPUgW9B8SNWcsWAAj7"
                        },
                        {
                        "name": "Mferc Community Member",
                        "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                        "image": "https://gateway.nutbox.app/ipfs/QmSJcQXhTFam8dj9BWqyHbpoFWLfKBKK6YLozNB21AgvMy"
                        },
                        {
                        "name": "Mferc Community Member",
                        "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                        "image": "https://gateway.nutbox.app/ipfs/QmcCqbXiu9SqH7P7RJWouFMngq4RC5kR7uoj8eFero5whz"
                        },
                        {
                        "name": "Mferc Community Member",
                        "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                        "image": "https://gateway.nutbox.app/ipfs/QmbbPntupZ65EhQpj4KpeRVhguvpWoTV36VZtj6Qgek2h4"
                        },
                        {
                        "name": "Mferc Community Member",
                        "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                        "image": "https://gateway.nutbox.app/ipfs/QmbMMPX7owcF36UE2H5toY7pHApTjCZz32fK6VUV1mersi"
                        },
                        {
                        "name": "Mferc Community Member",
                        "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                        "image": "https://gateway.nutbox.app/ipfs/QmUwmnENzeAoztcGTrXXD2VnpMfPzTk6WaWvE5iGWXjtyi"
                        },
                        {
                        "name": "Mferc Community Member",
                        "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                        "image": "https://gateway.nutbox.app/ipfs/QmXNP9xsQSnSXn3ZEAEPXEoeczp7Ldyb7KFVNN1d5YcuLF"
                        },
                        {
                            "name": "Mferc Community Member",
                            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                            "image": "https://gateway.nutbox.app/ipfs/QmemAt1D5iTsY6dAAk4QjujxDJeZB644427Xp4TeU9yoMF"
                            },
                            {
                            "name": "Mferc Community Member",
                            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                            "image": "https://gateway.nutbox.app/ipfs/QmeMBMxXCHhVykrxp7N4TDyw1csuSbVDaQLuqY7AAhHx3P"
                            },
                            {
                            "name": "Mferc Community Member",
                            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                            "image": "https://gateway.nutbox.app/ipfs/QmNyS53J2a2NKjU1htQzKHmwaPDFE4pZpz9VnmxQuFPdiv"
                            },
                            {
                            "name": "Mferc Community Member",
                            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                            "image": "https://gateway.nutbox.app/ipfs/QmTT26oFcwmVGyHry2pVtTd6UQ9UbRHTzQS5tTzsbMJ5oa"
                            },
                            {
                            "name": "Mferc Community Member",
                            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                            "image": "https://gateway.nutbox.app/ipfs/QmdqkLLbaoNqY731hJQ7GyekNrFsexygSdMZ7tcd39ddT2"
                            },
                            {
                            "name": "Mferc Community Member",
                            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                            "image": "https://gateway.nutbox.app/ipfs/QmY4QZRFUPvY6K1SxdU32Kay45LhTDRVD6jo2LTWxtqkii"
                            },
                            {
                            "name": "Mferc Community Member",
                            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                            "image": "https://gateway.nutbox.app/ipfs/QmVfmQCABw9Hyw6WXXmxw77m1fQBAjK1ps1P53CAM5GySv"
                            },
                            {
                            "name": "Mferc Community Member",
                            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                            "image": "https://gateway.nutbox.app/ipfs/QmV72kd9GnHDX7jboYBpWUcpZA6at3zQAUzdQDip8T9ysW"
                            },
                            {
                            "name": "Mferc Community Member",
                            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                            "image": "https://gateway.nutbox.app/ipfs/QmewyDwD8GVZfwMcTSK9cwj8WkoBd8d1n3Q979c3VSJPtk"
                            },
                            {
                            "name": "Mferc Community Member",
                            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                            "image": "https://gateway.nutbox.app/ipfs/QmRh6zm1maPKc9UKRtybtzu1QKkLxeQ27zpth95gyUeKEj"
                            },
                            {
                            "name": "Mferc Community Member",
                            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                            "image": "https://gateway.nutbox.app/ipfs/QmSRAVnkAgaZM43wR1uTGCDCutpqQzRmDPLBLcEx2fGEad"
                            },
                            {
                            "name": "Mferc Community Member",
                            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                            "image": "https://gateway.nutbox.app/ipfs/QmY9RFgVMSCtWSHrh6D5VfeZTPVNqa7HLAYFn2YQG4MUFZ"
                            },
                            {
                            "name": "Mferc Community Member",
                            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                            "image": "https://gateway.nutbox.app/ipfs/QmV5TXrXpB9TozpbUfRujsNNWzrbDT6fizuo7Fo2MaUzFk"
                            },
                            {
                            "name": "Mferc Community Member",
                            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                            "image": "https://gateway.nutbox.app/ipfs/QmeqCrqnhdgLkg39jpsRRWEx3tZ5CgsCHQENYsmN3CcsKa"
                            },
                            {
                            "name": "Mferc Community Member",
                            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                            "image": "https://gateway.nutbox.app/ipfs/QmRM51DxeV4PZcxMwShWYi2JNiYKuj1QercWkcThs3fiAQ"
                            },
                            {
                            "name": "Mferc Community Member",
                            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                            "image": "https://gateway.nutbox.app/ipfs/QmT8U937fFW7z1RbygKXYPcsAPCUZ5zmp7E1ixjxkpgMtX"
                            },
                            {
                            "name": "Mferc Community Member",
                            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                            "image": "https://gateway.nutbox.app/ipfs/QmTj6oUYzi3vQTc1qxDrUQU4eCuiHorskjmrdLaJoG64ft"
                            },
                            {
                            "name": "Mferc Community Member",
                            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                            "image": "https://gateway.nutbox.app/ipfs/QmUsYdxK14zHHKhyPreZ8MFsXa7VPS7PeX41X59U5nCxjq"
                            },
                            {
                            "name": "Mferc Community Member",
                            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                            "image": "https://gateway.nutbox.app/ipfs/QmUCQA5PechxSxPpTCCSfWjwvMETXK1s4srFEETtFauSmX"
                            },
                            {
                            "name": "Mferc Community Member",
                            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                            "image": "https://gateway.nutbox.app/ipfs/QmRG8S7PFvsh3RtampKzohRw9PctEf9a7ZjXgH9qKyrpn6"
                            },
                            {
                                "name": "Mferc Community Member",
                                "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                "image": "https://gateway.nutbox.app/ipfs/QmPgMQkp6YFkmmQpqS4Tq6hqwQHFhyATdKXGEALKjWNris"
                                },
                                {
                                "name": "Mferc Community Member",
                                "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                "image": "https://gateway.nutbox.app/ipfs/QmZ6vCL3R2ZmH8AjtVzjsNBYZbA66CoWJfjyNvq393db1H"
                                },
                                {
                                "name": "Mferc Community Member",
                                "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                "image": "https://gateway.nutbox.app/ipfs/QmSdrTCp11Qv7VsFvrW8Qo2fd1rnSVZF2pt7nqaZMZUvEC"
                                },
                                {
                                "name": "Mferc Community Member",
                                "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                "image": "https://gateway.nutbox.app/ipfs/QmQ4DzLX3LPBSNSkQjMPezB6kTAhZhg929J4rxiCRgpuMf"
                                },
                                {
                                "name": "Mferc Community Member",
                                "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                "image": "https://gateway.nutbox.app/ipfs/QmYWg6Sq4McycSm5FYoPnKRgLLxvzEtYnMV9PifMjdA3fX"
                                },
                                {
                                "name": "Mferc Community Member",
                                "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                "image": "https://gateway.nutbox.app/ipfs/QmdXvGwsVdRAATom1T1gq8ER523JNjxpDZPiiT2t3YX7fY"
                                },
                                {
                                "name": "Mferc Community Member",
                                "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                "image": "https://gateway.nutbox.app/ipfs/QmTHbEUp6zHEr4PSLsfX8br1DSV7ZDeBSy4x68be2RxDZD"
                                },
                                {
                                "name": "Mferc Community Member",
                                "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                "image": "https://gateway.nutbox.app/ipfs/QmUFoSFmriMKaQjgB3qzC1dBAra9UfMeh1HPQAqkK2GXV5"
                                },
                                {
                                "name": "Mferc Community Member",
                                "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                "image": "https://gateway.nutbox.app/ipfs/QmRngTv3gmRUsp6KU3ekeg7mrsSr35M4tSASgr5TtX4r6H"
                                },
                                {
                                "name": "Mferc Community Member",
                                "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                "image": "https://gateway.nutbox.app/ipfs/Qma9sF7SonXFrEM4sSjZUAEM7LCUDgHMcwL26CMtUVkV3K"
                                },
                                {
                                "name": "Mferc Community Member",
                                "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                "image": "https://gateway.nutbox.app/ipfs/QmTcyn2EoqzUaieu2pzP3P17rT7uwmNhLRkdLURwhWUD8K"
                                },
                                {
                                "name": "Mferc Community Member",
                                "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                "image": "https://gateway.nutbox.app/ipfs/QmPpQS8tMyXvVJByndpGQMfMeXiVLgy9zjjJezDK1U6dKg"
                                },
                                {
                                "name": "Mferc Community Member",
                                "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                "image": "https://gateway.nutbox.app/ipfs/QmXaXjwBmbCQuJAFzn7nJJGhQWd5fzsXsyfikVu5AcsmAo"
                                },
                                {
                                "name": "Mferc Community Member",
                                "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                "image": "https://gateway.nutbox.app/ipfs/QmT1U11goF4eNa4uRt7PxtYTe4KMMssqpfAjdZgKgzJiEF"
                                },
                                {
                                "name": "Mferc Community Member",
                                "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                "image": "https://gateway.nutbox.app/ipfs/QmSQeBtdQL9cy87tNTpaAxmiMtiMSzQVQxL3LXcFYTdCvv"
                                },
                                {
                                "name": "Mferc Community Member",
                                "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                "image": "https://gateway.nutbox.app/ipfs/QmUHz9M2Vcs8TwUfWgu6S1jKNo8ywki7QTo3UN1Y87yjbH"
                                },
                                {
                                "name": "Mferc Community Member",
                                "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                "image": "https://gateway.nutbox.app/ipfs/QmSGGJyMbpK4zG3B1hwHVcSSwFCzJm4EvrywAwsFatVtiE"
                                },
                                {
                                "name": "Mferc Community Member",
                                "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                "image": "https://gateway.nutbox.app/ipfs/QmY4PSfGm3nXhqmpMruCfduhhFURN4pdftKmTHn9vPCES3"
                                },
                                {
                                "name": "Mferc Community Member",
                                "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                "image": "https://gateway.nutbox.app/ipfs/Qmc1sAE8z59zVKLCJfjKhR2J7UBXnwaPvv4kdSLHkpDkrD"
                                },
                                {
                                "name": "Mferc Community Member",
                                "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                "image": "https://gateway.nutbox.app/ipfs/QmNxffkkXA4T7fZXMXnC4VQHPbsq5ZzN2wzADBmwdVJ1Sr"
                                },
                                {
                                "name": "Mferc Community Member",
                                "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                "image": "https://gateway.nutbox.app/ipfs/QmfHg1yxDyrYmex2zXsroQoEowKFgiLdVzoicQYxUhtmDJ"
                                },
                                {
                                "name": "Mferc Community Member",
                                "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                "image": "https://gateway.nutbox.app/ipfs/Qmed8mWETb7q3tEy9rX44V7qwRdUyAu6eWKBwk1gofN1Ws"
                                },
                                {
                                "name": "Mferc Community Member",
                                "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                "image": "https://gateway.nutbox.app/ipfs/Qmc4QnML2BQGi3xvY8h8RWTQDa3N7NWbBh6VqiugBjtcYh"
                                },
                                {
                                "name": "Mferc Community Member",
                                "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                "image": "https://gateway.nutbox.app/ipfs/Qmd57zZfD9iW93qPmVHhyCcLAHs2mj37MJ7FWHvcPHP7GZ"
                                },
                                {
                                "name": "Mferc Community Member",
                                "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                "image": "https://gateway.nutbox.app/ipfs/QmVcW65PPuXiqJzsSmbzSH9YTeGBf1XURQQ1u5KxP5799h"
                                },
                                {
                                "name": "Mferc Community Member",
                                "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                "image": "https://gateway.nutbox.app/ipfs/QmVz8AmKab9LyJxAN7WS9zZRVezkSS3ZD8tjocJR2UPBcD"
                                },
                                {
                                "name": "Mferc Community Member",
                                "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                "image": "https://gateway.nutbox.app/ipfs/QmXTRcrsfJoXdgH65tnPa8KYLGYwSyqPid7JJ39e2Pz3VK"
                                },
                                {
                                "name": "Mferc Community Member",
                                "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                "image": "https://gateway.nutbox.app/ipfs/Qme7QtnnnudaV1cuwYD1mV9T8RLaKVAxGhgoaBudsUjdXi"
                                },
                                {
                                "name": "Mferc Community Member",
                                "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                "image": "https://gateway.nutbox.app/ipfs/QmSfWzRKarySgZNGmBfWhMuCxNMfiMHU2yb64XqtA5bd4e"
                                },
                                {
                                "name": "Mferc Community Member",
                                "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                "image": "https://gateway.nutbox.app/ipfs/QmfQ2PXVxUCuZWUjsCFpm3JFda5NwULNFjMRoe9gvtcQu2"
                                },
                                {
                                    "name": "Mferc Community Member",
                                    "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                    "image": "https://gateway.nutbox.app/ipfs/Qmb2mUnqJVcBzDmzrEdgWgQdnAw98duB9K989fsT4czbK5"
                                    },
                                    {
                                    "name": "Mferc Community Member",
                                    "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                    "image": "https://gateway.nutbox.app/ipfs/QmPHsA6Cvwf7u8cK6bC4dx9Qcip6WZsLtguvm6EePcG9m1"
                                    },
                                    {
                                    "name": "Mferc Community Member",
                                    "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                    "image": "https://gateway.nutbox.app/ipfs/QmTVc42xSzRi56QAujH5MiSt6J4i3k4TkLsrBJbSnfKzjX"
                                    },
                                    {
                                    "name": "Mferc Community Member",
                                    "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                    "image": "https://gateway.nutbox.app/ipfs/QmRgTZTWWDHEmj4GTPdoJTeddxbnSHNBHSKxPg6k2puN37"
                                    },
                                    {
                                    "name": "Mferc Community Member",
                                    "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                    "image": "https://gateway.nutbox.app/ipfs/QmezCiL6sxFcCgAwRhZtR2X5cGHAFCFs4z6iyyek3eohSa"
                                    },
                                    {
                                    "name": "Mferc Community Member",
                                    "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                    "image": "https://gateway.nutbox.app/ipfs/QmXRz1t9FzXARmomvgzvpniDnDiBmTCfQLWnCCn9aJhnbF"
                                    },
                                    {
                                    "name": "Mferc Community Member",
                                    "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                    "image": "https://gateway.nutbox.app/ipfs/QmWRQKtuZ4eqfGynpbGeDbCWzCGvB8QhYTxxM8Gt78q9o5"
                                    },
                                    {
                                    "name": "Mferc Community Member",
                                    "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                    "image": "https://gateway.nutbox.app/ipfs/QmVXhdSy6GhrPGxFc5hefA3GHmDF4mkPsK9ttyphcfUAZS"
                                    },
                                    {
                                    "name": "Mferc Community Member",
                                    "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                    "image": "https://gateway.nutbox.app/ipfs/QmfM7RsAXbnqYgySqubxHC37NCrLhrJzYGbYuvMZxVBP3L"
                                    },
                                    {
                                    "name": "Mferc Community Member",
                                    "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                    "image": "https://gateway.nutbox.app/ipfs/QmfJMCHMSD4QTsoaTTBHPFphEHpG2z8zBpk5fmeRQNaHv9"
                                    },
                                    {
                                    "name": "Mferc Community Member",
                                    "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                    "image": "https://gateway.nutbox.app/ipfs/QmUZWaKJfTX4ePxyHGVdbQUpTPZQKqqUKeyV2Qyey7fuGV"
                                    },
                                    {
                                    "name": "Mferc Community Member",
                                    "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                    "image": "https://gateway.nutbox.app/ipfs/QmSLFz8EvxLoCXCzFnut3eVwT2nPF3JvyoQLqZQMFmyGYy"
                                    },
                                    {
                                    "name": "Mferc Community Member",
                                    "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                    "image": "https://gateway.nutbox.app/ipfs/Qmbi9941zASpXTmhbrKbdQC4GTk1y9LSakZ3oDdVYiZ4W8"
                                    },
                                    {
                                    "name": "Mferc Community Member",
                                    "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                    "image": "https://gateway.nutbox.app/ipfs/Qme21AzV9RnxrYRV7UdPgih1gVzZpFBjKNVXsLnh6L5u6H"
                                    },
                                    {
                                    "name": "Mferc Community Member",
                                    "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                    "image": "https://gateway.nutbox.app/ipfs/QmeotsnhtpUtgVc9REUuhQgyWiivHYoMMEKf9oFVURVzKC"
                                    },
                                    {
                                    "name": "Mferc Community Member",
                                    "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                    "image": "https://gateway.nutbox.app/ipfs/QmTuFsmca4UySGqYZK61LMx2e3dXbEdeikwH4gr2nA8MQ3"
                                    },
                                    {
                                    "name": "Mferc Community Member",
                                    "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                    "image": "https://gateway.nutbox.app/ipfs/QmdkfELjD2BVnq6VWbZmn6HEfTTJzLRY1ybshpybWeeNNo"
                                    },
                                    {
                                    "name": "Mferc Community Member",
                                    "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                    "image": "https://gateway.nutbox.app/ipfs/QmQUXpzRoWFeZT1scdxMZF6D8HhYSJn9taz7QLezDJ9Bnd"
                                    },
                                    {
                                    "name": "Mferc Community Member",
                                    "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                    "image": "https://gateway.nutbox.app/ipfs/QmcmWfA36HyBioWDLZ4VYSxTvdJT3kwop5nNZbFiQgfTVS"
                                    },
                                    {
                                    "name": "Mferc Community Member",
                                    "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                    "image": "https://gateway.nutbox.app/ipfs/Qmc863JWcr64kwpm4RAjSoQe1yqbpcipBMy5fHD5gc2r5E"
                                    },
                                    {
                                    "name": "Mferc Community Member",
                                    "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                    "image": "https://gateway.nutbox.app/ipfs/QmeXeAjKuBDg6y4D9tHHFM8sdBxp2dYUwoL9i7TrBjMJF6"
                                    },
                                    {
                                    "name": "Mferc Community Member",
                                    "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                    "image": "https://gateway.nutbox.app/ipfs/QmfNKfc9CUztURz9yGH8U4G5na6QU3TVDzR9EZi6u5FoyX"
                                    },
                                    {
                                    "name": "Mferc Community Member",
                                    "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                    "image": "https://gateway.nutbox.app/ipfs/Qmd7dT1MLJyMPNPKPdit6uZ6kHjkaYPANBFhoygimUwRu8"
                                    },
                                    {
                                    "name": "Mferc Community Member",
                                    "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                    "image": "https://gateway.nutbox.app/ipfs/QmSS42611RPQtHSe83AhvCZPYzxq2XvnC7GnTnSFctxGBz"
                                    },
                                    {
                                    "name": "Mferc Community Member",
                                    "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                    "image": "https://gateway.nutbox.app/ipfs/QmQgTxJ3okAyBqUq8tZzk5G7dCqHSu2TAMezKWJXviTNmd"
                                    },
                                    {
                                    "name": "Mferc Community Member",
                                    "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                    "image": "https://gateway.nutbox.app/ipfs/QmWUZ93D8aqBxecgi9P3wQntFpt3PE3gFWPzpSVdLVTjx2"
                                    },
                                    {
                                    "name": "Mferc Community Member",
                                    "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                    "image": "https://gateway.nutbox.app/ipfs/QmQLcKX7j22tTEq1SH1ipBGVZiEUDa7SUerbHLRuFK9Be3"
                                    },
                                    {
                                    "name": "Mferc Community Member",
                                    "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                    "image": "https://gateway.nutbox.app/ipfs/QmajRtS3bFc6czEFbvjPoXp2QTCDVnhto2CbNxcnJYyKpe"
                                    },
                                    {
                                    "name": "Mferc Community Member",
                                    "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                    "image": "https://gateway.nutbox.app/ipfs/QmUDPfYiuZCY7jRhrvEkPrAFQ6ZrpyrxReR3uYsyjHPcT8"
                                    },
                                    {
                                    "name": "Mferc Community Member",
                                    "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                    "image": "https://gateway.nutbox.app/ipfs/QmYsEQPsRszcWB3DcRM6omh7nTWwqkMooN5N2yWj4YMDKn"
                                    },
                                    {
                                        "name": "Mferc Community Member",
                                        "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                        "image": "https://gateway.nutbox.app/ipfs/QmXWDjePakENdFwvS2Bef3PWwVkif6cDkngHvUpPVPRXCj"
                                        },
                                        {
                                        "name": "Mferc Community Member",
                                        "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                        "image": "https://gateway.nutbox.app/ipfs/Qmd55ijbyQUia5Ui3R8siH593urG2wJcsy8wsuaLcNriaT"
                                        },
                                        {
                                        "name": "Mferc Community Member",
                                        "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                        "image": "https://gateway.nutbox.app/ipfs/QmbUP6QKL62TU2MTZr6kSURhoJ2DziGsMky9m7PvzndSFH"
                                        },
                                        {
                                        "name": "Mferc Community Member",
                                        "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                        "image": "https://gateway.nutbox.app/ipfs/QmcDdayZVWwN4MWUvVeQShgVdWE7eAisk9MxLerDM5TugZ"
                                        },
                                        {
                                        "name": "Mferc Community Member",
                                        "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                        "image": "https://gateway.nutbox.app/ipfs/Qma4TiESLLciNfPqpsbDXdpqG2zW71XCD11GyUYBCCHt5C"
                                        },
                                        {
                                        "name": "Mferc Community Member",
                                        "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                        "image": "https://gateway.nutbox.app/ipfs/QmbiW3V9AvBHx4EdKQmsJQ5Lm8Yo9FpGQpKTRuw6vKuf4P"
                                        },
                                        {
                                        "name": "Mferc Community Member",
                                        "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                        "image": "https://gateway.nutbox.app/ipfs/QmaBpryoNE7jYyLEkf5yQ8Lh33Az3bjoSVGWycj6Bfb5w4"
                                        },
                                        {
                                        "name": "Mferc Community Member",
                                        "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                        "image": "https://gateway.nutbox.app/ipfs/Qmc1EnP9V62V9p51ReHJinxRg2mNTdW4ufq6uvDw47Ra5g"
                                        },
                                        {
                                        "name": "Mferc Community Member",
                                        "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                        "image": "https://gateway.nutbox.app/ipfs/QmYLRirh3amLpbQbr19tYHqeZtSsSrNJrnutfgLNaLsXBK"
                                        },
                                        {
                                        "name": "Mferc Community Member",
                                        "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                        "image": "https://gateway.nutbox.app/ipfs/Qmap8Eiq57qazjoCfat6wZBMoNvvse8Eo5C1S5b46yNhFi"
                                        },
                                        {
                                        "name": "Mferc Community Member",
                                        "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                        "image": "https://gateway.nutbox.app/ipfs/QmeP5DH7vG57RF5evwZS5Xqfv2i3VQaRqET5fwRc5GtBWA"
                                        },
                                        {
                                        "name": "Mferc Community Member",
                                        "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                        "image": "https://gateway.nutbox.app/ipfs/QmbQxCjSyfNkZEEQPgJPzRYfAqNDFuHqPmwZETUCiDDYkn"
                                        },
                                        {
                                        "name": "Mferc Community Member",
                                        "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                        "image": "https://gateway.nutbox.app/ipfs/Qmbkopgft5hUkujR7g3ar1p5bpub3NM1fx7Rin2beLF5zj"
                                        },
                                        {
                                        "name": "Mferc Community Member",
                                        "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                        "image": "https://gateway.nutbox.app/ipfs/QmVKvtFP7bCwyRGDnh229eeypXthsJ4AMp2faLsjwUofoq"
                                        },
                                        {
                                        "name": "Mferc Community Member",
                                        "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                        "image": "https://gateway.nutbox.app/ipfs/QmUXTyxVLTG8w2fGe2s68ogqXKkU9psA8kvPAritZWUj4o"
                                        },
                                        {
                                        "name": "Mferc Community Member",
                                        "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                        "image": "https://gateway.nutbox.app/ipfs/QmYFXiETT15jzRrsZ1mdzHznjjtM9SWXbAMMLSmtBTSvxc"
                                        },
                                        {
                                        "name": "Mferc Community Member",
                                        "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                        "image": "https://gateway.nutbox.app/ipfs/Qmd1mfqSBapz4rECYar4vs7b97qpH93swzhwNuLFe2nfAp"
                                        },
                                        {
                                        "name": "Mferc Community Member",
                                        "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                        "image": "https://gateway.nutbox.app/ipfs/QmUuP5Mu6XDWaSHDutJyjiY5V6g8TMMeFHfuz5jpnc9dQP"
                                        },
                                        {
                                        "name": "Mferc Community Member",
                                        "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                        "image": "https://gateway.nutbox.app/ipfs/QmSkC7oHgHjb8ot3v7bMDwv3JavnUY9AUqj3SezHvJKgAh"
                                        },
                                        {
                                        "name": "Mferc Community Member",
                                        "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                        "image": "https://gateway.nutbox.app/ipfs/QmRgJkePUWqLgfxEj3ZTtgqQ3WsK8ZscrE6NfuHhajm6VE"
                                        },
                                        {
                                        "name": "Mferc Community Member",
                                        "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                        "image": "https://gateway.nutbox.app/ipfs/QmbaV5cYJ6PqV3hoDKr5gvFuAt6HEvYYDUwSyF8x7LxdyC"
                                        },
                                        {
                                        "name": "Mferc Community Member",
                                        "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                        "image": "https://gateway.nutbox.app/ipfs/QmPe6o7zy1uP7zoVGV3X2ya5V83tzKrRksjJJsvL9Vupiz"
                                        },
                                        {
                                        "name": "Mferc Community Member",
                                        "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                        "image": "https://gateway.nutbox.app/ipfs/Qmbp51U4kCPvFhKQfDHcZy1qzReo7RLkhtoZ4ARnA1M3Yr"
                                        },
                                        {
                                        "name": "Mferc Community Member",
                                        "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                        "image": "https://gateway.nutbox.app/ipfs/QmVkuwm1cxVqSj2vQ6RR9QHWzcE1KtTJYYbHb4fCUUewiQ"
                                        },
                                        {
                                        "name": "Mferc Community Member",
                                        "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                        "image": "https://gateway.nutbox.app/ipfs/QmQ9E6uzzxKxemKrUKFa4Jueko2HrM6mtp5f5FMvjRn5qq"
                                        },
                                        {
                                        "name": "Mferc Community Member",
                                        "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                        "image": "https://gateway.nutbox.app/ipfs/QmcV3g3fi2cYU5FnnCE9x87tNb1RauAM4UUArSfoE7yeVo"
                                        },
                                        {
                                        "name": "Mferc Community Member",
                                        "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                        "image": "https://gateway.nutbox.app/ipfs/QmRagNgW2hqs2qGyHQoSa2t12rR4XDRRB5g2q6yubynS3p"
                                        },
                                        {
                                        "name": "Mferc Community Member",
                                        "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                        "image": "https://gateway.nutbox.app/ipfs/QmWFdRYrTTH5Bg9NJMaDYtRGsCYJ4uhChH2WE8AVoj4i59"
                                        },
                                        {
                                        "name": "Mferc Community Member",
                                        "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                        "image": "https://gateway.nutbox.app/ipfs/QmQ8qZMN2HMagwQ5FAnZG75pnW4JP9jqtGtq1rMSwdz47j"
                                        },
                                        {
                                        "name": "Mferc Community Member",
                                        "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                        "image": "https://gateway.nutbox.app/ipfs/Qmb4wjVfweXmPw6s9vdRCXFSAiVDaJydxvM6jP1Mq5UBD8"
                                        },
                                        {
                                            "name": "Mferc Community Member",
                                            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                            "image": "https://gateway.nutbox.app/ipfs/Qme1gbS4MfNjKPianYpfmJn2sb2r7Zz7NMXkBZC8igeDwL"
                                            },
                                            {
                                            "name": "Mferc Community Member",
                                            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                            "image": "https://gateway.nutbox.app/ipfs/QmSxzrAvF1HNKWAnhGasWSniaYvbs7WKiiHrsUSgKa8JTG"
                                            },
                                            {
                                            "name": "Mferc Community Member",
                                            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                            "image": "https://gateway.nutbox.app/ipfs/QmTtWNqkyztjEyUDnbdALLLoH9YHen9UG8P14DerRvoTFH"
                                            },
                                            {
                                            "name": "Mferc Community Member",
                                            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                            "image": "https://gateway.nutbox.app/ipfs/QmRZz1K6ecBK92Cw16b7qehWTyC5DiktSyMpcUQaPMxZJm"
                                            },
                                            {
                                            "name": "Mferc Community Member",
                                            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                            "image": "https://gateway.nutbox.app/ipfs/QmVCrEiCoHsEBDU7uui5aU1bq4dJiqjNetq6fwcX1ters1"
                                            },
                                            {
                                            "name": "Mferc Community Member",
                                            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                            "image": "https://gateway.nutbox.app/ipfs/QmYMwP9sTNY9XVEC6whcxXLTJ1BahnQYFnNbGuKyxL3CZt"
                                            },
                                            {
                                            "name": "Mferc Community Member",
                                            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                            "image": "https://gateway.nutbox.app/ipfs/QmQNeVwqiXL3biZcb1pFVRxBBwYcnouyUzvQDGDAwSL3Et"
                                            },
                                            {
                                            "name": "Mferc Community Member",
                                            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                            "image": "https://gateway.nutbox.app/ipfs/QmcVCrfyVgRTemjXMPGxg4GNwzWW8T9dtcHEiuxojHVafy"
                                            },
                                            {
                                            "name": "Mferc Community Member",
                                            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                            "image": "https://gateway.nutbox.app/ipfs/Qma3z1nqjgKnf9S61NsQr8woxeTQasdToNV3zwDDjs6JE6"
                                            },
                                            {
                                            "name": "Mferc Community Member",
                                            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                            "image": "https://gateway.nutbox.app/ipfs/QmZ5Y7hm2me4NYJdTrKAvzgESSVBpzk1uuvvHpMyximsHF"
                                            },
                                            {
                                            "name": "Mferc Community Member",
                                            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                            "image": "https://gateway.nutbox.app/ipfs/Qmc54PLCjuERuuQKs96xkN49GRra8w4JdJyig29JJUbsBJ"
                                            },
                                            {
                                            "name": "Mferc Community Member",
                                            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                            "image": "https://gateway.nutbox.app/ipfs/QmUgke2CtaQoszcUWpP3kuefvarJDJMZspC2NVY6ZUMQ42"
                                            },
                                            {
                                            "name": "Mferc Community Member",
                                            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                            "image": "https://gateway.nutbox.app/ipfs/QmVuWnqjce23TVUzEPiFdr8tokCbLtR9VKdnf287f4jgeH"
                                            },
                                            {
                                            "name": "Mferc Community Member",
                                            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                            "image": "https://gateway.nutbox.app/ipfs/QmVn3hycPa6HFMhNJ8iUxhgtUXrGXYiWQnA75xCyNcFk1d"
                                            },
                                            {
                                            "name": "Mferc Community Member",
                                            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                            "image": "https://gateway.nutbox.app/ipfs/QmdJ7wtmCnrwuMZWotK6bMkkaVV3k4MgQjfA6CJ6nzAr5W"
                                            },
                                            {
                                            "name": "Mferc Community Member",
                                            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                            "image": "https://gateway.nutbox.app/ipfs/QmWiLP6e8SnpGM4iSo6sTaDkL8oGP6k5t9YGpYAQAoGaD9"
                                            },
                                            {
                                            "name": "Mferc Community Member",
                                            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                            "image": "https://gateway.nutbox.app/ipfs/QmPQ36BspTZYSP3gAV8h3XEgaK77YHVRHnwAZkk1c6Aty4"
                                            },
                                            {
                                            "name": "Mferc Community Member",
                                            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                            "image": "https://gateway.nutbox.app/ipfs/QmWY9w4PrBS85DUxFRPyYpkCvhccajYtYpUHYxedEGZdWD"
                                            },
                                            {
                                            "name": "Mferc Community Member",
                                            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                            "image": "https://gateway.nutbox.app/ipfs/QmSbZxe9rjegyR3BDjHXKL7nuDYLfykcdR8dK1Zv63GgSB"
                                            },
                                            {
                                            "name": "Mferc Community Member",
                                            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                            "image": "https://gateway.nutbox.app/ipfs/QmNzZ22SrW5qYYmzzauHmhtk8x5rcPnWsggVjxgsWoQvJV"
                                            },
                                            {
                                            "name": "Mferc Community Member",
                                            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                            "image": "https://gateway.nutbox.app/ipfs/QmbfH3sg4M7XNRZaKVTYC7euUko1SUfUjSKmse7hKCXpoP"
                                            },
                                            {
                                            "name": "Mferc Community Member",
                                            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                            "image": "https://gateway.nutbox.app/ipfs/QmU3vQW69TWAdTHNuXtXea62C2NeRvafFZGvBSDdps5bjw"
                                            },
                                            {
                                            "name": "Mferc Community Member",
                                            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                            "image": "https://gateway.nutbox.app/ipfs/QmQUPdoGCiyHTG2zAwHwzddncNeEShc8RSDv4HqhMeErxb"
                                            },
                                            {
                                            "name": "Mferc Community Member",
                                            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                            "image": "https://gateway.nutbox.app/ipfs/QmT2pTJ9nrbftBt5aB7TsbhVfzBQD99gcDwXw8qbSJmcK1"
                                            },
                                            {
                                            "name": "Mferc Community Member",
                                            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                            "image": "https://gateway.nutbox.app/ipfs/QmQezrJJQTmWRBLVherBSYrWYLTk6HTUYPU8H2KCWRAL6B"
                                            },
                                            {
                                            "name": "Mferc Community Member",
                                            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                            "image": "https://gateway.nutbox.app/ipfs/QmcxJ8AiHxURe8yH2FYHquiTT6jU656TDaxzJhuuA6P3sX"
                                            },
                                            {
                                            "name": "Mferc Community Member",
                                            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                            "image": "https://gateway.nutbox.app/ipfs/QmYah2mjmYCAibwp5VangUxwL2QddLMwkgDAZ5Rtx1XGMF"
                                            },
                                            {
                                            "name": "Mferc Community Member",
                                            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                            "image": "https://gateway.nutbox.app/ipfs/QmehwDbutjFhcZcDr6NSmwRnUexxbqVr1NgVJFxRcquK3p"
                                            },
                                            {
                                            "name": "Mferc Community Member",
                                            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                            "image": "https://gateway.nutbox.app/ipfs/QmeyquygAGeftHpkThHyobKj59GxMcTQsmboR779zhJhzo"
                                            },
                                            {
                                            "name": "Mferc Community Member",
                                            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                            "image": "https://gateway.nutbox.app/ipfs/QmWmPYJZeMRGuGwh57QCRqMzPCdXE23ysdWo9UaByG1fsu"
                                            },
                                            {
                                            "name": "Mferc Community Member",
                                            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                            "image": "https://gateway.nutbox.app/ipfs/QmUN3fbQD7Qu5Lom8p8xdmDRoe9h8tDbxb5wGofhsy3R3h"
                                            },
                                            {
                                            "name": "Mferc Community Member",
                                            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                            "image": "https://gateway.nutbox.app/ipfs/QmbHzHwELsHPzPTTU76UEFqgBxRfD3JmsYkqphr4vhbjMF"
                                            },
                                            {
                                            "name": "Mferc Community Member",
                                            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                            "image": "https://gateway.nutbox.app/ipfs/QmRBVwzTEc7a33LgGNF1j4ZCdw574AgMeKyMEbMEGUrbNk"
                                            },
                                            {
                                            "name": "Mferc Community Member",
                                            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                            "image": "https://gateway.nutbox.app/ipfs/QmQ22qYrC71dCyMLkWCbYU9kMogyTfxmHmU9b1Kj8o36HZ"
                                            },
                                            {
                                            "name": "Mferc Community Member",
                                            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                            "image": "https://gateway.nutbox.app/ipfs/QmeERHTMYrQf2Weahz8Ybxjuh2Jw3JDk3wQ3yJhmAV878s"
                                            },
                                            {
                                            "name": "Mferc Community Member",
                                            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                            "image": "https://gateway.nutbox.app/ipfs/QmZWiKD78kQSX5ZGZ5Tw18maEHftHwNSLkT9r4H98XHQgq"
                                            },
                                            {
                                            "name": "Mferc Community Member",
                                            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                            "image": "https://gateway.nutbox.app/ipfs/QmcstUchui7jFjThoMtUxRzjvFoUhhh66JQtF9VYwLjGDR"
                                            },
                                            {
                                            "name": "Mferc Community Member",
                                            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                            "image": "https://gateway.nutbox.app/ipfs/QmXkenLfDdyDnuvJxJHimVvuvZ4HfBDkfETa3JjYogYtb4"
                                            },
                                            {
                                            "name": "Mferc Community Member",
                                            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                            "image": "https://gateway.nutbox.app/ipfs/QmYQErbdYanky13nM7L8ZLJKELvJMUni3BVhD41DCwv6uP"
                                            },
                                            {
                                            "name": "Mferc Community Member",
                                            "description": "MCM(Mferc Community Member) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 6666.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nNo whitelist required, anyone can mint directly.\\nCategory PFPs.",
                                            "image": "https://gateway.nutbox.app/ipfs/QmWFxN5VFSueXdJFJc88pNGduNxUjG3SiDa94ETmcjA164"
                                            },
        
    ];
    
    let i = 1;
    for (let item of json) {
        console.log(i)
        item.name = item.name + ' #' + i
        fs.writeFileSync('./nfts/golden/' + i, JSON.stringify(item), { encoding: "utf-8" });
        i++;
    }
}

main().catch(console.error).finally(() => {
    process.exit()
});