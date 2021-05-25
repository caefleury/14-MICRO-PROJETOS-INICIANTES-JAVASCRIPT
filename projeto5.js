// par ou impar
//Receber uma quantidade de valores para avaliar
//Função exibe se cada valor é par ou impar
var numInput = parseInt(process.argv[2]) 

function exibirTipo(max){
    for(let i = 0; i <= max ; i++){
        if(i % 2 == 0){
            console.log(i , " PAR")
        } else {
            console.log(i , " IMPAR")
        }
    }
}

exibirTipo(numInput)