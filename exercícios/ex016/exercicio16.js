function calculoIdade() {
    let ano = Number(prompt('Em que ano você nasceu?'));
    let idade = 2023 - ano;

    document.querySelector('p').innerHTML = `
    <p>Quem nasceu em ${ano} vai completar
    <strong>${idade}</strong> anos em 2023.
    `
}