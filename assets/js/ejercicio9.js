let valores = [];

function addValue() {
    const input = document.getElementById("inputValue");
    const value = parseInt(input.value);

    if (!isNaN(value)) {
        valores.push(value);
        input.value = "";
    }
}

function calcular() {
    let negativos = 0;
    let positivos = 0;
    let multiplos = 0;
    let acumulado = 0;

    for (let i = 0; i < valores.length; i++) {
        if (valores[i] < 0) {
            negativos++;
        } else if (valores[i] > 0) {
            positivos++;
        }

        if (valores[i] % 15 === 0) {
            multiplos++;
        }

        if (valores[i] % 2 === 0) {
            acumulado += valores[i];
        }
    }

    document.getElementById("negativos").textContent = negativos;
    document.getElementById("positivos").textContent = positivos;
    document.getElementById("multiplos").textContent = multiplos;
    document.getElementById("acumulado").textContent = acumulado;
}