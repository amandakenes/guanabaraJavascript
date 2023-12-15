function estacaoDoAno() {
    let mes = prompt('Digite o mês em extenso (ex.: Setembro)');
    let estacao = document.querySelector('p');
    switch (mes) {
        case 'Janeiro':
        case 'janeiro':
        case 'Fevereiro':
        case 'fevereiro':
        case 'Março':
        case 'março':
            estacao.innerHTML = `
            <p>No mês de <mark>${mes}</mark>, estamos na 
            estação <mark><strong>VERÃO</strong></mark>.</p>
            `;
            break;
        case 'Abril':
        case 'abril':
        case 'Maio':
        case 'maio':
        case 'Junho':
        case 'junho':
            estacao.innerHTML = `
            <p>No mês de <mark>${mes}</mark>, estamos na 
            estação <mark><strong>OUTUNO</strong></mark>.</p>
            `;
            break;
        case 'Julho':
        case 'julho':
        case 'Agosto':
        case 'agosto':
        case 'Setembro':
        case 'setembro':
            estacao.innerHTML = `
            <p>No mês de <mark>${mes}</mark>, estamos na 
            estação <mark><strong>INVERNO</strong></mark>.</p>
            `;
            break;
        case 'Outubro':
        case 'outubro':
        case 'Novembro':
        case 'novembro':
        case 'Dezembro':
        case 'dezembro':
            estacao.innerHTML = `
            <p>No mês de <mark>${mes}</mark>, estamos na 
            estação <mark><strong>PRIMAVERA</strong></mark>.</p>
            `;
            break;
    }
}