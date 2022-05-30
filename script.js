// Desafio obligatorio clase 4

function calculadoraDeMillas(operacion, x, y) {
    if(operacion == "suma") {
    return x + y    
    } else if(operacion == "resta") {
    return x - y 
    } else if(operacion == "multiplicacion") {
    return x * y       
    } else if(operacion == "division") {
    return x / y   
    } else if (operacion == "exponenciacion") {
    return x ** y
    } else if (operacion == "resto") {
    return x % y
    } else {
    return  -1
    }
}

console.log(calculadoraDeMillas("suma", 3, 6));
console.log(calculadoraDeMillas("resta", 3, 6));
console.log(calculadoraDeMillas("multiplicacion", 3, 6));
console.log(calculadoraDeMillas("division", 3, 6));
console.log(calculadoraDeMillas("exponenciacion", 3, 6));
console.log(calculadoraDeMillas("resto", 3, 6));