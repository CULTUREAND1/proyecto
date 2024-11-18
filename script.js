const PRECIO_GALON = 15540;

function calcularGasolina() {
    const capacidad = parseFloat(document.getElementById('capacidad').value);
    const existente = parseFloat(document.getElementById('existente').value);
    const monto = parseFloat(document.getElementById('monto').value);
    
    let galonesDisponibles = capacidad - existente;
    let galonesIngresar, valorPagar;

    if (monto) {
        galonesIngresar = monto / PRECIO_GALON;
        if (galonesIngresar > galonesDisponibles) {
            galonesIngresar = galonesDisponibles;
        }
        valorPagar = galonesIngresar * PRECIO_GALON;
    } else {
        galonesIngresar = galonesDisponibles;
        valorPagar = galonesIngresar * PRECIO_GALON;
    }

    document.getElementById('galones').textContent = `Galones a ingresar: ${galonesIngresar.toFixed(2)}`;
    document.getElementById('valor').textContent = `Valor a pagar: $${valorPagar.toFixed(2)}`;

    generarFactura(galonesIngresar, valorPagar);
}

function generarFactura(galones, valor) {
    const nombreEstacion = 'Estación de Gasolina XYZ';
    const nit = '123456789-0';
    const ciudad = 'Ciudad Ejemplo';
    const placa = prompt('Ingrese la placa del vehículo:');
    const fecha = new Date().toLocaleString();
    const formaPago = prompt('Ingrese la forma de pago (Tarjeta/Efectivo):');

    const facturaContenido = `
        Nombre y NIT: ${nombreEstacion}, ${nit}<br>
        Ciudad: ${ciudad}<br>
        Placa del vehículo: ${placa}<br>
        Fecha de la transacción: ${fecha}<br>
        Cantidad de gasolina ingresada: ${galones.toFixed(2)} galones<br>
        Forma de pago: ${formaPago}<br>
        Valor pagado: $${valor.toFixed(2)}
    `;

    document.getElementById('facturaContenido').innerHTML = facturaContenido;
}
