function gerar() {
  let num = Math.floor(Math.random() * 100) + 1;
  let saida = document.querySelector("p");
  saida.innerHTML += `
    <p>Acabei de pensar no número 
    <mark>${num}</mark>!</p>
    `;
}

function limpar() {
  let saida = document.querySelector("p");
  saida.innerHTML = null;
}
