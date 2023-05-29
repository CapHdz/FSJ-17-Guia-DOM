function calcularDescuento(event) {
    event.preventDefault();
    let destinoSeleccionado = document.getElementById('destino').value;
    let descuento = 0;
    switch (destinoSeleccionado) {
        case 'COSTA DEL SOL':
            descuento = 5;
        break;
        case 'PANCHIMALCO':
            descuento = 10;
        break;
        case 'PUERTO EL TRIUNFO':
            descuento = 15;
        break;
    }
    document.getElementById('rst-destino').innerHTML = destinoSeleccionado;
    document.getElementById('rst-descuento').innerHTML = descuento + '%';
}