function reajusteSalario() {
  let nomeFuncionario = prompt("Qual o nome do funcionário?");
  let salario = Number(prompt(`Qual o salário de ${nomeFuncionario} atualmente?`));
  let porcentagem = Number(prompt(
    `Qual a porcentagem do aumento no salário de ${nomeFuncionario}?`
  ));
  let aumento = Number((salario * porcentagem) / 100);
  let novoSalario = Number(salario + aumento);
  if (nomeFuncionario && salario && porcentagem !== null) {
    document.getElementById("saida").innerHTML = `
        <p>O salário de ${nomeFuncionario} atualmente é R$ ${salario}.</p>
        <p>Com um aumento de ${porcentagem}%, o salário vai aumentar em R$ ${aumento} no próximo mês.</p>
        <p>E a partir daí, ${nomeFuncionario} terá um novo salário de R$ ${novoSalario} mensais.</p>
        `;
  }
}
