const fs = require('fs');

async function main() {
    let json = [
        {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmWtBnfbXkwMKe5zs4i89fTthvKeNRzFXpn6eTmfnqczR8"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmfXsaZm8Pw3BapzUTAFzqgknW7YbC8ueBNL5kdyF624WT"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmaNN8bey5dqUwBNecZTinNSiFZrP1TSENJQfYUvrbESBa"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmZirPdC7Tfmonngg1ok3p3urrwpScLVPTVRFhqxmRhGUq"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmTZnK3EwCFUezseL6T9DjudKi3YUFehfGC9YDzp18iC4E"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmZdEWokHmAEsU3ypzvRTuEKut6cR1qYCTdjAGeadsb5vd"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/Qmds3qZVU8bLgDGeC7jAnooLtCL219afaVz3bXaFEW7CA8"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmWLHnWSv9yqypZPfxr3TDcsBpzKBVvKiJmNoZvyvrNFkB"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmQtyBNe9VRTaqH9p9fpvuYFhJC2Z2Q1WpXptnFbwAuHvq"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmQCysk9A2hwodTEPXQHAorx49neizJBw1n5qkHmezECRu"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmRYUGzaCkoEwSkANYHdwa8JgxtX5hgkiw18maaaeqDepc"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmRLahLZBxivzRJcqBgbi6D7st1FdVtHL7GksgE8WaHEeU"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmWBLC21t9Gn4yQ3RhAtAJCn57JnuSFZuozEkcb6gzrAa4"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmVWWBSQEyx47cU84aHDU6J4B3nLpzXi7SChStETdy5WxC"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/Qma6nsACB4619n2c8XCNmHmJikkAvKoPRLt34XGbWm8TRY"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmRV8yERQTC9Lkv3cCD8TJitwoGmZ1rL7wPvDRP89Gpw7X"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmZeYeXwPZahHrnBsiUGT4V1zzEJPDUSC5VMxJJAYG7Xgf"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmUDZMLqXqp6r9CJTaTjMChqpeZetcybBuQGY3nP5TseFJ"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmUiX9wyPbLcqbiNYvbfY3vQ3iw1CZRePemgZ5gbVzkiF2"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmevRKVmvaJTHARUVF2VjCGtqEMwQ4U7tiCNNM3UUHcRDh"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmVAn9wpAKwraJ7T2Kz9ympAS3Bd4kQKNzqxb2LpamNq52"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmVz8Qi8vpg7VYa7KTPQirS5Zd3comtTCnBMXwSayN6bWR"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmRAe1rsmAh9CYT3CY2n7XRXRX98TqMoXLDio8XCDbiXjB"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmQjVQeFK3MQxZkpK7Mnu21MhbekM4cspd4J5r7axxfMza"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/Qma1oFWD4wtVXEuPTH7DVER6zhYT899neNgHM93BiyinoL"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmUpmrZcidVcD7LUFX8DftnEzc5czEcYeEbnRV2E4BnFM9"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmZyjcuZWD8CTTZmbiJ6tTXn2yTEGVhimrdbg9ZNf35ZJY"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmRBLKtPzHyuSD2rTX4gj9RPsT9GAcBuvUQgZZUVy9xbNF"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmUX4DWvBFf8opfdM1x3s2YHBcWVeZLcR8VrFoPiakrCT4"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmTLk2WAQQ6fJoURGeZTFcttu9xiTJbDdDyt2ZHKKK2eWx"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmU9ihAjCou7xDDbAwvkGpvVeU9w6zfcjDfiChbu9PHmU7"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmfCHHrXCdQKofxDAf91XyrsBHzRnvNK2pda21V5Xu8b2w"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmZHoMMmCPg86eCBqBaQSsVyknB4Yty72f3eHgefFrAnSe"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmVoHsfmSg7VwgWpKGSBAP76PrTqCQEWcY5SCDFpJNUv3i"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmWVVce16aemqKDLnPr4UktdMsWoWRYxWfRi8Ue7FPXYdj"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmVQ8FKuoByMppcAXkeM2vGfeWPhhaks9CjZRdn25qDs6m"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmTCHw5k75Cz9ey8jgUdeznwhsJwkDK5puoH7msMUoTkiq"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmQBm83pbnaf5DxLKp4TuqWiE7SvJJM4Ca1pCY7WF5oDRU"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmcHVR25m9QTAAZ1LXKda9WKTyiqEynk8dwPiunu3mNDQq"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmPdnuvDNtgyHvAKqR2eMX91bYP61fhNUaARaobmFo5nLk"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmUk23SmKVojQrdpyJDVFuyMj2PDW4Y93uELX6NJMf9Uac"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmQJZsxUkRKmMQL1VpyS3jknuc7cHHmYWBBFE7RFJ4fNVJ"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmZvh4MNwqjeUQwrrfaNrzaWA6n3eTESGfDL9ytvh2Jiab"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmR3qmFG3xH6iPXBPuHdwGAN7ByFUHfV5KcwmJZk6kGccr"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmfJ1my8ka6jZnDQmzn5u86PvM81HQKxSRFwK2zr4ydTVd"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmW7bLF3BaweASu9dinMY1oFDnXqgWpA8cgDoWfSSao7f8"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmUhj5mkpQY8zD6DB31U5d7YKMFvoT9vgYxi9cnFHMjNr2"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmPpzGgVmoVeCoetoRSQpR4ButcrXUcP6DcWCCZPvNBrj9"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmYnzUe4DKvz6R7SBSBuaBLFBdw4qeJ2cKvK8ryS1d8bdZ"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmVj5vuA3yawhWRotZyyge67fSTui4zp1Hi7Q9pGzGzFTd"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmSYCXA5zKZ6s5uZsCJkty2qxmRK2ZVQkCZabByJaW1t5U"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmPasvsiaBJpG4E5qtAW6bhKXsp1TUKnhEfb2xTyNfH14w"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmTAEjXXBiScwuY7oPWm4GLBNWBXCXg9xgu5V7HayTcsW1"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmPcqtFg4KiUGZGgbYCUaFyzLP3hCvFpTEbk86FjmSwWDV"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmS3VVuENB5dsDn6LtfjQzvMjqSR7t8TTuB433kR9KAbim"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmUrCeUGJssmqhXSVL1hGBGoVFT564sB9SBB2Eq1D5VUHp"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmZRtRifa3EBf6h6gX9JFbNe9uD3dBub8VjJXgsuJRgq3Z"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmUA2X2GKdG1XVkiDjR8LTkmtvnKuthmRbyBgxaeoSBMwi"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmPV8Hp3Ri8965GPLLuHL4htPtgu5p6JXegzAenQrwZQJ4"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmV22bm9XJQvyyjyLXSRS3UNNErycUfCCgA3hkchFF2qei"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmZz72FPRddhbKDPwJcJjmVybChEcdyzPKKsqpdUHJ5kdE"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmWmPhBfvwW1eQkRB7p96xZF7u8PW1H76kxxae9PdXHLdN"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmPVVMsXA3giiGsrmC8urZ6rYDv2fWrbMyye27dNC5iYSb"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmTJntXVn3Jy9a8hWcb7gYqSouZ9pzxuNBeQJ88AVd5KVC"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmWyDJydwQ89FphjgpZj5X4f1N8RSVgj1rscKZyUsJy3mr"
            },
            {
            "name": "Mferc Community OG",
            "description": "MCO(Mferc Community OG) is a functional NFT based on the ERC-721 protocol issued by Mferc Community.\\n The total number of NFTs for sale is 66.\\nNFT holders will have the corresponding features and benefits with Mferc Community.\\nWhitelisting is required to mint.\\nCategory PFPs.",
            "image": "https://gateway.nutbox.app/ipfs/QmZTJeut8QG9NgbpHEdkKxMjqgQxc1XAvwJ8TxBqLH8Dvm"
            }
    ];

    console.log(json.map(j => j.image.split('/')[4]))

    let i = 1;
    for (let item of json) {
        console.log(i)
        item.name = item.name + ' #' + i
        fs.writeFileSync('./nfts/black/' + i, JSON.stringify(item), { encoding: "utf-8" });
        i++;
    }
}

main().catch(console.error).finally(() => {
    process.exit()
});