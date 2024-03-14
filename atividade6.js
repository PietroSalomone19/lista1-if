var teclado = require("prompt-sync")();
var idade = 0;
var salario = 0;
var totPessoasNaCondicao = 0;
var pessoasContabilizadas = 1;
while (pessoasContabilizadas <= 4) {
    idade = parseInt(teclado("digite a idade do funcionario"));
    salario = parseFloat(teclado("digite o salario do funcionario"));
    console.log("");
    if (idade < 30 && salario > 3000) {
        totPessoasNaCondicao++;
        pessoasContabilizadas++;
    }
    else {
        pessoasContabilizadas++;
    }
}
