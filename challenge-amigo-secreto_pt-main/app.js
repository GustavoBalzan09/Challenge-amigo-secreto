
let amigos = [];

function adicionarAmigo() {
    const nomeAmigo = document.getElementById('amigo').value.trim();

    if (nomeAmigo === '') {

        alert('Por favor, insira um nome.');
        return;
    }
    amigos.push(nomeAmigo);

    atualizarListaAmigos();

    document.getElementById('amigo').value = '';
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach(amigo => {
        const listItem = document.createElement('li');
        listItem.textContent = amigo;
        listaAmigos.appendChild(listItem);
    });
}

function sortearAmigo() {

    if (amigos.length === 0) {
        alert('Não há amigos para sortear! Adicione amigos primeiro.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceAleatorio];

    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;

}