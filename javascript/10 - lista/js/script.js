let compras = ["cenora","batata","tomate"]
compras.push("maçã")
console.log(compras)
compras.pop()
console.log(compras)
compras.shift()
console.log(compras)
compras.unshift("banana")
console.log(compras)

// mas e o popIndex? ou remove
//delete compras[0]
// compras = [undefined,cenora,batata]

compras.splice(1,0,"morango")
console.log(compras)
compras.splice(1,2,"uva")
console.log(compras)

let lista = compras.concat([1,2,3])
console.log(lista)

lista.sort()
console.log(lista)

lista.reverse()
console.log(lista)


let numeros = [10,1,100,15,20,250,2,4,40]
numeros.sort()
console.log(numeros) // NAO DA CERTO PRECISO DE UMA FUNCAO COMPARATIVA

numeros.sort(function(a,b){return a-b})
console.log(numeros)

function maior(lista){
    return Math.max.apply(null,lista);
}
function menor(lista){
    return Math.min.apply(null,lista);
}

console.log("o maior é: ",maior(numeros))

const maior20 = numeros.filter(filtragem);

function filtragem(valor,index,lista){
    return valor > 20;
}

console.log("numeros maiores que 20: ",maior20)