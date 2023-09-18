//import local module
var converter = require("./MyModule2");
var title = require("./MyModule3");
var rupees = 1000;
var dollar = converter.toDollar(rupees)
console.log(dollar);
var yen = converter.toYen(rupees)
console.log(yen);
var pound = converter.toPound(rupees)
console.log(pound);
console.log(title);