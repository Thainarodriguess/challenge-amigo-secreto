// Array que vai guardar os nomes dos amigos
let amigos = [];

// Função para adicionar amigos
function adicionarAmigo() {
    let nome = document.getElementById("amigo").value;

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome);
    document.getElementById("amigo").value = "";

    atualizarLista(); // chama a função para atualizar a lista na tela
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += "<li>" + amigos[i] + "</li>";
    }
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    // Verifica se há amigos na lista
    if (amigos.length === 0) {
        alert("Não há amigos para sortear!");
        return;
    }

    // Gera um índice aleatório
    let indice = Math.floor(Math.random() * amigos.length);

    // Obtém o amigo sorteado
    let amigoSorteado = amigos[indice];

    // Mostra o resultado na tela
    document.getElementById("resultado").innerHTML = "🎉 O amigo secreto é: " + amigoSorteado;
}
