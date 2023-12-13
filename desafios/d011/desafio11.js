function anoBissexto() {
  let ano = Number(prompt("Digite o ano que você quer verificar"));
  if ((ano % 4 == 0 && !ano % 100 == 0) || ano % 400 == 0) {
    document.getElementById("saida").innerHTML = `
        <h2>Analisando o ano de ${ano}...</h2>
        <p>O ano de ${ano} <span id="bissexto">É BISSEXTO<span> &#x2714</p>
        `;
    document.getElementById("bissexto").style.backgroundColor = "#BDECB6";
    document.getElementById("bissexto").style.color = "green";
  } else {
    document.getElementById("saida").innerHTML = `
        <h2>Analisando o ano de ${ano}...</h2>
        <p>O ano de ${ano} <span id="bissexto">NÃO É BISSEXTO</span> &#x274C</p>
        `;
    document.getElementById("bissexto").style.backgroundColor = "#FF6961";
    document.getElementById("bissexto").style.color = "#8B0000";
  }
}
