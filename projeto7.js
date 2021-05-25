/*Criar função soma que retorna a  
  soma de todos os multiplos de 3 e 5*/

var input = parseInt(process.argv[2]);
var soma = 0

function sum(limit){
    for (i = 0; i <= limit;i++){
        if (i % 3 == 0){            // inclui 3 e 5 (15)
            soma += i
            continue
        }
        if (i % 5 == 0){
            soma += i
            continue
        }
    }
}

sum(input)
console.log(soma)