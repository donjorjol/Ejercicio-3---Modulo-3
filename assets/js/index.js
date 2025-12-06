function calcularPropina(montoCuenta, porcentajePropina) {
    // Funcion para calcular el procentaje de la propina
    function montoDePropina(precio) {
        return precio * (porcentajePropina / 100);
    }

    // Sumamos cuenta + propina
    let propina = montoDePropina(montoCuenta);
    let totalAPagar = montoCuenta + propina;

    // Return a la propina
    return propina;
}

    // Cuando todo el HTML esté cargado
    document.addEventListener("DOMContentLoaded", function () {

    const boton = document.getElementById("btnIniciar");

    boton.addEventListener("click", function () {

        // Declaramos los prompt para ingresar datos solicitados

        let montoInput = prompt("Ingresa el monto total de la cuenta:");
        let porcentajeInput = prompt("¿Qué porcentaje de propina deseas dejar? (ej: 15)");

        let montoCuenta = Number(montoInput);
        let porcentajePropina = Number(porcentajeInput);

        // Validacion de datos ingresados correctamente
        if (montoInput === "" || porcentajeInput === "" || montoCuenta <= 0 || porcentajePropina < 0) {
            console.error("Por favor ingresa valor valido");
        } else {
            // Llamamos a la función principal
            let montoPropina = calcularPropina(montoCuenta, porcentajePropina);
            let totalFinal = montoCuenta + montoPropina;

            // Salida en Consola
            console.log("--- Resumen de la Cuenta ---");
            console.log(`Monto de la cuenta:      $${montoCuenta}`);
            console.log(`Propina (${porcentajePropina}%):       $${montoPropina}`);
            console.log(`Total a pagar:           $${totalFinal}`);
        }
    });
});


