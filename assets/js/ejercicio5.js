function calcularDescuento(event) {
    event.preventDefault();
    let modeloSeleccionado = document.getElementById('modelo').value;
    let descuento = 0;
    switch (modeloSeleccionado) {
        case 'FORD FIESTA':
            descuento = 5;
        break;
        case 'FORD FOCUS':
            descuento = 10;
        break;
        case 'FORD ESCAPE':
            descuento = 20;
        break;
    }
    document.getElementById('rst-modelo').innerHTML = modeloSeleccionado;
    document.getElementById('rst-descuento').innerHTML = descuento + '%';
}