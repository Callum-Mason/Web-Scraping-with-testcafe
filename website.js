import { Selector } from 'testcafe';
import { GetURL, GetLength } from './URL';
const fs = require("fs");
var Length = GetLength()
for (let i = 0; i < 12; i++) {
    var URL = GetURL()

    fixture `Getting Started`
        .page `${URL}`;

    test('My first test', async t => {
        await t
        try {
            const productname = await Selector('.c-product-detail__product-name').innerText;
            const price = await Selector('.c-product-detail-infos__price-total').innerText;
            // console.log('Product Name: ' + productname + '\nPrice: ' + price)

            fs.readFile('./data.json', 'utf-8', function(err, data) {
                if (err) throw err

                var arrayOfObjects = JSON.parse(data)
                arrayOfObjects.data.push({
                    URL: URL,
                    ProductName: productname,
                    Price: price
                })

                // console.log(arrayOfObjects)

                fs.writeFile('./data.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
                    if (err) throw err
                    console.log('Done!')
                })
            })


            // console.log(URL[i])
        } catch {
            try {
                const productname = await Selector('.c-product-detail__product-name').innerText;
                const avalability = await Selector('.c-delivery-state__state').innerText;
                // console.log('Product Name: ' + productname + '\nPrice: ' + price)

                fs.readFile('./data.json', 'utf-8', function(err, data) {
                    if (err) throw err

                    var arrayOfObjects = JSON.parse(data)
                    arrayOfObjects.data.push({
                        URL: URL,
                        ProductName: productname,
                        Price: avalability
                    })

                    // console.log(arrayOfObjects)

                    fs.writeFile('./data.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
                        if (err) throw err
                        console.log('Done!')
                    })
                })


                // console.log(URL[i])
            } catch {

                fs.readFile('./data.json', 'utf-8', function(err, data) {
                    if (err) throw err

                    var arrayOfObjects = JSON.parse(data)
                    arrayOfObjects.data.push({
                        URL: URL,
                        ProductName: "Cant Find Product Name",
                        Price: "Cant Find Price"
                    })

                    // console.log(arrayOfObjects)

                    fs.writeFile('./data.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
                        if (err) throw err
                        console.log('Done!')
                    })
                })

            }
        }

    })
};