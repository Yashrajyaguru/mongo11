var fs = require("fs");
var filename = "grains.txt";
var filecontent = "Rice Wheat Millet Corn Barley";
fs.writeFileSync(filename,filecontent);
console.log('file has been create/updated successfuly');