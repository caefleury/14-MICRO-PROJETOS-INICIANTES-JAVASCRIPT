/*  
     Exercício Nota Escolar
    Obter a média a partir de um array 
*/

/*
    0 - 59:   F
    60 - 69:  D
    70 - 79:  C
    80 - 89:  B
    90 - 100: A
*/

const myArray = [70,80,90,50]

function mediaDoAluno(notas){
    var sum = 0
    for(grade of notas){
        sum += grade
    }
    var media = sum / notas.length

    return (media < 59) ? `A média foi de ${media} e a nota é F`
        :(media < 69) ? `A média foi de ${media} e a nota é D`
        :(media < 79) ? `A média foi de ${media} e a nota é C`
        :(media < 89) ? `A média foi de ${media} e a nota é B`
        :`A média foi de ${media} e a nota é A`
}

console.log(mediaDoAluno(myArray))