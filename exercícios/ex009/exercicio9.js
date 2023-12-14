let contador = 0;
let resultado = document.querySelector('p');

function contar() {
    contador++; // contador = contador + 1
    resultado.innerHTML = `
    <p>O contador está com <mark>${contador}</mark> cliques</p>
    `;
    console.log('funcionou');
};

function zerar() {
    contador = 0;
    resultado.innerHTML = `
    <p>O contador está com <mark>${contador}</mark> cliques</p>
    `;
    console.log('zerou')
};