function conversorTemperatura() {
  let temperaturaCelsius = prompt("Digite uma temperatura em Celsius (°C)");
  let temperaturaKevin = Number(temperaturaCelsius) + 273.15;
  let temperaturaFahrenheit = Number(temperaturaCelsius) * (9 / 5) + 32;
  if (temperaturaCelsius !== null) {
    document.getElementById(
      "conversao"
    ).innerHTML = `A temperatura de ${temperaturaCelsius}°C que você digitou equivale a:<br>
        ${temperaturaKevin}°K (Kevin).<br>
        ${temperaturaFahrenheit}°F (Fahrenheit).
        `;
  }
}
