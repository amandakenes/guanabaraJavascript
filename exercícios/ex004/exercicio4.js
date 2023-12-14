function interacao() {
    let nome = prompt('Qual é o seu nome?');
    if (nome !== null) {
        document.querySelector('p').innerHTML = `
        <p>Olá, <strong>${nome}</strong>! É um grande prazer te conhecer! &#x1F596</p>
        `
    }
}