const teclado = require (`prompt-sync`)();

let divisor: number = 2;
let dividendo: number = parseFloat(teclado(`Digite o número:`));
let resto: number = 0;

resto = dividendo % divisor;

if (resto == 0){
    console.log(`Número digitado ${dividendo} é par!`);
}
else if (resto == 1){
    console.log(`Número digitado ${dividendo} é impar !!`);
}
else{
    console.log(`Algo deu errado!!`);
}