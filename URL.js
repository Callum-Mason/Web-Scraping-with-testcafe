var fs = require("fs");
var text = fs.readFileSync("URL.txt").toString('utf-8');
URL = text.split("\r\n")

function GetURL() {
    // CreateArray()

    var URLTOCHECK = URL[0]

    URL.shift();
    // console.log(URLTOCHECK)

    return URLTOCHECK;
}

function GetLength() {
    var URLLENGTH = URL.length;
    console.log(URLLENGTH);
    return URLLENGTH;
}

export { GetURL, GetLength };