var numerosSorteados = [];

function sortear() {
  var min = parseInt(document.getElementById("min").value);
  var max = parseInt(document.getElementById("max").value);
  
  if (isNaN(min) || isNaN(max)) {
    alert("Por favor, digite um valor válido para o mínimo e o máximo.");
    return;
  }
  
  if (min >= max) {
    alert("O valor mínimo deve ser menor que o valor máximo.");
    return;
  }
  
  var naoRepetir = document.getElementById("checkbox").checked;
  var numeroSorteado;
  
  if (naoRepetir) {
    var numerosDisponiveis = [];
    
    for (var i = min; i <= max; i++) {
      if (numerosSorteados.indexOf(i) == -1) {
        numerosDisponiveis.push(i);
      }
      
    }
    
    if (numerosDisponiveis.length == 0) {
      alert("Todos os números já foram sorteados.");
      return;
    }
    
    var indice = Math.floor(Math.random() * numerosDisponiveis.length);
    numeroSorteado = numerosDisponiveis[indice];
    numerosSorteados.push(numeroSorteado);
  } else {
    numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  document.getElementById("resultado").value = numeroSorteado;
}