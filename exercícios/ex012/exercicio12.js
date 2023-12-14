function parOuImpar() {
  let num = Number(prompt("Digite um número"));

  if (typeof num !== NaN) {
    if (num % 2 == 0) {
      document.querySelector("p").innerHTML = `
                <p>O número ${num} que foi digitado é 
                <strong>PAR!</strong></p>
                `;
    } else {
      document.querySelector("p").innerHTML = `
                <p>O número ${num} que foi digitado é
                <strong>ÍMPAR!</strong></par>
                `;
    }
  }
}
