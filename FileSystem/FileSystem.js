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
//     console.log(dir.read());
//     for await (const dirent of dir) {
//        const x =  dirent.isDirectory();
//        //console.log(x);
//     }
// }
// print('./FileSystem').catch(console.error);

//LE O CONTEUDO DE UM ARUIVO
// fs.read('./', function(error,data){
//     console.log(data);
// })


//MONITORA AS MEDIFICAÇÕES DE UM ARQUIVO
// fs.watch('./index.js', {encoding: 'buffer'}, (eventType, filename) => {
//     if(filename) {
//         console.log(eventType);
//     }
// })


// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer( (req,res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Ola mundo');
// });

// server.listen(port, hostname, ()=> {
//     console.log(`Server running as http://${hostname}:${port}`);
// })





