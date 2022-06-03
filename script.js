//Desafio obligatorio clase 4

function calculadora(consultaDeMillas) {
    while (consultaDeMillas !== "ESC") {
        consultaDeMillas = prompt("Consulta el estado de tus millas");
        consultaDeMillas = parseInt(consultaDeMillas);
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
            parseInt(consultaDeMillas) < 40
        ) {
            alert("Puedes canjearlo por un vuelo a Francia");
        } else {
            alert("Lo sentimos, no pudimos validar ese codigo");
        }
    }
}

calculadora();

