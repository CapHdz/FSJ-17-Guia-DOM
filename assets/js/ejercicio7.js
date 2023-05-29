function calcularNotaMediaPonderada() {

    // Obtener los valores ingresados por el usuario
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let ponderacion1 = parseFloat(document.getElementById("ponderacion1").value);
    let ponderacion2 = parseFloat(document.getElementById("ponderacion2").value);

    // Verificar si se ingresaron todos los datos
    if (isNaN(nota1) || isNaN(nota2) || isNaN(ponderacion1) || isNaN(ponderacion2)) {
        document.getElementById("resultado").innerHTML = "Por favor, ingresa todos los datos. " + '<i class="bi bi-emoji-expressionless"></i>';
        return;
    }

    // Calcular la nota media ponderada
    let notaMediaPonderada = (nota1 * ponderacion1 + nota2 * ponderacion2) / (ponderacion1 + ponderacion2);

    // Mostrar el resultado
    document.getElementById("resultado").innerHTML = "La nota media ponderada es: " + notaMediaPonderada.toFixed(2);
}