// SEGUNDA PRE ENTREGA DE TRABAJO FINAL DESAFIO COPLEMENTARIO CLASE 12. JAVASCRIPT
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
let d = document;
let presupuesto;
let nombre;
let email;

//CONSTANTES
const precioAmerica = 1000;
let precioEuropa = 0;
let precioAsia = 0;
let precioOceania = 0;
const descuento = 0.9;
const iva = 0.21;

// VARIABLE PARA JSON
let solicitanteJSON = {
  nombre: "",
  email: "",
  total: null,
  america: "",
  europa: "",
  asia: "",
  oceania: "",
  tituloAmerica: null,
  tituloEuropa: "",
  tituloAsia: "",
  tituloOceania: "",
  cotizar: "",
  info: "",
};

//FUNCION PARA SOLICITAR AMERICA
function solicitarAmerica() {
  tipo = "AMERICA";
  america = d.getElementById("america").value;
  resultadoAmerica = calculos(america, tipo, precioAmerica);
  return resultadoAmerica;
}

//FUNCION PARA SOLICITAR EUROPA
function solicitarEuropa() {
  tipo = "Paquetes EUROPA";
  europa = document.querySelector("#Europa").value;
  filtroPrecioEuropa = productosEuropa.find(
    (elem) => elem.seleccion.toUpperCase() == europa
  );
  if (filtroPrecioEuropa) {
    console.log(
      "Paquete Europa seleccionado: " +
        europa +
        " | Precio:  " +
        filtroPrecioEuropa.precio
    );
    precioEuropa = parseInt(filtroPrecioEuropa.precio);
    cantidad = 1;
  } else {
    console.log("No seleccionó Europa: " + europa);
    cantidad = 0;
  }
  resultadoEuropa = calculos(cantidad, tipo, precioEuropa);
  return resultadoEuropa;
}

//FUNCION PARA SOLICITAR ASIA
function solicitarAsia() {
  tipo = "Paquetes ASIA";
  asia = document.querySelector("#Asia").value;
  filtroPrecioAsia = productosAsia.find(
    (elem) => elem.seleccion.toUpperCase() == asia
  );
  if (filtroPrecioAsia) {
    console.log(
      "Paquete Asia seleccionado: " +
        asia +
        " | Precio:  " +
        filtroPrecioAsia.precio
    );
    precioAsia = parseInt(filtroPrecioAsia.precio);
    cantidad = 1;
  } else {
    console.log("No seleccionó paquete Asia: " + asia);
    cantidad = 0;
  }
  resultadoAsia = calculos(cantidad, tipo, precioAsia);
  return resultadoAsia;
}

//FUNCION PARA SOLICITAR OCEANIA
function solicitarOceania() {
  tipo = "Paquetes OCEANIA";
  oceania = document.querySelector("#Oceania").value;
  filtroPrecioOceania = productosOceania.find(
    (elem) => elem.seleccion.toUpperCase() == oceania
  );
  if (filtroPrecioOceania) {
    console.log(
      "Paquete Oceania seleccionado: " +
        oceania +
        " | Precio:  " +
        filtroPrecioOceania.precio
    );
    precioOceania = parseInt(filtroPrecioOceania.precio);
    cantidad = 1;
  } else {
    console.log("No seleccionó paquete Oceania: " + oceania);
    cantidad = 0;
  }
  resultadoOceania = calculos(cantidad, tipo, precioOceania);
  return resultadoOceania;
}

//OBJETO COTIZACION
function Cotizacion(cantAmerica, cantEuropa, cantAsia, cantOceania) {
  this.cantAmerica = cantAmerica;
  this.cantEuropa = cantEuropa;
  this.cantAsia = cantAsia;
  this.cantOceania = cantOceania;

  //COMPONENTES DEL OBJETO COTIZACION
  this.composicion = function () {
    console.log(
      "\n\nMi cotización finalmente se compuso de: " +
        "\n\n" +
        cantAmerica +
        " america" +
        "\n" +
        cantEuropa +
        " Paquetes europa" +
        "\n" +
        cantAsia +
        " Paquetes asia" +
        "\n" +
        cantOceania +
        " Paquetes oceania"
    );
  };

  //METODO PERTENECIENTE AL OBJETO PARA CALCULAR EL VALOR DE LA COTIZACION

  this.cotizar = function () {
    total =
      resultadoAmerica + resultadoEuropa + resultadoAsia + resultadoOceania;
    totalIva = total + total * iva;

    console.log(
      "\n\nCOTIZACIÓN FINAL\n\nAMERICA | Cantidad: " +
        cantAmerica +
        " / Subtotal: " +
        resultadoAmerica +
        " PESOS" +
        "\nPAQUETES EUROPA | Cantidad: " +
        cantEuropa +
        " / Subtotal: " +
        resultadoEuropa +
        " PESOS" +
        "\nPAQUETES ASIA | Cantidad: " +
        cantAsia +
        " / Subtotal: " +
        resultadoAsia +
        " PESOS" +
        "\nPAQUETES OCEANIA | Cantidad: " +
        cantOceania +
        " / Subtotal: " +
        resultadoOceania +
        " PESOS" +
        "\n\nTOTAL: " +
        total +
        " PESOS" +
        "\nTOTAL + IVA (21%): " +
        totalIva +
        " PESOS"
    );
  };
}

