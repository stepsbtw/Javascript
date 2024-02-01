function test(){
    alert("oieee");
}

test();

function fahrenheitCelsius(a){
    let b = (5/9) * (a - 32);
    return b;
}

x = fahrenheitCelsius(77);
alert("A temperatura é: ",x," graus celsius")