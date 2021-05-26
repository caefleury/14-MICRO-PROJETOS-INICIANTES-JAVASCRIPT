// Criar função que mostra os números primos

function exibirNumerosPrimos(max){

    for(let i=2; i <= max; i++){
        var x = 0
        for(let a = 2; a < i; a++){
            if(i % a == 0)
                x++
        }
        if(x == 0){
            console.log(i)
        }
    }
}

exibirNumerosPrimos(17)