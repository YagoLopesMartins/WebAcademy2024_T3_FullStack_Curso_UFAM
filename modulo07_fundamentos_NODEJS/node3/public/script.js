document.getElementById('gerarLoren').addEventListener('click', async () => {
    const qtdParagrafosText = document.getElementById('qtdParagrafos');
    const qtdParagrafosInt = parseInt(qtdParagrafosText.value);
  
    if (isNaN(qtdParagrafosInt) || qtdParagrafosInt < 1 || qtdParagrafosInt > 10) {
      alert('Por favor, informe apenas valores somente entre 1 e 10');
      return;
    }
  
    const response = await fetch(`/lorem?qtdParagrafosInt=${qtdParagrafosInt}`);
    const data = await response.json();
  
    const conteudoASerGeradoDiv = document.getElementById('conteudoASerGerado');
    conteudoASerGeradoDiv.innerHTML = '';
  
    data.forEach((paragrafo) => {
      const paragrafoHtmlCriado = document.createElement('p');
      paragrafoHtmlCriado.textContent = paragrafo;
      conteudoASerGeradoDiv.appendChild(paragrafoHtmlCriado);
    });
});