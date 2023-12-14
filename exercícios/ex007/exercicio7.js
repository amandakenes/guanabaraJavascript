function mediaAluno() {
    let nome = prompt('Qual o nome do aluno?');
    let primeiraNota = Number(prompt(`Qual foi a primeira nota de ${nome}?`));
    let segundaNota = Number(prompt(`Além de ${primeiraNota}, qual foi a outra nota de ${nome}?`));
    let media = (primeiraNota + segundaNota) / 2;
    if (typeof(primeiraNota) && typeof(segundaNota) !== NaN) {
        document.querySelector('p').innerHTML = `
        <p>Calculando a média de <mark>${nome}</mark></p>
        <p>As notas obtidas foram <mark>${primeiraNota} e ${segundaNota}</mark></p>
        <p>A média final será <mark>${media}</mark></p>
        `
    }
}