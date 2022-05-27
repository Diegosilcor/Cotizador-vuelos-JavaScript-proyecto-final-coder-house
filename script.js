// Clase 3 desafio complementario

let ingresarComida = prompt("¿Que deseas comer hoy?");
let cantidad = parseInt(prompt ("¿Cuántos quieres comprar?"));
while (ingresarComida != 'ESC') {
    switch (ingresarComida) {
        case "Hamburguesa":
            alert("Tu pedido esta en proceso");
            break;
        case "Hamburguesa doble queso":
            alert("Tu pedido esta en proceso");
            break;
        case "Pizza":
            alert("Tu pedido esta en proceso");
            break;
        case "Hot dog":
            alert("Tu pedido esta en proceso");
            break;
        case "Pollo frito":
            alert("Tu pedido esta en proceso");
            break;
        default:
            alert("Lo sentimos, no tenemos disponible ese menu");
            break;
    }
    ingresarComida = prompt("¿Que deseas comer hoy?");
    cantidad = parseInt(prompt ("¿Cuántos quieres comprar?"));
}
