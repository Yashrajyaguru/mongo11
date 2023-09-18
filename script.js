const fs =require('fs');

const reading=fs.readFileSync('./file.txt','utf-8');
console.log(reading);