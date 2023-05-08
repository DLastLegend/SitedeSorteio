var nomesSorteados = [];

function adicionarNome() {
    var nome = document.getElementById("nome").value;
    if (nome.trim() == "") {
        alert("Por favor, digite um nome válido.");
        return;
    }
    var listaNomes = document.getElementById("lista-nomes");
    var item = document.createElement("li");
    var nomeTexto = document.createTextNode(nome);
    item.appendChild(nomeTexto);
    var botao = document.createElement("button");
    botao.style.backgroundColor = "transparent";
    botao.style.border = "none";
    botao.innerHTML = "❌";
    botao.onclick = function () {
        listaNomes.removeChild(item);
    };
    item.appendChild(botao);
    listaNomes.appendChild(item);
    document.getElementById("nome").value = "";
}

function sortearNome() {
    var nomes = document.querySelectorAll("#lista-nomes li");
    if (nomes.length == 0) {
        alert("Por favor, adicione pelo menos um nome na lista.");
        return;
    }
    var semRepeticao = document.getElementById("sem-repeticao").checked;
    var indice;
    if (semRepeticao) {
        var nomesDisponiveis = [];
        for (var i = 0; i < nomes.length; i++) {
            var nome = nomes[i].firstChild.textContent;
            if (nomesSorteados.indexOf(nome) == -1) {
                nomesDisponiveis.push(i);
            }
        }
        if (nomesDisponiveis.length == 0) {
            alert("Todos os nomes já foram sorteados.");
            return;
        }
        indice = nomesDisponiveis[Math.floor(Math.random() * nomesDisponiveis.length)];
        nomesSorteados.push(nomes[indice].firstChild.textContent);
    } else {
        indice = Math.floor(Math.random() * nomes.length);
    }
    var nomeSorteado = nomes[indice].firstChild.textContent;
    document.getElementById("nome-sorteado").value = nomeSorteado;
}