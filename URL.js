var fs = require("fs");

var obj = JSON.parse(fs.readFileSync("url.json").toString('utf-8'));

function GetObject() {
    var URLTOCHECK = obj[0].URL;
    var ProductNameElement = obj[0].ProductNameElement;
    var PriceElement = obj[0].PriceElement;
    var AvalabilityElement = obj[0].AvalabilityElement;
    obj.shift();
    return {
        URLTOCHECK,
        ProductNameElement,
        PriceElement,
        AvalabilityElement
    }

}

export { GetObject };