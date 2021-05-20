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

function GetProductNameElement() {


    var ProductNameElement = ".c-product-detail__product-name"


    return ProductNameElement;
}

function GetPriceElement() {


    var PriceElement = ".c-product-detail-infos__price-total"

    return PriceElement;
}

function GetLength() {
    var URLLENGTH = URL.length;
    console.log(URLLENGTH);
    return URLLENGTH;
}

export {
    GetURL,
    GetLength,
    GetProductNameElement,
    GetPriceElement
};