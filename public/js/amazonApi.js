var aws = require("aws-lib");
var prodAdv = aws.createProdAdvClient('AKIAJVTAUXOMIYDSV6JQ', 'YcCjk/BzE+r7/8xodhbSav7DaINQ25ltjQekeZcT', 'noobish-20');

var options = {SearchIndex: "Video", Keywords: "Harry Potter - The Complete 8-Film Collection"}

prodAdv.call("ItemSearch", options, function(err, result) {
  var product = [result["Items"]["Item"][0]["ASIN"], result["Items"]["Item"][0]["ItemAttributes"]["Title"]]
  var prices = {IdType: 'ASIN', ItemId: product[0], ResponseGroup: 'Offers'}

prodAdv.call("ItemLookup", prices, function(err, results) {
  var lowNewPrice = results["Items"]["Item"]["OfferSummary"]["LowestNewPrice"]["FormattedPrice"]
  console.log(product[1], lowNewPrice);
  })
})
