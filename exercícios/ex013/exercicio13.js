function maior() {
    let num1 = Number(prompt('Digite um número'));
    let num2 = Number(prompt('Digite outro número'));

    if (typeof(num1) && typeof(num2) !== NaN) {
        if (num1 > num2) {
            document.querySelector('p').innerHTML = `
            <p>Analisando os valores <mark>${num1}</mark>
            e <mark>${num2}</mark>, o maior é o valor
            <strong>${num1}</strong></p>
            `
        } else {
            document.querySelector('p').innerHTML = `
            <p>Analisando os valores <mark>${num1}</mark>
            e <mark>${num2}</mark>, o maior é o valor
            <strong>${num2}</strong></p>
            `
        }
    } else {
        alert('Você deve inserir dois números válidos para a análise!')
    }
}