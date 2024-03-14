let teclado = require (`prompt-sync`)();

let nUm: number = parseFloat(teclado(`digite o primeiro número`));
let nDois: number = parseFloat(teclado(`digite o segundo número`));
let nTres: number = parseFloat(teclado(`digite o terceiro número`));5
let nQuatro: number = parseFloat(teclado(`digite o quarto número`));
let nCinco: number = parseFloat(teclado(`digite o quinto número`));
let nSeis: number = parseFloat(teclado(`digite o sexto número`));
let nSete: number = parseFloat(teclado(`digite o setimo número`));
let nOito: number = parseFloat(teclado(`digite o oitavo número`));
let nNove: number = parseFloat(teclado(`digite o nono número`));
let nDez: number = parseFloat(teclado(`digite o decimo número`));

let media: number =(nUm+nDois+nQuatro+nCinco+nSeis+nSete+nOito+nNove+nDez)

console.log(`Média é ${media}`);