//sistema de arquivos
const fs = require('fs');


//  FUNÇÃO PARA DELETAR ARQUIVO
// try{
//     fs.unlink('./index.js', (erro) => {
//         if(erro) throw erro;
//         console.log('Arquivo deletado com sucesso');
//     });
// }catch(error){
//     console.log(error);
// }

//FUNÇÃO PARA RENOMAR ARQUIVOS
// fs.rename('./teste.js', './index.js', (erro) => {
//     if (erro) throw erro;
//     fs.stat('./index.js', (erro, stats) => {
//         if (erro) throw erro;
//         console.log(`stats: ${JSON.stringify(stats)}`);
//     })
// });
//ABRIR E FECHAR ARQUIVOS 
// fs.open('./index.js', 'r', (error, fd) => {
//     if(error) throw error;
//     fs.close(fd, (error) => {
//         if(error) throw error;
//     }) 
// })

//ENCONTRAR ARQUIVO VIA URL
//fs.readFileSync(new URL('file:///C:/Users/Refere/Desktop/node/index.js'));

//MOSTRA OS ARQUIVOS  QUE ESTÃO NA PASTA
// async function print(path) {
//     const dir = await fs.promises.opendir(path);
//     for await (const dirent of dir) {
//         console.log(dirent.name);
//     }
// }
// print('./FileSystem').catch(console.error);




