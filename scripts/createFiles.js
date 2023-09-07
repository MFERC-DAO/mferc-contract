const fs = require('fs');

async function main() {
    let json = [
        {
            "name": "bb",
            "description": "black bee",
            "image": "https://gateway.nutbox.app/ipfs/QmUmtmWWjiNuADBj1sEPPV4VdnxsFrU65GVsQMRGoRyMoL"
            },
            {
            "name": "bb",
            "description": "black bee",
            "image": "https://gateway.nutbox.app/ipfs/QmVQ3taDSbr6AyMSGZvB2CvYQLraJ6XmfkpiteWjW5eaMS"
            },
            {
            "name": "bb",
            "description": "black bee",
            "image": "https://gateway.nutbox.app/ipfs/Qmb8WBGNJ4VBp8Pe5TGrnesFxq3jTAKAhMFBiBzhpCWesF"
            }
    ];
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