//LIMPIA EL FORMULARIO llamado desde el Boton LIMPIAR del DOM
function remover() {
  $("#formulario")[0].reset();
  console.log("JQUERY - Se reinicia el formulario");
}

//FUNCION QUE INSTANCIA AL OBJETO Y CALCULA EN ÉL LA COTIZACION FINAL

function totalCotizacion() {
  if (
    $("#nombre").val().length > 0 &&
    $("#email").val().length > 0 &&
    $("#america").val().length > 0 &&
    validarEmail($("#email").val()) == true
  ) {
    solicitarAmerica();
    solicitarEuropa();
    solicitarAsia();
    solicitarOceania();

    //INSTANCIA DEL OBJETO COTIZACION
    let miCotizacion = new Cotizacion(america, europa, asia, oceania);
    miCotizacion.cotizar();

    //JSON Y SESSIONSTORAGE
    guardarJSON(totalIva);
    mostrarSTORAGE();
    recuperarJSON();

    const mostrarTodo = document.querySelector("#presupuesto div");
    if (mostrarTodo != null) {
      mostrarTodo.remove();
    }

    agregar();
    return true;
  } else {
    if (!$("#nombre").val().length) {
      $("#nombre").focus();
    } else {
      if (!$("#email").val().length) {
        $("#email").focus();
      } else {
        if (
          !$("#america").val().length &&
          $("#componentes").css("display") == "none"
        ) {
          $("#america").focus();
        } else {
          if (!$("#america").val().length) {
            $("#america").focus();
          }
        }
      }
    }
    return false;
  }
}

//FUNCIONES JSON Y LOCALSTORAGE
function guardarJSON(total) {
  solicitanteJSON.nombre = d.getElementById("nombre").value;
  solicitanteJSON.email = d.getElementById("email").value;
  solicitanteJSON.total = total;
  solicitanteJSON.america = d.getElementById("america").value;
  solicitanteJSON.europa = d.getElementById("Europa").value;
  solicitanteJSON.asia = d.getElementById("Asia").value;
  solicitanteJSON.oceania = d.getElementById("Oceania").value;
  solicitanteJSON.tituloAmerica = d.getElementById("tituloAmerica").value;
  solicitanteJSON.tituloEuropa = d.getElementById("tituloEuropa").value;
  solicitanteJSON.tituloAsia = d.getElementById("tituloAsia").value;
  solicitanteJSON.tituloOceania = d.getElementById("tituloOceania").value;
  solicitanteJSON.cotizar = d.getElementById("cotizar").value;
  solicitanteJSON.info = d.getElementById("info").value;
  sessionStorage.setItem(
    "DatosPersonales",
    btoa(JSON.stringify(solicitanteJSON))
  );
}

function recuperarJSON() {
  solicitanteJSON = JSON.parse(atob(sessionStorage.getItem("DatosPersonales")));

  d.getElementById("nombre").value = solicitanteJSON.nombre.toUpperCase();
  d.getElementById("email").value = solicitanteJSON.email;

  console.log("\n\nSOLICITANTE EN SESIÓN:");
  console.log(
    "\nN Nombre: " +
      solicitanteJSON["nombre"] +
      "\nCorreo electrónico: " +
      solicitanteJSON["email"] +
      "\nTotal + IVA: " +
      solicitanteJSON["total"] +
      " PESOS\n"
  );
}

function mostrarSTORAGE() {
  console.log(
    "\n\nMostrando eL sessionStorage codificado:\n\n" +
      sessionStorage.getItem("DatosPersonales")
  );
}

