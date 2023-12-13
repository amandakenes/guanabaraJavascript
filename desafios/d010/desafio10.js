function bhaskara() {
    let a = Number(prompt('Qual o valor de a?'));
    let b = Number(prompt('Qual o valor de b?'));
    let c = Number(prompt('Qual o valor de c?'));
    let delta = b**2 -4 * a * c;
    if (typeof a && typeof b && typeof c !== NaN) {
        document.getElementById('saida').innerHTML =
        `<h2>Resolvendo Bhaskara</h2>
        <p>A equação atual é <strong>${a}x<sup>2</sup> + ${b}x
        + ${c} = 0</strong></p>
        <p>O cálculo realizado será <strong>Δ = ${b}<sup>2</sup>
        -4 . ${a} . ${c}</strong></p>
        <p>O valor calculado foi <strong><mark>Δ = ${delta}</mark>
        </strong></p>
        `;
    };
}