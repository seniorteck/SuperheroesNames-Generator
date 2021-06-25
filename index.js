// // console.log('hello world!!!')

// const fs = require('fs')

// fs.copyFileSync('file1.txt', 'file2.txt')

const superhereos = require("superheroes");
let mySuperheroes = superhereos.random();

console.log(mySuperheroes);

const supervillains = require("supervillains");

let mySupervillains = supervillains.random();

console.log(mySupervillains);
console.log(`the ${mySuperheroes} and the ${mySupervillains} had a tough fight` )