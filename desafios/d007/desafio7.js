let cotacaoDolar = prompt(
  "Antes de qualquer coisa, quanto está a cotação do dólar agora?"
);

function conversorMoeda() {
  let carteira = prompt("Quanto R$ você possui na sua carteira?");
  let dolar = carteira / parseFloat(cotacaoDolar);
  if (cotacaoDolar && carteira !== null) {
    document.getElementById(
      "conversao"
    ).innerHTML = `Hoje, com R$${carteira} na carteira você consegue comprar US$${dolar}`;
  }
}
