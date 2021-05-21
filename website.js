import {
    Selector,
    ClientFunction
} from 'testcafe';
import {
    GetObject
} from './URL';
const fs = require("fs");


for (let i = 0; i < 3; i++) {
    let object = GetObject();
    var URL = object.URLTOCHECK
    fixture `Getting Started`
        .page `${URL}`;

    test('My first test', async t => {
        await t

        var ProductNameElement = object.ProductNameElement
        var PriceElement = object.PriceElement
        var AvalabilityElement = object.AvalabilityElement
        var CurrentURL = ClientFunction(() => window.location.href);
        var CurrentURL = await CurrentURL();
        try {
            var productname = await Selector(`${ProductNameElement}`).innerText;
        } catch {
            var productname = "Cant find Product Name"
            console.log(ProductNameElement)
        }
        try {
            var price = await Selector(`${PriceElement}`).innerText;
        } catch {
            var price = "Cant find Price"
            console.log(PriceElement)
        }
        try {
            var avalability = await Selector(`${AvalabilityElement}`).innerText;
        } catch {
            var avalability = "Cant find Avalability"
            console.log(AvalabilityElement)
        }

        fs.readFile('./data.json', 'utf-8', function (err, data) {
            if (err) throw err

            var arrayOfObjects = JSON.parse(data)
            arrayOfObjects.data.push({
                URL: CurrentURL,
                ProductName: productname,
                Price: price,
                Avalability: avalability
            })
            fs.writeFile('./data.json', JSON.stringify(arrayOfObjects), 'utf-8', function (err) {
                if (err) throw err
                console.log('Done!')
            })
        })

    })
};