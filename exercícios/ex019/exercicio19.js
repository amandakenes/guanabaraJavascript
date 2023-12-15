function multiplasAcoes() {
    let num1 = Number(prompt('Primeiro valor:'));
    let num2 = Number(prompt('Segundo valor:'));
    let soma = num1 + num2;
    let subtracao = num1 - num2;
    let multiplicacao = num1 * num2;
    let divisao = num1 / num2;
    let escolha = prompt(`Valores informados: ${num1} e ${num2}.
    O que vamos fazer?
    [1]Somar
    [2]Subtrair
    [3]Multiplicar
    [4]Dividir
    `);

    if(escolha == ['1']) {
        document.querySelector('p').innerHTML = `
        <h2>Calculando...</h2>
        <p>${num1} + ${num2} = <strong>${soma}</strong></p>
        `
    } else if (escolha == ['2']) {
        document.querySelector('p').innerHTML = `
        <h2>Calculando...</h2>
        <p>${num1} - ${num2} = <strong>${subtracao}</strong></p>
        `
    } else if (escolha == ['3']) {
        document.querySelector('p').innerHTML = `
        <h2>Calculando...</h2>
        <p>${num1} x ${num2} = <strong>${multiplicacao}</strong></p>
        `
    } else if (escolha == ['4']) {
        document.querySelector('p').innerHTML = `
        <h2>Calculando...</h2>
        <p>${num1} / ${num2} = <strong>${divisao}</strong></p>
        `
    } else {
        alert('Insira dois números válidos!')
    };
};