//FUNCIÓN QUE AGREGA AL HTML ELEMENTOS CON LOS DATOS DE LA COTIIZACIÓN
function agregar() {
  let elementoCotizacion;
  let elementoNombre;
  let elementoEmail;
  let elementoAmerica;
  let elementoEuropa;
  let elementoAsia;
  let elementoOceania;
  let elementoTotal;
  let elementoTotalIva;
  let espacioBr;
  let separadorHr;

  presupuesto = d.getElementById("presupuesto");
  nombre = d.getElementById("nombre");
  email = d.getElementById("email");

  // Elementos que serán creados en el HTML
  elementoCotizacion = d.createElement("h1");
  elementoNombre = d.createElement("p");
  elementoEmail = d.createElement("p");
  elementoAmerica = d.createElement("p");
  elementoEuropa = d.createElement("p");
  elementoAsia = d.createElement("p");
  elementoOceania = d.createElement("p");
  elementoTotal = d.createElement("h2");
  elementoTotalIva = d.createElement("h2");
  espacioBr = d.createElement("br");

  elementoCotizacion.id = "tituloPresupuesto";
  elementoNombre.id = "nombrePresupuesto";
  elementoEmail.id = "emailPresupuesto";
  elementoAmerica.id = "americaPresupuesto";
  elementoEuropa.id = "europaPresupuesto";
  elementoAsia.id = "asiaPresupuesto";
  elementoOceania.id = "oceaniaPresupuesto";
  elementoTotal.id = "totalPresupuesto";
  elementoTotalIva.id = "totalIvaPresupuesto";

  elementoCotizacion.innerText = "Presupuesto Final";
  elementoNombre.innerText = "Nombre: " + nombre.value;
  elementoEmail.innerText = "Correo electrónico: " + email.value;
  elementoAmerica.innerText =
    "America: " + america + " / " + resultadoAmerica + " PESOS";
  elementoEuropa.innerText =
    "Europa: " + europa.toLowerCase() + " / " + resultadoEuropa + " PESOS";
  elementoAsia.innerText =
    "Asia " + asia.toLowerCase() + " / " + resultadoAsia + " PESOS";
  elementoOceania.innerText =
    "Oceania: " + oceania.toLowerCase() + " / " + resultadoOceania + " PESOS";
  elementoTotal.innerText = "TOTAL: " + total + " PESOS";
  elementoTotalIva.innerText = "TOTAL + IVA (21%): " + totalIva + " PESOS";

  const divResultado = document.createElement("div");
  divResultado.id = "divResultado";
  divResultado.appendChild(elementoCotizacion);
  divResultado.appendChild(elementoNombre);
  divResultado.appendChild(elementoEmail);
  divResultado.appendChild(elementoAmerica);
  divResultado.appendChild(elementoEuropa);
  divResultado.appendChild(elementoAsia);
  divResultado.appendChild(elementoOceania);
  divResultado.appendChild(elementoTotal);
  divResultado.appendChild(elementoTotalIva);
  divResultado.appendChild(espacioBr);
  presupuesto.appendChild(divResultado);
}

//ARREGLO RESUMEN DE CANTIDADES SOLICITADAS
function arregloResumenCantidades() {
  let partesCotizacion = [];
  partesCotizacion.push("america: " + america);
  partesCotizacion.push("Paquetes Europa " + europa);
  partesCotizacion.push("Paquetes Asia " + asia);
  partesCotizacion.push("Paquetes Oceania: " + oceania);
  partesCotizacion = partesCotizacion.join(" / ");
  return partesCotizacion;
}

// VALIDAR NUMERO
function noEsNumero(numero, tipo) {
  if (isNaN(numero) || numero < 0) {
    alert(
      "Debes ingresar una Cantidad de " +
        tipo +
        " válido\nHaz una nueva solicitud"
    );
  }
}

// FUNCION PARA CALCULAR EL COSTO DE LAS SOLICITUDES
function calculos(cantidad, tipo, precio) {
  let resultado;
  if (cantidad == 1 || cantidad == 0) {
    resultado = cantidad * precio;
    console.log(
      "Cantidad de " +
        tipo +
        ": " +
        cantidad +
        " | Precio: " +
        resultado +
        " PESOS"
    );
  }
  if (cantidad > 1) {
    resultado = cantidad * (precio * descuento);
    console.log(
      "Cantidad de " +
        tipo +
        ": " +
        cantidad +
        " | Precio: " +
        resultado +
        " PESOS"
    );
  }
  return resultado;
}
// EJECUTO UNA FUNCIÓN VALIDAR EMAIL YA QUE AL TENER EVENT EN EL ONCLICK DEL BOTÓN COTIZAR
function validarEmail(valor) {
  if (
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
      valor
    )
  ) {
    return true;
  } else {
    alert("La dirección correo electrónico es incorrecta.");
    $("#email").focus();
    return false;
  }
}

