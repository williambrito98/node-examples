const index = require('./index');

async function main() {
    try {
        const result = await index.obterPessoas('a');
        const names = [];
        // for(let i = 0; i <= result.results.length - 1; i++){
        //     const pessoa = result.results[i];
        //     names.push(pessoa.nome);
        // }          

        // for(let i in result.results){
        //     const pessoa = result.results[i];
        //     names.push(pessoa.nome);
        // }          

        // for(pessoa of result.results){
        //     names.push(pessoa.name);
        // }          

        console.log(`names`, names)
    } catch(error) {
        console.log(`error`, error);
    }
}

main();