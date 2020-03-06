const EventEmitter = require('events');
class MeuEmissor extends EventEmitter {

}

const meuEmissor = new MeuEmissor();
const nomeEvento ='usuario:click';
meuEmissor.on(nomeEvento, (click) => {
    console.log("Clickado", click);
})

meuEmissor.emit(nomeEvento, "na barra de rolagem");
meuEmissor.emit(nomeEvento, "OK");

const stdin = process.openStdin();
function main() {
    return new Promise((resolve, reject) => {
        stdin.addListener('data', (value) => {
        //console.log(`Voce digitou ${value.toString().trim()}`
        return resolve(value);
    })

    })    
}

main().then( (resultado) => {
    console.log('resultado', resultado.toString())
})  
