// Criar uma função que exibe a quantidade de * que a linha possui
// Opcional: exibir as linhas espelhadas

function exibeAsteriscos(limit){
    var string = ""
    for(i=1; i<=limit; i++){
        string = string + "*"
        console.log(string)
    }
    var string2 = string
    for(i= limit - 1 ; i > 0; i--){
        var res = string2.split("");
        delete res[i]
        string2 = res.join("")
        console.log(string2)
    }
}

exibeAsteriscos(20)

/*
*
**
***
****
*****
******
*******
********
*********
**********
*********
********
*******
******
*****
****
***
**
*
*/