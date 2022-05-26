"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
function esDivisor(numero, divisor) {
    if (numero % divisor == 0) {
        return true;
    }
    else {
        return false;
    }
}
function cantidadDeDivisores(numero) {
    contador = 0;
    for (divisor = 0; divisor <= numero; divisor++)
        if (esDivisor(numero, divisor)) {
            contador++;
        }
    return contador;
}
var contador, divisor;
var numero = rls.questionInt("Ingrese un numero para saber sus divisores (cant.): ");
