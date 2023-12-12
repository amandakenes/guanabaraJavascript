function fun5() {
  let distanciaEmMetros = prompt("Digite uma distância em metros (m)");
  let conversaoKm = Number(distanciaEmMetros) / 1000;
  let conversaoHm = Number(distanciaEmMetros) / 100;
  let conversaoDam = Number(distanciaEmMetros) / 10;
  let conversaoMm = Number(distanciaEmMetros) * 1000;
  let conversaoCm = Number(distanciaEmMetros) * 100;
  let conversaoDm = Number(distanciaEmMetros) * 10;
  if (distanciaEmMetros !== null) {
    document.getElementById(
      "conversao"
    ).innerHTML = `A distância de ${distanciaEmMetros} metros que você digitou equivale a:<br>
    ${conversaoKm} quilômetros.<br>
    ${conversaoHm} hectômetros.<br>
    ${conversaoDam} decâmetros.<br>
    ${conversaoDm} decímetros.<br>
    ${conversaoCm} centímetros.<br>
    ${conversaoMm} milímetros.`;
  }
}
