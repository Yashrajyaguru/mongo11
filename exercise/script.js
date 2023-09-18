const fs =require('fs');

const reading=fs.readFileSync('./home.txt','utf-8');
console.log(reading);