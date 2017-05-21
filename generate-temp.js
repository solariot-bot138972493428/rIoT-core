const fs = require("fs");
var CoinKey = require('coinkey');

function createNewWaller() {
var ck = new CoinKey.createRandom()

console.log("Private Key (Wallet Import Format): " + ck.privateWif)
console.log("Private Key (Hex): " + ck.privateKey.toString('hex'))
console.log("Address: " + ck.publicAddress)
//set config file
}

function inportWalletWif(wifImportW) {
    var ckw = CoinKey.fromWif(wifImportW)
    console.log("Address: " + ck.publicAddress)
    //set config file
}

function inportWalletPrivate(wifImportP) {
    var buffer = new Buffer('wifiImportP', 'hex')
    var ckp = new CoinKey(buffer)

  console.log("Private Key (Wallet Import Format): " + ck.privateWif)
  console.log("Private Key (Hex): " + ck.privateKey.toString('hex'))
  console.log("Address: " + ck.publicAddress)
  //set config file
}
//valid types are private / wif / blank
function generateFile(fileName, type, key) {
  var generationSave = {"type":"notdeclared", ""};
    if(type == wif)
    {

    }
    else if(type == wif)
    {

    }
    else if(type == blank)
    {

    }
}
