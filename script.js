// Seleciona o botão e o parágrafo onde será exibido o contador
const contadorBtn = document.getElementById('contadorBtn');
const contadorP = document.getElementById('contador');

// Variável para armazenar o número de cliques
let contador = 0;

// Adiciona um event listener para o botão
contadorBtn.addEventListener('click', () => {
    // Incrementa o contador
    contador++;
    // Atualiza o texto do parágrafo
    contadorP.textContent = contador;
});
