/*
converta a temperatura x (entrada manual) FAHRENHEIT
para CELSIUS, segue a formula 5/9 ( F - 32).

nome:Pietro A Salomone
*/
var teclado = require("prompt-sync")();
var fahrenheit = parseFloat(teclado("digite um numero"));
var celsius = (5 / 9) * (fahrenheit - 32);
console.log("o valor da convers\u00E3o \u00E9: " + celsius);
