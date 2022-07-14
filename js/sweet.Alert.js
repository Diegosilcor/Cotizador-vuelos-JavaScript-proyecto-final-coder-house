//SWEET ALERT-HOME

Swal.fire({
  title: "Bienvenido a Radar Flight",
  text: "Selecciona tu pais",
  background: "rgba(255, 255, 255, .9)",
  confirmButtonText: "Seleccionar",
  footer: "Copyright © 2022.Todos los derechos reservados. Radar flight",
  padding: "1rem",
  backdrop: "true",
  allowOutsideClick: "false",
  allowEscapeKey: "false",
  allowEnterKey: "false",
  stopKeydownPropagation: "false",

  input: "select",
  inputPlaceholder: "Paises",
  inputValue: "",
  inputOptions: {
    argentina: "Argentina",
    brasil: "Brasil",
    chile: "Chile",
    paraguay: "Paraguay",
    uruguay: "Uruguay",
    estadosUnidos: "Estados Unidos",
    canada: "Canada",
    francia: "Francia",
    alemania: "Alemania",
    españa: "España",
    belgica: "Belgica",
    china: "China",
    japon: "Japon",
    nuevaZelanda: "Nueva Zelanda",
    australia: "Australia",
  },
  customClass: {
    text: "text-class",
    container: "contenido-class",
    popup: "popup-class",
    title: "title-class",
    content: "content-class",
    input: "input-class",
    confirmButton: "boton-class",
    cancelButton: "cancel-class",
    footer: "footer-class",
  },

  confirmButtonColor: "#0000CD",
  confirmButtonAriaLabel: "Confirmar",

  showCancelButton: "true",
  cancelButtonText: "Cancelar",
  cancelButtonColor: "#A52A2A",
  cancelButtonAriaLabel: "Cancelar",
});
