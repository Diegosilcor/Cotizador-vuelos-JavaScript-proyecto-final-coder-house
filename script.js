destino = ['Argentina', 'Estados Unidos', 'Chile', 'Brasil', 'Canada', 'Europa', 'Asia'];
aerolineas = ['Emirates', 'Aerolineas Argentinas', 'KLM', 'Iberia', 'Latam'];
aeropuertoSalida = ['Ezeiza', 'Aeroparque', 'Adolfo suarez Madrid', ' El prat', 'Schipol', 'Jorge Chavez', 'Rio de Janeiro']
aeropuertoDeLlegada = ['Ezeiza', 'Aeroparque', 'Adolfo suarez Madrid', ' El prat', 'Schipol', 'Jorge Chavez', 'Rio de Janeiro']
cantidadDemillas =['100','150','200','250','300','350','400','450','500'] 

function calculadora(consultaDeMillas) {
    while (consultaDeMillas !== "ESC") {
        consultaDeMillas = prompt("Consulta el estado de tus millas");
        if (parseInt(consultaDeMillas) >= 100 && parseInt(consultaDeMillas) < 150) {
            alert("Puedes canjearla por un vuelo a Chile");
        } else if (
            parseInt(consultaDeMillas) >= 150 &&
            parseInt(consultaDeMillas) < 200
        ) {
            alert("Puedes canjearlo por un vuelo a Uruguay");
        } else if (
            parseInt(consultaDeMillas) >= 200 &&
            parseInt(consultaDeMillas) < 250
        ) {
            alert("Puedes canjearlo por un vuelo a Ecuador");
        } else if (
            parseInt(consultaDeMillas) >= 300 &&
            parseInt(consultaDeMillas) < 350
        ) {
            alert("Puedes canjearlo por un vuelo a Brasil");
        } else if (
            parseInt(consultaDeMillas) >= 350 &&
            parseInt(consultaDeMillas) < 400
        ) {
            alert("Puedes canjearlo por un vuelo a Panama");
        } else if (
            parseInt(consultaDeMillas) >= 400 &&
            parseInt(consultaDeMillas) < 500
        ) {
            alert("Puedes canjearlo por un vuelo a Francia");
        } else {
            alert("Lo sentimos, no tenes las millas disponibles para ese vuelo");
            alert("No pudimos validar tu codigo, vuelve a intentarlo");
        } 
    }
}

calculadora();

function millas(cantidadDeMillas) {
    while (cantidadDeMillas !== "ESC") {
        cantidadDeMillas = prompt("Ingresa tus millas para seleccionar la tarifa");
        if (parseInt(cantidadDeMillas) >= 100 && parseInt(cantidadDeMillas) < 150) {
            alert("Clase turista");
        } else if (
            parseInt(cantidadDeMillas) >= 150 && parseInt(cantidadDeMillas) < 200
        ) {
            alert("Clase club economy")
        } else if (
            parseInt(cantidadDeMillas) >= 200 &&
            parseInt(cantidadDeMillas) < 500
        ) {
            alert("Clase business")
        } else {
            alert("Lo sentimos no tenes la millas disponibles para esa tarifa")
        }
    }
}

millas();

ArrayPlanificador1 = ['destino']
    do {
        destino = prompt('Seleccione un destino');
        if (destino === "fin" || destino === "FIN" || destino === "Fin") {
            break;
        } else {
            aeropuertoSalida = prompt('Ingrese aeropuerto de salida');
            aeropuertoDeLlegada = prompt('Ingrese aeropuerto de llegada');
            alert (' ¡Bienvenido a bordo,disfrute de su vuelo!'); 
            ArrayPlanificador1.push(new destino(aeropuertoSalida, aeropuertoDeLlegada))
                
        }
    } while (destino === "fin" || destino === "FIN" || destino === "Fin");

console.log(ArrayPlanificador1);
    

    

