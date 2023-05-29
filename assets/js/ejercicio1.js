function verificarEdad() {
    let edad = document.getElementById("edad").value;
    let mensaje = (edad === '') ? "Digita tu edad. " + '<i class="bi bi-emoji-expressionless"></i>': (parseInt(edad) >= 18) ? "Eres mayor de edad. " + '<i class="bi bi-emoji-sunglasses"></i>': "Eres menor de edad. " + '<i class="bi bi-emoji-frown"></i>';
    document.getElementById("resultado").innerHTML = mensaje;
}