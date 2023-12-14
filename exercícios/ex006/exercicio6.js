function somar() {
    let n1 = Number(prompt('Digite um número'));
    let n2 = Number(prompt('Digite outro número'));
    let soma = n1 + n2;
    if(typeof(n1) && typeof(n2) !== NaN) {
        document.querySelector('p').innerHTML = `
        A soma entre <mark>${n1}</mark> e <mark>${n2}</mark> é
        igual a <strong>${soma}!</strong>
        `
    }
}