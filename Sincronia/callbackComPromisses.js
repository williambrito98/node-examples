/*
0 - Obter um usuario
1 - Obter um numero de telefone de um usuario a partir de seu ID
2 - Obter o endereco do usuario pelo ID
*/
//importamos um modulo interno do node.js
const util = require('util');
const obterEnderecoAsync = util.promisify(obterEndereco);


function obterUsuario() {
    //quando der algum probelma -> reject(ERRO)
    //quando sucess -> resolv
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(() => {
            //return reject(new Error("ERROR"));
            return resolve({
                id: 1,
                nome: "fulano",
                dataNascimento: new Date()
            })
        }, 1000);
    }) 
}

function obterTelefone(idUsuario) {
    return new Promise(function resolvePromise(resolve, reject) {    
        setTimeout(() => {
            return resolve({
                telefone: '11999999',
                ddd: 11
            }) 
        }, 2000)
    })
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'teste',
            numero: 0
        })
    }, 2000)
}

// 1 passo: adicionar a palavra async -> automaticamento ela retornara uma promise
main();
async function main() {
    try {
        console.time('medida-promise');
        const usuario =  await obterUsuario();
        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)
        ])

        const endereco = resultado[0];
        const telefone = resultado[0];

        console.log(`
            nome: ${usuario.nome},
            Telefone: (${telefone.ddd}) ${telefone.telefone},
            Endereço: ${endereco.rua}, ${endereco.numero}`)
        console.timeEnd('medida-promise');

     } catch(erro){
            console.log("ERRO", erro);
        }
    }

//const telefone = obterTelefone(usuario.id);
//para manipular o sucesso usamos O .then
//para manipular o erro usamos o .catch
// const usuarioPromisse = obterUsuario();

// usuarioPromisse
//     .then((usuario) => {
//         return obterTelefone(usuario.id)
//         .then(function resolveTelefone(result) {
//             return {
//                 usuario: {
//                     nome: usuario.nome,
//                     id: usuario.id
//                 },
//                 telefone: result
//             }
//         })
//     })
//     .then((resultado) => {
//         const endereco = obterEnderecoAsync(resultado.usuario.id)
//         return endereco.then(function resolveEndereco(result) {
//                 return {
//                     usuario: resultado.usuario,
//                     telefone: resultado.telefone,
//                     endereco: result
//             }
//         })
//     })
//     .then((resultado) => {
//     console.log(`
//     Nome: ${resultado.usuario.nome}
//     Endereço: ${resultado.endereco.rua}
//     Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}`);
//     }).catch((error) => {
//     console.log("ERROR", error);   
//     })


 
//console.log('telefone', telefone);
