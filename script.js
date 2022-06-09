
let destino = ['Argentina', 'Estados Unidos', 'Chile', 'Brasil', 'Canada', 'Europa', 'Asia'];
let cantidad = [100, 150, 200, 250, 300, 350, 400, 500];
let aerolinea = ['Emirates', 'Aerolineas Argentinas', 'KLM', 'Iberia', 'Latam'];

const ConsultaDeMillas= ['aerolineas', 'destinos', 'millas'];
while (ConsultaDeMillas != "esc" || ConsultaDeMillas != "ESC" || ConsultaDeMillas != "Esc") {
    let destino = prompt('Ingrese su destino');
    let cantidad = prompt('Ingrese su cantidad de millas');
    let aerolinea = prompt('Ingrese la aerolinea seleccionada')
    
        consultaDeMillas = prompt("Consulta el estado de tus millas");
        if (parseInt(consultaDeMillas) >= 100 && parseInt(consultaDeMillas) < 150) {
            alert("Puedes canjearla por un vuelo a Chile");
        } else if (
            parseInt(consultaDeMillas) >= 150 &&
            parseInt(consultaDeMillas) < 200
        ) {
            alert("Puedes canjearlo por un vuelo a Argentina");
        } else if (
            parseInt(consultaDeMillas) >= 200 &&
            parseInt(consultaDeMillas) < 250
        ) {
            alert("Puedes canjearlo por un vuelo a Estados Unidos");
        } else if (
            parseInt(consultaDeMillas) >= 300 &&
            parseInt(consultaDeMillas) < 350
        ) {
            alert("Puedes canjearlo por un vuelo a Brasil");
        } else if (
            parseInt(consultaDeMillas) >= 350 &&
            parseInt(consultaDeMillas) < 400
        ) {
            alert("Puedes canjearlo por un vuelo a Canada");
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