document.addEventListener("DOMContentLoaded", router);
window.addEventListener("hashchange", router);

// CON AJAX

const PaginaAjaxTestimonios = {
  render: function () {
    $.ajax({
      type: "GET",
      url: "js/testimonios.json",
      dataType: "json",
      success: function (data, status, jqXHR) {
        console.log(jqXHR);
        let llenado = "";
        for (const persona of data) {
          llenado += `
                    <div>
                        <h1 class="first"><br>${persona.first_name} ${persona.last_name}</h1>
                        <p class="testimonios">"${persona.testimonio}"</p>
                        <h2 class="first">${persona.email}</h2><br>
                    </div>`;
        }

        $("#pages").html(`
                <div class="frame resaltadoTestimonios">
                ${llenado}
                </div>
                <div class="frame">
                <br><img src="" alt="">
                </div>
                `);

        console.log(`AJAX Testimonios -> Status: ${status}`);
      },
      error: function (jqXHR) {
        console.log(jqXHR);
      },
    });
  },
};

const PaginaSolicitudes = {
  render: function () {
    return formularioHTML;
  },
};

const HomePage = {
  render: function () {
    return `
        <div id="inicio">
        </div>
        `;
  },
};

const ErrorComponent = {
  render: function () {
    return `
        <div id="error">
            <br>
            <h1 class="first">:(</h1>
            <p class="footer">--- Contenido no encontrado ---</p>
            <br>
            <br>
        </div>
        `;
  },
};

const routes = [
  { path: "/solicitudes", component: PaginaSolicitudes },
  { path: "/", component: HomePage },
  { path: "/testimonios", component: PaginaAjaxTestimonios },
];
const parseLocation = () => location.hash.slice(1).toLowerCase() || "/";
const findComponent = function (path, routes) {
  return (
    routes.find((routes) =>
      routes.path.match(new RegExp(`^\\${path}$`, "gm"))
    ) || undefined
  );
};
function router() {
  const path = parseLocation();
  console.log("SPA - este es el path: " + path);
  const { component = ErrorComponent } = findComponent(path, routes) || {};
  $("#pages").html(component.render());
  return path;
}

//FUNCIONES PARA LLENAR  LOS OPTION DE LOS SELECT DEL HTML DESDE DB.JS
function cargarContenido(array, select) {
  array.forEach((element) => {
    const option = document.createElement("option");
    option.value = element.toUpperCase();
    option.textContent = element;
    select.appendChild(option);
  });
}
function listaSelect(array, key) {
  let listado = [];
  array.forEach((elem) => {
    if (!listado.includes(elem[key])) {
      listado.push(elem[key]);
    }
  });
  return listado.sort();
}

// EVENTOS JQUERY

