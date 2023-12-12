function desconto10() {
  let produto = prompt("Qual o produto que você está comprando?");
  let preco = prompt(`Qual o preço de ${produto}?`);
  let desconto = (preco * 10) / 100;
  let precoFinal = preco - desconto;
  document.getElementById(
    "conversao"
  ).innerHTML = `
    <h2>Calculando desconto de 10% para ${produto}</h2>
    O preço original era R$${preco}. <br>
    Você acaba de ganhar um desconto de R$${desconto} (10%). <br>
    No final, você pagará R$${precoFinal} no produto ${produto}.
    `;
}
