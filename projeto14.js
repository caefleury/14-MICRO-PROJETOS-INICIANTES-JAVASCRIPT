// Faixa de Preço (Exercício)

/*
é que você crie um array de objetos de faixa de preço para que
ela possa ser usado em um site igual o mercado livre
*/
// faixas,tooltip, minimo, maximo
// tootlip = o que aparece para o usuario

function FaixaPreco(tooltip,minimo,maximo){
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}

let produto = [
    new FaixaPreco('até 500',0,499),
    new FaixaPreco('de 500 - 1000',500,999),
    new FaixaPreco('de 1000 - 5000',1000,5000)
]

console.log(produto)