var converter = require("./MyModule8")
var bytes = 5;
var kb = converter.toKb(bytes)
console.log(kb);
var mb = converter.toMb(bytes)
console.log(mb);
var gb = converter.toGb(bytes)
console.log(gb);