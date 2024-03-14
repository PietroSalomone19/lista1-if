/*
converta a temperatura x (entrada manual) FAHRENHEIT
para CELSIUS, segue a formula 5/9 ( F - 32).

nome:Pietro A Salomone
*/

let teclado = require (`prompt-sync`)();

let fahrenheit: number = parseFloat(teclado(`digite um numero`));

let celsius: number = (5/9) * (fahrenheit - 32);

console.log (`o valor da conversão é: ${celsius}`);