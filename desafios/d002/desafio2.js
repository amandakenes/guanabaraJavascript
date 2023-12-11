function perguntas() {
  let nome = prompt("Insira seu nome");
  let idade = prompt("Insira sua idade");
  if (nome && idade != " ") {
    alert(`Olá, ${nome}! Bom saber que você tem ${idade} anos de idade.`);
  }
}
