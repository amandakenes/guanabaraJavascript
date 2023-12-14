alert('Seja bem vindo ao meu site!');

function calculo() {
    let numero = Number(prompt('Digite um número'));
    let dobro = numero * 2;
    let metade = numero / 2;
    if (typeof(numero) !== NaN) {
        document.querySelector('p').innerHTML = `
        <p>O dobro de ${numero} é ${dobro} e a metade é
        ${metade}!</p>
        `;
    } else {
        alert('Digite um número');
    };
};