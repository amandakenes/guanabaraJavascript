function situacaoAluno() {
    let nomeAluno = prompt('Qual o nome do aluno?');
    let primeiraNota = parseFloat(prompt(`Primeira nota de ${nomeAluno}:`));
    let segundaNota = parseFloat(prompt(`Segunda nota de ${nomeAluno}:`));
    let media = (primeiraNota + segundaNota) / 2;
    if(typeof(primeiraNota) && typeof(segundaNota) !== NaN) {
        if (media > 6.00) {
            document.getElementById('saida').innerHTML = `
            <h2>Analisando a situação de ${nomeAluno}</h2>
            <p>Com as notas ${primeiraNota.toFixed(1)} e ${segundaNota.toFixed(1)},
            <strong>a média é ${media.toFixed(2)}</strong></p>
            <p>Com média acima de 6,0, o aluno está <span id="aprovado">
            <strong>APROVADO</strong></span></p>
            `;
            document.getElementById('aprovado').style.backgroundColor = '#BDECB6';
            document.getElementById('aprovado').style.color = 'green';
        } else if (media >= 3 && media <= 6.00) {
            document.getElementById('saida').innerHTML = `
            <h2>Analisando a situação de ${nomeAluno}</h2>
            <p>Com as notas ${primeiraNota.toFixed(1)} e ${segundaNota.toFixed(1)},
            <strong>a média é ${media.toFixed(2)}</strong></p>
            <p>Com média entre 3,00 e 6,00 o aluno está em<span id="rec">
            <strong>RECUPERAÇÃO</strong></span></p>
            `;
            document.getElementById('rec').style.backgroundColor = '#FFFFE0';
            document.getElementById('rec').style.color = '#EEAD2D'
        } else if (media < 3.00) {
            document.getElementById('saida').innerHTML = `
            <h2>Analisando a situação de ${nomeAluno}</h2>
            <p>Com as notas ${primeiraNota.toFixed(1)} e ${segundaNota.toFixed(1)},
            <strong>a média é ${media.toFixed(2)}</strong></p>
            <p>Com média abaixo de 3,00, o aluno está <span id="reprovado">
            <strong>REPROVADO</strong></span></p>
            `;
            document.getElementById('reprovado').style.backgroundColor = '#FF6961';
            document.getElementById('reprovado').style.color = '#8B0000'
        }
    }

}