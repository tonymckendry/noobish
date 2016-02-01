var aws = require("aws-lib");
var prodAdv = aws.createProdAdvClient('AKIAJVTAUXOMIYDSV6JQ', 'YcCjk/BzE+r7/8xodhbSav7DaINQ25ltjQekeZcT', 'noobish-20');

var options = {SearchIndex: "Books", Keywords: "Harry Potter"}

prodAdv.call("ItemSearch", options, function(err, result) {
  console.log(JSON.stringify(result));
  // console.log(JSON.stringify(result["Items"]["Item"][0]["ItemAttributes"]["Manufacturer"]));
  // console.log(JSON.stringify(result["Items"]["Item"][0]["ItemAttributes"]["Author"]));
  // console.log(JSON.stringify(result["Items"]["Item"][0]["ItemAttributes"]["Title"]));
})
