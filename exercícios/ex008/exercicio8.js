function calculos() {
    let numero = Number(prompt('Digite um número'));
    if (typeof(numero) !== NaN) {
        let absoluto = Math.abs(numero);
        let parteInteira = Math.trunc(numero)
        let inteiroMaisProximo = Math.round(numero);
        let raizQuadrada = Math.sqrt(numero);
        let raizCubica = Math.cbrt(numero);
        let expoenteDois = numero ** 2;
        let expoenteTres = numero ** 3;
        document.querySelector('p').innerHTML = `
        <p>O número a ser analisado aqui será o
        <strong>${numero}</strong>
        <hr>
        <p>O seu valor absoluto é ${absoluto}</p>
        <p>A sua parte inteira é ${parteInteira}</p>
        <p>O valor inteiro mais próximo é ${inteiroMaisProximo}</p>
        <p>A sua raiz quadrada é ${raizQuadrada}</p>
        <p>A sua raiz cúbica é ${raizCubica}</p>
        <p>O valor de ${numero}<sup>2</sup> é ${expoenteDois}</p>
        <p>O valor de ${numero}<sup>3</sup> é ${expoenteTres}</p>
        `
    }
}