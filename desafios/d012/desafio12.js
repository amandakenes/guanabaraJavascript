function precoMudou() {
  let precoAntigo = parseFloat(prompt("Qual o preço antigo do produto?"));
  let precoAtual = parseFloat(prompt("Qual o preço atual do produto?"));

  if (typeof precoAntigo && typeof precoAtual !== NaN) {
    if (precoAtual > precoAntigo) {
      let aumentoPreco = precoAtual - precoAntigo;
      let variacaoPorcentagem = parseFloat(
        ((precoAtual - precoAntigo) / precoAntigo) * 100
      );
      document.getElementById("saida").innerHTML = `
        <h2>Analisando os valores informados</h2>
        <p>O produto custava R$ ${precoAntigo.toFixed(2)} e agora 
        custa R$ ${precoAtual.toFixed(2)}.</p>
        <p>Hoje o produto está mais caro.</p>
        <p>O preço subiu R$ ${aumentoPreco} em relação ao preço
        anterior.</p>
        <p>Uma variação de ${variacaoPorcentagem.toFixed(1)}% para cima.</p>
        `;
    } else if (precoAntigo > precoAtual) {
      let baixaPreco = precoAtual - precoAntigo;
      let variacaoPorcentagem = parseFloat(
        ((precoAtual - precoAntigo) / precoAntigo) * 100
      );
      document.getElementById("saida").innerHTML = `
        <h2>Analisando os valores informados</h2>
        <p>O produto custava R$ ${precoAntigo.toFixed(2)} e agora 
        custa R$ ${precoAtual.toFixed(2)}.</p>
        <p>Hoje o produto está mais barato.</p>
        <p>O preço baixou R$ ${baixaPreco} em relação ao preço
        anterior.</p>
        <p>Uma variação de ${variacaoPorcentagem.toFixed(1)}% para baixo.</p>

        `;
    }
  } else {
    alert("Informe dois valores para realizar a análise");
  }
}
