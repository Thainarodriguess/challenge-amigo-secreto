let amigos = [];

function adicionarAmigo() {
    let nome = document.getElementById("amigo").value;

    if (nome === "") {
        alert("Digite um nome!");
    } else {
        amigos.push(nome);
        document.getElementById("amigo").value = "";
    }

    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = amigos; 
}
