/*
3 tipos de declaracao de variavel
var
let
const
*/

/*
mas, qualquer mudanca na variavel dentro de um escopo muda ela globalmente.
"tipo passagem por referencia."
*/
var variavel = "caio";
{
    var variavel = "joao";
}
document.write(variavel);

// MESMA COISA

var variavel = "caio";
{
    variavel = "joao";
}
document.write(variavel);

/*
let variavel = "caio";
{
    let variavel = "joao";
}
document.write(variavel);
ERRADO, NAO POSSO REDECLARAR A VARIAVEL COM "LET", (DENTRO DO MESMO ESCOPO)*/ 

let variavel2 = "caio";
{
    let variavel2 = "joao";
    document.write(variavel2);
}
document.write(variavel2);

const x = 2;
// x = 3; nao funciona.
document.write(x);

