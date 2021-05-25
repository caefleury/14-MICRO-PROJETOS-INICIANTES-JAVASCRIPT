    //verificar Velocidade
    // Velocidade Máxima de 75km
    // a cada 5km acima do limite voce ganha 1 ponto
    //Math.floor()

function verificarVelocidade(velocidade){
    var pontos = 0
    if( velocidade > 75){
        pontos = Math.floor( (velocidade - 75) / 5 )
        if(pontos > 12 ){
            return "carteira suspensa"
        }
        return `${pontos} pontos`
    } else { 
        return 'Velocidade OK'
    }
}

console.log(verificarVelocidade(20))