// Desafio obligatorio clase 4

function calculadora(consultaDeMillas) {
  while (consultaDeMillas !== "ESC") {
    consultaDeMillas = prompt("Consulta el estado de tus millas");
    consultaDeMillas = parseInt(consultaDeMillas);

    if (consultaDeMillas >= 100 && consultaDeMillas < 150) {
      alert("Puedes canjearla por un vuelo a Chile");
    } else if (consultaDeMillas >= 150 && consultaDeMillas < 200) {
      alert("Puedes canjearlo por un vuelo a Uruguay");
    } else if (consultaDeMillas >= 200 && consultaDeMillas < 250) {
      alert("Puedes canjearlo por un vuelo a Ecuador");
    } else if (consultaDeMillas >= 250 && consultaDeMillas < 300) {
      alert("Puedes canjearlo por un vuelo a Brasil");
    } else if (consultaDeMillas >= 300 && consultaDeMillas < 350) {
      alert("Puedes canjearlo por un vuelo a Panama");
    } else if (consultaDeMillas >= 400 && consultaDeMillas < 450) {
      alert("Puedes canjearlo por un vuelo a Francia");
    } else {
      alert("Lo sentimos, no pudimos validar ese codigo");
    }
  }
}

calculadora();
