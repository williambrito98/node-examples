/*
0 - Obter um usuario
1 - Obter um numero de telefone de um usuario a partir de seu ID
2 - Obter o endereco do usuario pelo ID
*/


function obterUsuario(callback) {
    setTimeout(() => {
        return callback(null, {
            id: 1,
            nome: "fulano",
            dataNascimento: new Date()
        })
    }, 1000);
}

function obterTelefone(callback) {
    setTimeout(() => {
        return callback(null, {
            telefone: '11999999',
            ddd: 11
        }) 
    }, 2000)
}

function obterEndereco(callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'teste',
            numero: 0
        })
    })
}

function resolverUsuario(error, usuario) {
    if(error){
        console.log("ERRO NO USUARIO");
    } else {
        console.log("SUCESSO");
    }
}


function resolverTelefone(error, telefone) {
    if(error){
        console.log("ERRO NO TELEFONE");
    } else {
        console.log("SUCESSO");
    }
}

function resolverEndereco(error, obterEndereco) {
    if(error){
        console.log("ERRO NO ENDERECO")
    } else {
        console.log(`SUCESSO`);
    }
}
//const telefone = obterTelefone(usuario.id);
obterUsuario(resolverUsuario);
obterTelefone(resolverTelefone);
obterEndereco(resolverEndereco);
//console.log('telefone', telefone);
