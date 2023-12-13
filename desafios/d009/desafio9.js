function reajusteSalario() {
  let nomeFuncionario = prompt("Qual o nome do funcionário?");
  let salario = parseFloat(
    prompt(`Qual o salário de ${nomeFuncionario} atualmente?`).replace(",", ".")
  );
  let porcentagem = prompt(
    `Qual a porcentagem do aumento no salário de ${nomeFuncionario}?`
  ).replace(",", ".");

  // Verifica se os valores são válidos
  if (!isNaN(salario) && !isNaN(porcentagem)) {
    let aumento = (salario * porcentagem);
    let novoSalario = salario + aumento;
    document.getElementById("saida").innerHTML =
    // não achei uma forma de não aparecer 0. na exibição do aumento
    `
        <p>O salário de ${nomeFuncionario} atualmente é R$ ${salario.toFixed(
      3
    )}.</p>
        <p>Com um aumento de ${porcentagem}%,
        o salário vai aumentar em R$ ${aumento / 100} no próximo mês.</p>
        <p>E a partir daí, ${nomeFuncionario} terá um novo salário de 
        R$ ${novoSalario.toFixed(2)} mensais.</p>
        `;
  } else {
    alert(
      "Por favor, insira valores numéricos válidos para salário e porcentagem."
    );
  }
}
