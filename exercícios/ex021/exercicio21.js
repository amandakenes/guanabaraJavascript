let contador = 0;

function contar10() {
    let saida = document.querySelector('p');
    while (contador <= 10) {
        saida.innerHTML += `
        <h2>Contando de 1 até 10</h2>
        ${contador} &#x1F449
        `
    }
    saida.innerHTML += '&#x1F3C1'
}