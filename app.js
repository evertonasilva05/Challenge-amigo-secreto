let amigos = [];

function adicionarAmigo() {
    let inserirAmigoNoArray = document.getElementById('amigo');
    let amigoInserido = inserirAmigoNoArray.value.trim();

    if (amigoInserido == '') {
        alert('Por favor, insira um nome.');
        return;
    } else if(amigos.includes(amigoInserido)){ 
        alert ("Esse nome já foi adicionado.");
        return;
    }
    amigos.push(amigoInserido);
    inserirAmigoNoArray.value = '';
    inserirAmigoNoArray.focus();
    
    inserirAmigoNaLista();
}

function inserirAmigoNaLista() {
    lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    
    let i = 0;
    while (i < amigos.length) {
        let amigoLista = document.createElement('li'); 
        amigoLista.textContent = amigos[i];
        lista.appendChild(amigoLista);
        i++;
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Por favor, insira mais de um amigo para sortear.');
        return;
    } else {
        let indiceSorteado = Math.floor(Math.random() * amigos.length);
        amigoSorteado = amigos[indiceSorteado];

        lista.innerHTML = "";

        let resultado = document.getElementById('resultado');
        mensagemResultado = `Parabéns! O nome sorteado é ${amigoSorteado}`;
        resultado.innerHTML = mensagemResultado;
        document.getElementById('botaoSorteia').setAttribute('disabled', true);

        let reinicia = document.getElementById('reinicia');
        mensagemReinicia = `\nPara fazer um sorteio com novos nomes, Reinicie a página`;
        reinicia.innerHTML = mensagemReinicia;
    }
    
}

function reiniciar() {
    lista.innerHTML = "";
    amigos = [];
    resultado.innerHTML = '';
    reinicia.innerHTML = '';
}


