let date = new Date();

function interacao() {
    document.querySelector('p').innerHTML = `
    <p>O que eu recebi do sistema foi <mark>
    ${date}</mark></p>
    `;
}

