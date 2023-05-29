function convertirTemperatura() {
    let temperaturaCelsius = document.getElementById("celsius").value;

    if (temperaturaCelsius === "") {
        document.getElementById("error").innerHTML = "Ingresa todos los datos"  + '<i class="bi bi-emoji-expressionless"></i>';
        return;
    }

    let temperaturaFahrenheit = (temperaturaCelsius * 9 / 5) + 32;

    document.getElementById("resultado").innerHTML = temperaturaFahrenheit.toFixed(2) + "°";

    if (temperaturaFahrenheit >= 14 && temperaturaFahrenheit < 32) {
        document.getElementById("mensaje").innerHTML = "Temperatura baja";
    } else if (temperaturaFahrenheit >= 32 && temperaturaFahrenheit < 68) {
        document.getElementById("mensaje").innerHTML = "Temperatura adecuada";
    } else if (temperaturaFahrenheit >= 68 && temperaturaFahrenheit < 96) {
        document.getElementById("mensaje").innerHTML = "Temperatura alta";
    } else {
        document.getElementById("mensaje").innerHTML = "Temperatura desconocida";
    }
}