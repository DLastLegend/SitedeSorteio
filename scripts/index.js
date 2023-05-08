// Opção troca de formulario
var opcao = document.getElementById("opcao");
var sorteioNomes = document.getElementById("sorteio-nomes");
var sorteioNumeros = document.getElementById("sorteio-numeros");
var labelOpcao = document.querySelector('label[for="opcao"]');

opcao.addEventListener('click', function() {
    if (opcao.checked) {
        sorteioNomes.style.display = "block";
        sorteioNumeros.style.display = "none";
    } else {
        sorteioNomes.style.display = "none";
        sorteioNumeros.style.display = "block";
    }

    if (!opcao.checked && !document.querySelector('input[name="checkbox"]:checked')) {
        sorteioNumeros.style.display = "block";
        sorteioNomes.style.display = "none";
    }
});

var checkboxSemRepeticao = document.querySelector('input[name="sem-repeticao"]');

checkboxSemRepeticao.addEventListener('click', function() {
    var nomes = document.querySelectorAll('#lista-nomes li');
    if (this.checked) {
        for (var i = 0; i < nomes.length; i++) {
            nomes[i].classList.add('escondido');
        }
    } else {
        for (var i = 0; i < nomes.length; i++) {
            nomes[i].classList.remove('escondido');
        }
    }
});
// Fim Opção troca de formulario