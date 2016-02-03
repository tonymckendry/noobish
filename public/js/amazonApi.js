var aws = require('aws-lib');
var prodAdv = aws.createProdAdvClient('AKIAJVTAUXOMIYDSV6JQ', 'YcCjk/BzE+r7/8xodhbSav7DaINQ25ltjQekeZcT', 'noobish-20');

//Gets item info using the ASIN code.
function fetchASIN(itemCode){
  var product = {IdType: 'ASIN', ItemId: itemCode, ResponseGroup: 'ItemAttributes'}
  prodAdv.call("ItemLookup", product, function(err, results) {
    var productName = results["Items"]["Item"]["ItemAttributes"]["Title"]
    var productUrl = results["Items"]["Item"]["DetailPageURL"]

  var prices = {IdType: 'ASIN', ItemId: itemCode, ResponseGroup: 'Offers'}
  prodAdv.call("ItemLookup", prices, function(err, results) {
    var lowNewPrice = results["Items"]["Item"]["OfferSummary"]["LowestNewPrice"]["FormattedPrice"]

  var pics = {IdType: 'ASIN', ItemId: itemCode, ResponseGroup: 'Images'}
  prodAdv.call("ItemLookup", pics, function(err, image) {
    var medImage = image["Items"]["Item"]["MediumImage"]["URL"]
      console.log(productName);
      console.log('Lowest New Price = ' + lowNewPrice);
      console.log(medImage);
      console.log(productUrl);
      })
    })
  })
}

//Gets item info using product description
function fetchItem(itemSearch){
var options = {SearchIndex: "All", Keywords: itemSearch}

prodAdv.call("ItemSearch", options, function(err, result) {
  var product = [
    result["Items"]["Item"][0]["ASIN"],
    result["Items"]["Item"][0]["ItemAttributes"]["Title"],
    result["Items"]["Item"][1]["DetailPageURL"]
  ]

  var prices = {IdType: 'ASIN', ItemId: product[0], ResponseGroup: 'Offers'}
 prodAdv.call("ItemLookup", prices, function(err, results) {
   var lowNewPrice = results["Items"]["Item"]["OfferSummary"]["LowestNewPrice"]["FormattedPrice"]

   var pics = {IdType: 'ASIN', ItemId: product[0], ResponseGroup: 'Images'}
 prodAdv.call("ItemLookup", pics, function(err, image) {
   var medImage = image["Items"]["Item"]["MediumImage"]["URL"]
     console.log(product[1]);
     console.log('Lowest New Price = ' + lowNewPrice);
     console.log(medImage);
     console.log(product[2]);
     })
   })
 })
}

fetchASIN('B005BZNDOO');
fetchASIN('B00ZUPOMDQ');
fetchASIN('B00MYTSDU4');
fetchASIN('B00OAJ412U');

// fetchItem('EVGA GeForce GTX 980 4GB SC GAMING, Silent Cooling Graphics Card 04G-P4-1982-KR')
// fetchItem('Samsung 850 EVO 250GB 2.5-Inch SATA III Internal SSD (MZ-75E250B/AM)')
// fetchItem('Asus VS228H-P/VS228 21.5-Inches Led Backlight Widescreen Computer Monitor')
// fetchItem('ASUS ROG MAXIMUS VIII GENE LGA1151 DDR4 M.2 SATA 6Gb/s USB3.1 Type A Type C Intel Z170 mATX Motherboard')
