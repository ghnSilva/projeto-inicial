let listaDeNumerosSorteados = [] ;
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1


function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function exibirMensagemInicial(){
    exibirTexto('h1', 'Jogo do número secreto') ;

exibirTexto('p','Escolha um numero entre 1 e 10') ;
}
exibirMensagemInicial();
// Função de verificação do butão chute
function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
    exibirTexto('h1', 'Acerto');
    let palavraTentativa = tentativas > 1 ? 'tentativas':'tentativa';
    let mensagemTentativas = `Você acerto o número ${tentativas}, ${palavraTentativa}`
    exibirTexto('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute
    ('disabled')
}
   else {
    if (chute > numeroSecreto) {
        exibirTexto('p' ,'O numero secreto é menor');
    }
    else {
        exibirTexto ('p', 'O numero secreto é maior')
    }
    tentativas++;
    limparCampo ();
   }
}

function gerarNumeroAleatorio() {
let numeroEscolhido =parseInt(Math.random() * numeroLimite + 1);  
let quantidadeDeElementosNaLisra = listaDeNumerosSorteados.length;
if (quantidadeDeElementosNaLisra == numeroLimite) {
    listaDeNumerosSorteados= []
}
 if (listaDeNumerosSorteados.includes(numeroEscolhido))
 {
    return gerarNumeroAleatorio()

 } else {
    listaDeNumerosSorteados.push(numeroEscolhido)
    console.log(listaDeNumerosSorteados)
    return numeroEscolhido
 }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value='';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas=1
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true)

}