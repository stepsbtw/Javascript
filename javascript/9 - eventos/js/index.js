function passandoMouse(){
    let div = document.getElementById("divisoria");
    div.style.backgroundColor = "red";
    
}

function tirandoMouse(){
    let div = document.getElementById("divisoria");
    div.style.backgroundColor = "blue";
}

function clicando(){
    document.getElementById("texto").append("\n NAO ME SEGURA.")
}

function desclicando(){
    document.getElementById("texto").innerHTML = ""
}

function foco(){
    document.getElementById("texto").append("quem mando tu mexe nisso.")
}

function escrevendo(){
    document.getElementById("texto").innerHTML = "pare agora oq vc esta fazendo."
}

function mudando(){
    document.getElementById("insert").value = "PARA CARA."
}