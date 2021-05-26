// MONTADOR DE ENDEREÇO
// Javascript - Objeto Endereço
//Criar um objeto endereço que contem:
// Rua
// Cidade
// CEP
// exibirEndereco(endereço)

const endereço1 = {
    Rua: 564,
    Cidade: 'Brasília',
    Cep: 70234 + '-' + 190
}

function exibirEndereco(endereço){
    for (let x in endereço){
        console.log(x,endereço[x])
    }
}

exibirEndereco(endereço1)