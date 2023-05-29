function compararNumeros() {
    // Obtener los valores ingresados por el usuario
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;

    // Validar si los campos están vacíos
    if (numero1 === "" || numero2 === "") {
        document.getElementById("resultado").innerHTML = "Digita los números " + '<i class="bi bi-emoji-expressionless"></i>';
        return;
    }

    // Validar si los números son enteros
    if (!Number.isInteger(Number(numero1)) || !Number.isInteger(Number(numero2))) {
        document.getElementById("resultado").innerHTML = "El número debe ser entero " + '<i class="bi bi-emoji-expressionless"></i>';
        return;
    }

    // Convertir los valores a enteros
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);

    // Comparar los números y mostrar el resultado
    if (numero1 > numero2) {
        document.getElementById("resultado").innerHTML = "El número " + numero1 + " es mayor";
    } else if (numero2 > numero1) {
        document.getElementById("resultado").innerHTML = "El número " + numero2 + " es mayor";
    } else {
        document.getElementById("resultado").innerHTML = "Los números son iguales";
    }
}