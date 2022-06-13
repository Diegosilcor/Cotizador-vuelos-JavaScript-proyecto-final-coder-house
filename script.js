// PRIMERA PRE ENTREGA DE TRABAJO FINAL

//VARIABLES GLOBALES
let america = 0;
let europa = 0;
let asia = 0;
let oceania = 0;
let cantidad = 0;
let tipo = "";
let resultadoAmerica = 0;
let resultadoEuropa = 0;
let resultadoAsia = 0;
let resultadoOceania = 0;
let total = 0;

//CONSTANTES

const precioAmerica = 1000;
const precioEuropa = 1200;
const precioAsia = 2000;
const precioOceania = 6000;
const descuento = 0.90;
const iva = 0.21;

//FUNCION PARA SOLICITAR VUELOS AMERICA

function solicitarAmerica() {
    america = "America";
    america = parseInt(prompt("Tarifas de vuelos para America\n\nPrecio unitario: " + precioAmerica + " PESOS\nDescuento del 10% para cantidades superiores a 1 pasaje\n\nIngrese la cantidad:"));

    resultadoAmerica = calculos();
    return resultadoAmerica;
}

//FUNCION PARA SOLICITAR VUELOS EUROPA

function solicitarEuropa() {
    europa = "Europa";
    europa = parseInt(prompt("Tarifas de vuelos para Europa\n\nPrecio unitario: " + precioEuropa + " PESOS\nDescuento del 10% para cantidades superiores a 1 pasaje\n\nIngrese la cantidad:"));

    resultadoEuropa = calculos();
    return resultadoEuropa;
}
//FUNCION PARA SOLICITAR VUELOS ASIA

function solicitarAsia() {
    asia = "Asia";
    asia = parseInt(prompt("Tarifas de vuelos para Asia\n\nPrecio unitario: " + precioAsia + " PESOS\nDescuento del 10% para cantidades superiores a 1 pasaje\n\nIngrese la cantidad:"));

    resultadoAsia = calculos();
    return resultadoAsia;
}
//FUNCION PARA SOLICITAR VUELOS A  OCEANIA
function solicitarOceania() {
    oceania = "Oceania";
    oceania = parseInt(prompt("Tarifas de vuelos para Oceania\n\nPrecio unitario: " + precioOceania + " PESOS\nDescuento del 10% para cantidades superiores a 1 pasaje\n\nIngrese la cantidad:"));

    resultadoOceania = calculos();
    return resultadoOceania;
}
//OBJETO COTIZACION
function Cotizacion(cantAmerica, cantEuropa, cantAsia, cantOceania) {
    this.cantAmerica = cantAmerica;
    this.cantEuropa = cantEuropa;
    this.cantAsia = cantAsia;
    this.cantOceania = cantOceania;
    this.cotizar = cotizar;
}

//COMPONENTES DEL OBJETO COTIZACION
this.composicion = function () {
    console.log("\n\nMi cotización finalmente se compuso de: " +
        "\n" + cantAmerica + " Vuelos America" +
        "\n" + cantAsia + " Vuelos Asia" +
        "\n" + cantEuropa + " Vuelos Europa" +
        "\n" + cantOceania + " Vuelos Oceania");
}

//CALCULAR EL VALOR DE LA COTIZACION

this.cotizar = function () {

    total = resultadoAmerica + resultadoEuropa + resultadoAsia + resultadoOceania;
    totalIva = total + (total * iva);

    console.log("\n\nCOTIZACIÓN FINAL\n\nVUELOS | Cantidad: " + cantAmerica + " / Subtotal: " + resultadoAmerica + " PESOS" +
        "\nVUELOS EUROPA | Cantidad: " + cantEuropa + " / Subtotal: " + resultadoeEuropa + " PESOS" +
        "\nCOMBOS DE VUELOS ASIA  | Cantidad: " + cantAsia + " / Subtotal: " + resultadoAsia + " PESOS" +
        "\nCOMBOS DE VUELOS OCEANIA | Cantidad: " + cantOceania + " / Subtotal: " + resultadoOceania + " PESOS" +
        "\n\nTOTAL: " + total + " PESOS" +
        "\nTOTAL + IVA (21%): " + totalIva + " PESOS" +
        "\n\nARREGLO RESUMEN DE CANTIDADES: " + arregloResumenCantidades());

    alert("COTIZACIÓN FINAL\n\nVUELOS | Cantidad: " + cantAmerica + " / Subtotal: " + resultadoAmerica + " PESOS" +
        "\nCOMBOS DE VUELOS EUROPA | Cantidad: " + cantEuropa + " / Subtotal: " + resultadoEuropa + " PESOS" +
        "\nCOMBOS DE VUELOS ASIA | Cantidad: " + cantAsia + " / Subtotal: " + resultadoAsia + " PESOS" +
        "\nCOMBOS DE VUELOS OCEANIA| Cantidad: " + cantOceania + " / Subtotal: " + resultadoOceania + " PESOS" +
        "\n\nTOTAL: " + total + " PESOS" +
        "\nTOTAL + IVA (21%): " + totalIva + " PESOS" +
        "\n\nARREGLO RESUMEN DE CANTIDADES: " + arregloResumenCantidades());
}


//FUNCION QUE INSTANCIA AL OBJETO Y CALCULA EN ÉL LA COTIZACION FINAL

function totalCotizacion() {
    //INSTANCIA DEL OBJETO COTIZACION

    var miCotizacion = new Cotizacion(america, europa, asia, oceania);
    miCotizacion.cotizar();
    miCotizacion.composicion();
}
//ARREGLO RESUMEN DE CANTIDADES SOLICITADAS
function arregloResumenCantidades() {
    var partesCotizacion = [];
    partesCotizacion.push("America: " + america);
    partesCotizacion.push("Europa: " + europa);
    partesCotizacion.push("Asia: " + asia);
    partesCotizacion.push("Oceania: " + oceania);
    partesCotizacion = partesCotizacion.join(" / ");
    return partesCotizacion;
}

function calculos(america, europa, asia, oceania) {
    if (cantidad == 1 || cantidad == 0) {
        resultado = cantidad * precio;
        console.log("Cantidad de " + tipo + ": " + cantidad + " | Precio: " + resultado + " PESOS");
        alert("Cantidad de " + tipo + ": " + cantidad + " | Precio: " + resultado + " PESOS");
    }
    if (cantidad > 1) {
        resultado = cantidad * (precio * descuento);
        console.log("Cantidad de " + tipo + ": " + cantidad + " | Precio: " + resultado + " PESOS");
        alert("Cantidad de " + tipo + ": " + cantidad + " | Precio: " + resultado + " PESOS");
    }
    return resultado;

}