$(function () {
  $("html body").on({
    keypress: function (event) {
      if (event.keyCode === 13) {
        if ($("#nombre").val().length == "") {
          console.log("JQUERY - Debe ingresar su nombre");
          $("#nombre").focus();
        } else {
          if ($("#email").val().length == "") {
            console.log("JQUERY - Debe ingresar un correo electrónico");
            $("#email").focus();
          } else {
            if ($("#america").val().length == "") {
              console.log("JQUERY - Debe ingresar la cantidad de pasajes");
              $("#america").focus();
            }
          }
        }
      }
    },
  });

  //MUESTRO LAS OPCIONES A COTIZAR AL HACER CLIC EN SIGUIENTE
  $("div #pages").on("click", "legend#info", function () {
    //$('#info').click(function () {

    // console.log("JQUERY - Activo Ventana con Información de Precios")
    // alert("LISTADO DE VUELOS:\n\n" +
    //     "VUELOS\n" +
    //     "-1 Vuelos | Precio: " + precioAmerica + " PESOS\n" +
    //     "Descuento del 10% para cantidades superiores a 1 logo\n\n" +
    //     "PAQUETES EUROPA:\n" +
    //     "-3 pasajes, 3 asientos, 3 equipajes | Precio: 3000 PESOS\n" +
    //     "-5 pasajes, 5 asientos, 5 equipajes  | Precio: 5000 PESOS\n" +
    //     "-7 pasajes, 7 asientos, 7 equipajes  | Precio: 7000 PESOS\n\n" +
    //     "PAQUETES ASIA:\n" +
    //     "-2 perosnas | Precio: 5000  PESOS\n" +
    //     "-4 personas | Precio: 8000 PESOS\n" +
    //     "-6 personas | Precio: 10000 PESOS\n\n" +
    //     "PAQUETES OCEANIA:\n" +
    //     "-4 personas, 4 asientos, 4 equipaje | Precio: 7000 PESOS\n" +
    //     "-6 personas, 6 asientos, 6 equipaje | Precio: 9000 PESOS\n" +
    //     "-8 personas, 8 asientos, 8 equipaje | Precio: 12000 PESOS\n\n");

    //Transición habia abajo al mostrar los componentes que se pueden solicitar
    $("#componentes").slideDown(2000, function () {
      console.log("JQUERY - Mostrando los componentes de la cotización");
      $("html, body").animate(
        {
          scrollTop: $("#componentes").offset().top,
        },
        1000
      );
      console.log("JQUERY - Bajando con scroll a los componenetes");

      //LLENANDO LOS OPTION DE LOS SELECT DEL HTML DESDE DB.JS AL MOSTRAR DIV COMPONENTES

      const selectEuropa = document.getElementById("Europa");
      console.log("selectEuropa: " + selectEuropa.id);
      const optionEuropa = listaSelect(productosEuropa, "seleccion");
      cargarContenido(optionEuropa, selectEuropa);

      const selectAsia = document.getElementById("Asia");
      console.log("selectAsia: " + selectAsia.id);
      const optionAsia = listaSelect(productosAsia, "seleccion");
      cargarContenido(optionAsia, selectAsia);

      const selectOceania = document.getElementById("Oceania");
      console.log("selectOceania: " + selectOceania.id);
      const optionOceania = listaSelect(productosOceania, "seleccion");
      cargarContenido(optionOceania, selectOceania);
    });
  });

  // PREVENGO RECARGA DE FORMULARIO
  $("div #pages").on("click", "button#cotizar", function (e) {
    // $('#cotizar').click(function (e) {
    e.preventDefault();
  });

  // MUESTRO Y OCULTO DIVS HTML - EVENTOS ANIDADOS, SCROLL Y USO DE FUNCIONES
  $("div #pages").on("click", "button#cotizar", function () {
    if (totalCotizacion()) {
      $("#indicacion").fadeOut("slow");
      console.log('\nJQUERY - Oculto el div "Acá se mostrará el resultado"');
      console.log("Se agregan los elementos de la cotización");

      $("#presupuesto").show("slow", function () {
        console.log("JQUERY - Se muestra el div de Presupuesto");
      });

      $("#adicional").show("slow", function () {
        console.log("JQUERY - Se muestra el div de Agradecimiento");
        $("html, body").animate(
          {
            scrollTop: $("#presupuesto").offset().top + 100,
          },
          1000
        );

        console.log("JQUERY - Bajo hasta el resultado de la cotización");
      });
      const divAdicional = $("#adicional");
      divAdicional.empty();

      //AGREGO ELEMENTOS AL DOM AJAX Y HACIENDO LECTURA EN ADICIONAL.JSON
      $.ajax({
        url: "js/adicional.json",
        success: function (data, status, jqXHR) {
          data.forEach((element) => {
            divAdicional.append(
              `<br><img class="imgAjax" src="${element.imagen}" alt="">`
            );
            console.log("AJAX - Thank you picture: " + element.imagen);
          });
          console.log(`AJAX Status: ${status}`);
        },
        error: function (jqXHR, status, error) {
          console.log("Error");
          console.log(jqXHR);
          console.log(`Error -> Status: ${status} - Error: ${error}`);
        },
      });
    }
  });
});


// TOASTIFY
// DESAFIO COMPLEMENTARIO CLASE 13
const btn = document.getElementById("btn-click");
btn.addEventListener("click", () => {
    Toastify({
        text: "Bienvenido a tu compra de vuelos",
        duration: 2500,
        destination: "https://www.flightradar24.com/40.61,-3.22/9",
        gravity: "bottom",
        position: "center",
        style: {
            background:  "linear-gradient(to right, #DEB887, #000000)",
        }
        
    }).showToast();
})