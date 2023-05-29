function calcularNotaFinal() {
    // Obtener los valores de los campos de entrada
    let nombre = document.getElementById("nombre").value;
    let carnet = document.getElementById("carnet").value;
    let examen = parseFloat(document.getElementById("examen").value);
    let tareas = parseFloat(document.getElementById("tareas").value);
    let asistencia = parseFloat(document.getElementById("asistencia").value);
    let investigacion = parseFloat(document.getElementById("investigacion").value);

    // Calcular la nota final
    let notaFinal = examen * 0.2 + tareas * 0.4 + asistencia * 0.1 + investigacion * 0.3;
    
    // Verificar si los campos están vacíos
    if (nombre === "" || carnet === "" || isNaN(examen) || isNaN(tareas) || isNaN(asistencia) || isNaN(investigacion)) {
        document.getElementById("resultado").innerHTML = "Por favor, ingresa todos los datos. " + '<i class="bi bi-emoji-expressionless"></i>';
    }
    else{
    // Mostrar los resultados
    document.getElementById("rst-nombre").innerHTML = nombre;
    document.getElementById("rst-carnet").innerHTML = carnet;
    document.getElementById("rst-nota").innerHTML = notaFinal.toFixed(2);
    }
}
