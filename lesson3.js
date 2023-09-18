//import local module
var converter = require("./MyModule1");
var rupees = 1000;
var dollar = converter.toDollar(rupees)
console.log(dollar);
var pound = converter.toPound(rupees)
console.log(pound);
var yen = converter.toYen(rupees)
console.log(yen);
