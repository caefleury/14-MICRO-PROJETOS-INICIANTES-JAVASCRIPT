// Igualdade de Objetos (Exercício) 

function Endereço(rua,cidade,cep){
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}

const endereço1 = new Endereço(03,'Brasilia', 23456432)
const endereço2 = new Endereço(06,'Ceilandia', 30752489)

function saoIguais(endereco1,endereco2){
    let x = 0
    for (let prop1 in endereco1){
        for (let prop2 in endereco2){
            if(endereco1[prop1]=== endereco2[prop2]){
                x++
            }
        }
    }
    return (x !== 0) ? true : false 
}

console.log(saoIguais(endereço1,endereço2))

