/*

setTimeout(function, miliseconds)
    -> executa uma funcao, depois de esperar x milisegundos


setInterval(function, miliseconds)
    -> setTimeout que se repete.

*/

function ativarContagem(){
    document.getElementById("tempo").innerHTML = "Contando...!";
    // ativa apenas uma vez.
    tempo = setTimeout(function(){
        document.getElementById("tempo").innerHTML = "TIMEOUT!"
    },2000);

    tempo = setInterval(function(){
        let cronometro = document.getElementById("stopwatch").innerHTML;
        let soma = parseInt(cronometro) + 1;
        document.getElementById("stopwatch").innerHTML = soma;
    },1000);
}

function pararContagem(){
    clearTimeout(tempo)
    document.getElementById("tempo").innerHTML = "PARADO!"
    clearInterval(tempo)
    document.getElementById("stopwatch").innerHTML = 0
}
