const carro = {
    marca:"Fiat",
    modelo:"Uno",
    cor:"Branco",
    buzina: function(){
        alert("BIBIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII");
    },
    farol: function(){
        alert("LUZ!");
    },
    info: function(){
        document.getElementById("info").innerHTML =
        "A marca é: "+this.marca+" e o modelo é: "+this.modelo+" e a cor é: "+this.cor;
    }
};

// variavel com chaves = OBJETO!