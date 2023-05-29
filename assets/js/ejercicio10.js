function calcularPromedios() {
    // Obtener las edades de los estudiantes del turno mañana
    let edadesManana = [];
    for (let i = 1; i <= 5; i++) {
        let edad = parseInt(document.getElementById("manana" + i).value);
        edadesManana.push(edad);
    }

    // Obtener las edades de los estudiantes del turno tarde
    let edadesTarde = [];
    for (let i = 1; i <= 6; i++) {
        let edad = parseInt(document.getElementById("tarde" + i).value);
        edadesTarde.push(edad);
    }

    // Obtener las edades de los estudiantes del turno noche
    let edadesNoche = [];
    for (let i = 1; i <= 11; i++) {
        let edad = parseInt(document.getElementById("noche" + i).value);
        edadesNoche.push(edad);
    }

    // Calcular el promedio de cada turno
    let promedioManana = calcularPromedio(edadesManana);
    let promedioTarde = calcularPromedio(edadesTarde);
    let promedioNoche = calcularPromedio(edadesNoche);

    // Mostrar los promedios en la página
    document.getElementById("promedioManana").textContent = promedioManana.toFixed(2);
    document.getElementById("promedioTarde").textContent = promedioTarde.toFixed(2);
    document.getElementById("promedioNoche").textContent = promedioNoche.toFixed(2);

    // Determinar el turno con el promedio mayor
    let turnoMayor = "";
    let promedioMayor = 0;
    if (promedioManana > promedioTarde && promedioManana > promedioNoche) {
        turnoMayor = "Mañana";
        promedioMayor = promedioManana;
    } else if (promedioTarde > promedioManana && promedioTarde > promedioNoche) {
        turnoMayor = "Tarde";
        promedioMayor = promedioTarde;
    } else {
        turnoMayor = "Noche";
        promedioMayor = promedioNoche;
    }
    // Mostrar el turno con el promedio mayor en la página
    document.getElementById("turnoMayor").textContent = turnoMayor;
}

function calcularPromedio(edades) {
    let total = 0;
    for (let i = 0; i < edades.length; i++) {
        total += edades[i];
    }
    return total / edades.length;
}