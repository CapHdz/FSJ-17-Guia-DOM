
function calcularAumento() {
    // Obtener los valores ingresados por el usuario
    let nombre = document.getElementById("nombre").value;
    let salario = parseFloat(document.getElementById("salario").value);
    let categoria = document.getElementById("categoria").value;

    // Validar que los campos no estén vacíos
    if (nombre === "" || isNaN(salario) || categoria === "") {
        document.getElementById("resultado").innerHTML = "Por favor, completa todos los campos. " + '<i class="bi bi-emoji-expressionless"></i>';
        return;
    }

    let aumento;

    // Calcular el aumento según la categoría
    switch (categoria) {
        case "A":
            aumento = salario * 0.15;
            break;
        case "B":
            aumento = salario * 0.30;
            break;
        case "C":
            aumento = salario * 0.10;
            break;
        case "D":
            aumento = salario * 0.20;
            break;
        default:
            aumento = 0;
    }

    // Mostrar los datos del empleado y el aumento salarial en el HTML
        document.getElementById("rst-nombre").innerHTML = nombre;
        document.getElementById("rst-salario").innerHTML = salario.toFixed(2);
        document.getElementById("rst-categoria").innerHTML = categoria;
        document.getElementById("rst-aumento").innerHTML = aumento.toFixed(2);
}