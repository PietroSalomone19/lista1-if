/*
3 – Converta a temperatura x (entrada manual) CELSIUS para FAHRENHEIT,
 Segue a formula (°C × 9/5) + 32.
nome: pietro salomone
*/
var teclado = require("prompt-sync")();
var celsius = parseFloat(teclado("digite um numero"));
var fahrenheit = (celsius * (9 / 5)) + 32;
console.log("o valor da convers\u00E3o \u00E9: " + fahrenheit);
