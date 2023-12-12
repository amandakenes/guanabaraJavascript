function fun4() {
  let produto = prompt("Que produto você está comprando?");
  let valor = prompt(`Quanto custa ${produto}?`);
  let pagamento = prompt(`Qual valor você deu para pagar ${produto}?`);
  let troco = Number(pagamento) - Number(valor);
  if (produto && valor && pagamento !== null) {
    alert(
      `Você comprou ${produto} que custou R$${valor}.\nVocê deu R$${pagamento} para pagar e irá receber R$${troco} de troco.\nVolte sempre!`
    );
  }
}
