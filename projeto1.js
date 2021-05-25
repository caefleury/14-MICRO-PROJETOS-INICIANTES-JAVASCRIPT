//Trocando Valores de Variáveis
let a = "vermelho"
let b = "azul"

function trocaValores(x,y){
    var c = x
    if ( x !== y){
        x = y 
        y = c
        return console.log(`a = '${x}', b = '${y}' `)
    } else {
        return console.log("Valores são iguais")
    }
}

trocaValores(a,b)