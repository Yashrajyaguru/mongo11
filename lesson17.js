var fs = require("fs");
var filename = "grains.txt";
var filecontent = " Sorghum Lentils Chikpeas Pearl Millet Amaranth";
fs.appendFileSync(filename,filecontent);
console.log('file has been create/updated successfuly');