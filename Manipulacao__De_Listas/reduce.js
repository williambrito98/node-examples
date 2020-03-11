const {obterPessoas} = require('./index');

Array.prototype.meuReduce = function (callback, valorInicial) {
    let valorFinal = typeof  valorInicial !== undefined ? valorInicial : this[0];
    for (let index = 0; index <= this.length -1; index++){
        valorFinal = callback(valorFinal, this[index], this);
    }

    return valorFinal;
}                      


async function main() {
    try {

        const {results} = await obterPessoas('a');
        const peso = results.map(item => parseInt(item.height));
        // const total = peso.reduce((anterior, proximo) => {
        //     return anterior + proximo;
        // });

        const minhaLista =[
         ['teste', 'node',],
         ['js','php']
        
        ]

        const total = minhaLista.meuReduce( (anterior, proximo) => {
            return anterior.concat(proximo);
        }, []).join(', ') 

        console.log(total);
    } catch(error) {
        console.log(error);
    }

}

main();
