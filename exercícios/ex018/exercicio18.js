let num = Math.floor(Math.random() * 100) + 1;

function adivinhar() {
  let palpite = Number(prompt("Qual é o seu palpite?"));
  if (palpite == num) {
    document.querySelector("p").innerHTML += `
        <p><strong>PARABÉNS!</strong> Você acertou! 
        Eu tinha sorteado o número ${num}!</p>
        `;
        document.querySelector('button').style.display = 'none';    
  } else if (palpite < num) {
    document.querySelector("p").innerHTML += `
        <p>Você falou ${palpite}. Meu número é
        <strong>MAIOR!</strong></p>
        `;
  } else if (palpite > num) {
    document.querySelector('p').innerHTML += `
        <p>Você falou ${palpite}. Meu número é
        <strong>MENOR!</strong></p>
        `
  };
};
