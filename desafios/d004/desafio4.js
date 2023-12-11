let produto = prompt("Que produto você está comprando?");

function fun4() {
  let pagamento = prompt(`Qual valor você deu para comprar o ${produto}?`);
  let troco = pagamento - valor;
  if (produto && valor && pagamento !== "") {
    alert(
      `Você comprou um ${produto}.\nO valor do ${produto} é ${valor}. \nVocê deu ${pagamento} para pagar o ${produto}. \nO seu troco é de R${troco}`
    );
  }
}

function fun3() {
    while(produto) {
        let valor = Number(prompt(`Quanto o ${produto} custa?`));
    } if (valor === '') {
        alert('Insira um valor válido')
    }
}
