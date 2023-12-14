let data = new Date();
let dia = data.getDate();
let mes = data.getMonth();
let ano = data.getFullYear();
let diaDaSemana = data.getDay();
let hora = data.getHours();
let minutos = data.getMinutes();
let segundos = data.getSeconds();
let meses = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];
let semana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

function analiseData() {
  document.querySelector("p").innerHTML = `
    <p>Dia: <mark>${dia}</mark></p>
    <p>Mês: <mark>${meses[mes]}</mark></p>
    <p>Ano: <mark>${ano}</mark></p>
    <p>Dia da semana: <mark>${semana[diaDaSemana]}</mark></p>
    <p>Hora: <mark>${hora}</mark></p>
    <p>Minutos: <mark>${minutos}</mark></p>
    <p>Segundos: <mark>${segundos}</mark></p>
    `;
}
