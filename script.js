// PRIMERA PRE ENTREGA DE TRABAJO FINAL. JAVASCRIPT
// Diego Ignacio Silva Cordoba


//VARIABLES 
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
    tipo = "pasajes";
    america = parseInt(prompt("Tarifas de vuelos para America\n\nPrecio unitario: " + precioAmerica + " PESOS\nDescuento del 10% para cantidades superiores a 1 pasaje\n\nIngrese la cantidad:"));
    noEsNumero(america,tipo);
    resultadoAmerica = calculos(america,tipo,precioAmerica,resultadoAmerica);
    return resultadoAmerica;
}

//FUNCION PARA SOLICITAR VUELOS EUROPA

function solicitarEuropa() {
    tipo = "pasajes";
    europa = parseInt(prompt("Tarifas de vuelos para Europa\n\nPrecio unitario: " + precioEuropa + " PESOS\nDescuento del 10% para cantidades superiores a 1 pasaje\n\nIngrese la cantidad:"));
    noEsNumero(europa,tipo);
    resultadoEuropa = calculos(europa,tipo,precioEuropa,resultadoEuropa);
    return resultadoEuropa;
}
//FUNCION PARA SOLICITAR VUELOS ASIA

function solicitarAsia() {
    tipo = "pasajes";
    asia = parseInt(prompt("Tarifas de vuelos para Asia\n\nPrecio unitario: " + precioAsia + " PESOS\nDescuento del 10% para cantidades superiores a 1 pasaje\n\nIngrese la cantidad:"));
    noEsNumero(asia,tipo);
    resultadoAsia = calculos(asia,tipo,precioAsia,resultadoAsia);
    return resultadoAsia;
}
//FUNCION PARA SOLICITAR VUELOS A OCEANIA
function solicitarOceania() {
    tipo = "pasajes";
    oceania = parseInt(prompt("Tarifas de vuelos para Oceania\n\nPrecio unitario: " + precioOceania + " PESOS\nDescuento del 10% para cantidades superiores a 1 pasaje\n\nIngrese la cantidad:"));
    noEsNumero(oceania,tipo);
    resultadoOceania = calculos(oceania,tipo,precioOceania,resultadoOceania);
    return resultadoOceania;
}
//OBJETO COTIZACION
function Cotizacion(cantAmerica, cantEuropa, cantAsia, cantOceania){
    this.cantAmerica = cantAmerica;
    this.cantEuropa = cantEuropa;
    this.cantAsia = cantAsia;
    this.cantOceania = cantOceania;


//COMPONENTES DEL OBJETO COTIZACION
    this.composicion = function(){
        console.log("\n\nMi cotización finalmente se compuso de: " +
            "\n" + cantAmerica + "pasajes" +
            "\n" + cantAsia + "pasajes" +
            "\n" + cantEuropa + "pasajes" +
            "\n" + cantOceania + "pasajes");
    }


//CALCULAR EL VALOR DE LA COTIZACION

this.cotizar = function() {

    total = resultadoAmerica + resultadoEuropa + resultadoAsia + resultadoOceania;
    totalIva = total + (total*iva);

    console.log("\n\nCOTIZACIÓN FINAL\n\nVUELOS | Cantidad: " + cantAmerica + " / Subtotal: " + resultadoAmerica + " PESOS" +
        "\nVUELOS EUROPA | Cantidad: " + cantEuropa + " / Subtotal: " + resultadoEuropa + " PESOS" +
        "\nPAQUETES DE VUELOS ASIA  | Cantidad: " + cantAsia + " / Subtotal: " + resultadoAsia + " PESOS" +
        "\nPAQUETES DE VUELOS OCEANIA | Cantidad: " + cantOceania + " / Subtotal: " + resultadoOceania + " PESOS" +
        "\n\nTOTAL: " + total + " PESOS" +
        "\nTOTAL + IVA (21%): " + totalIva + " PESOS" +
        "\n\nARREGLO RESUMEN DE CANTIDADES: " + arregloResumenCantidades());
    alert("COTIZACIÓN FINAL\n\nVUELOS | Cantidad: " + cantAmerica + " / Subtotal: " + resultadoAmerica + " PESOS" +
        "\nPAQUETES DE VUELOS EUROPA | Cantidad: " + cantEuropa + " / Subtotal: " + resultadoEuropa + " PESOS" +
        "\nPAQUETES DE VUELOS ASIA | Cantidad: " + cantAsia + " / Subtotal: " + resultadoAsia + " PESOS" +
        "\nPAQUETES DE VUELOS OCEANIA| Cantidad: " + cantOceania + " / Subtotal: " + resultadoOceania + " PESOS" +
        "\n\nTOTAL: " + total + " PESOS" +
        "\nTOTAL + IVA (21%): " + totalIva + " PESOS" +
        "\n\nARREGLO RESUMEN DE CANTIDADES: " + arregloResumenCantidades());
}

} 

//FUNCION QUE INSTANCIA AL OBJETO Y CALCULA EN ÉL LA COTIZACION FINAL

function totalCotizacion(){
    miCotizacion = new Cotizacion(america, europa, asia, oceania);
    miCotizacion.cotizar();
    miCotizacion.composicion();
}

//ARREGLO RESUMEN DE CANTIDADES SOLICITADAS
function arregloResumenCantidades() {
    partesCotizacion = [];
    partesCotizacion.push("Vuelos America: " + america);
    partesCotizacion.push("Vuelos Europa: " + europa);
    partesCotizacion.push("Vuelos Asia: " + asia);
    partesCotizacion.push("Vuelos Oceania: " + oceania);
    partesCotizacion = partesCotizacion.join(" / ");
    return partesCotizacion;
}

//VALIDAR NUMERO
function noEsNumero(numero, tipo){
    if(isNaN(numero) || numero < 0){
        alert("Debes ingresar una cantidad " + tipo + " válido\nHaz una nueva solicitud");
    }
}

function calculos(cantidad,tipo,precio,resultado){
    if (cantidad == 1 || cantidad == 0) {
        resultado = cantidad * precio;
        console.log("Cantidad de pasajes  " + tipo + ": " + cantidad + " | Precio: " + resultado + " PESOS");
        alert("Cantidad de " + tipo + ": " + cantidad + " | Precio: " + resultado + " PESOS");
    }
    if (cantidad > 1) {
        resultado = cantidad * (precio * descuento);
        console.log("Cantidad de pasajes " + tipo + ": " + cantidad + " | Precio: " + resultado + " PESOS");
        alert("Cantidad de " + tipo + ": " + cantidad + " | Precio: " + resultado + " PESOS");
    }
    return resultado;

}