const { obterPessoas } = require('./index');


Array.prototype.meuFilter = function (callback) {
    const lista = [];
    for (index in this) {
        const item = this[index];
        const resultado = callback(item, index, this);
        if (!resultado) continue;
        lista.push(item);
    }

    return lista;
}

async function main() {
    try {
        const { results } = await obterPessoas('a');
        // const familiaLars = results.filter( (item) => {
        //false = remove da lista
        //true = mantem
        // const result = item.name.toLowerCase().indexOf('lars') !== -1;
        const familiaLars = results.meuFilter( (item,index,lista) => {
            return item.name.toLowerCase().indexOf('lars') !== -1;
        })
        const names = familiaLars.map((pessoa) => pessoa.name);
       console.log(names);
} catch (error) {
    console.log(error);
}

}

main();