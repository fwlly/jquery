document.getElementById('form-sorteador').addEventListener('submit', function(event) {
    event.preventDefault();  

    const numeroMaximo = parseInt(document.getElementById('numero-maximo').value);
    const numeroSorteado = Math.floor(Math.random() * numeroMaximo) + 1;
    
  
    const resultadoElemento = document.getElementById('resultado-valor');
    resultadoElemento.textContent = numeroSorteado;  // Insere o número sorteado no elemento


    const resultadoContainer = document.querySelector('.resultado');
    resultadoContainer.style.opacity = 1; // Torna o contêiner visível
    resultadoContainer.style.animation = 'fadeInText 1s ease-out forwards';  // Aplica a animação
});
