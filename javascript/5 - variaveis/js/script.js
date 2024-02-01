var a,b,c;
// declara a variavel como undefined!
c = a + b;
// NaN = not a number
alert(c);

var nome = "Caio";
var sobrenome = "Passos";
var nomeCompleto = nome + " " + sobrenome;

document.getElementById("texto").innerHTML = nomeCompleto;

var idade = 19
var pessoa = nomeCompleto + " " + idade + " anos"
document.write(pessoa)

var a = 5;
var a = 4;
a =  3;
// isso passa, "var" pode redeclarar!

let a = 5;
let a = 4;
a = 3;
// isso nao. "let" nao pode ser redeclarado, mas pode ser modificado.