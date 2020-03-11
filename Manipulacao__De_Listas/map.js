const service = require('./index');

Array.prototype.meuMap = function (callback) {
    const novoArrayMapeado = [];
    for(let indice = 0; indice <= this.length -1; indice++) {
        const resultado = callback(this[indice], indice);
        novoArrayMapeado.push(resultado);
    }

    return novoArrayMapeado;
}

async function main() {
    try {
        const result = await service.obterPessoas('a');
        //const names = [];
        // result.results.forEach(element => {
        //     names.push(element.name);
        // });

        // const names = result.results.map( item => {
        //     return item.name;
        // })

        // const names = result.results.map(item => item.name);
        const names = result.results.meuMap( (item, indice) => {
            return `[${indice}]${item.name}`;
        });


        console.log(names);
    } catch(error) {
        console.error(error)
    }
}

main();