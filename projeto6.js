/* Criar um método para ler propriedades de um objeto e 
   exibir somente as propriedades do tipo string que estão nesse objeto
*/
// object --> for ... in
// array --> for ... of
const movie = {
    'titulo' : 'Watchmen',
    'ano' : 2009,
    'diretor': "Zack Snyder",
    'personagem': "Comedian",
}

function exibirPropriedades(filme){
    for(prop in filme){
        if(typeof filme[prop] === 'string'){
            console.log(prop, filme[prop])
        }
    }
}

exibirPropriedades(movie);