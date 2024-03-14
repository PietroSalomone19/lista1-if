var teclado = require("prompt-sync")(); // declaração teclado
/*para receber os dados do teclado é necessario instalar
 os pacotes riquere e prompt sync
 */
var idade = parseFloat(teclado("16"));
if (idade >= 18) {
    console.log("maior de idade!!");
}
else {
    console.log("menor de idade");
}
