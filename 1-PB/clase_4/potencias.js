"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var base = rls.questionInt("poner la base: ");
var exponente = rls.questionInt("poner el exponente: ");
function potencia(base, exponente) {
    var resultado = 1;
    for (var i = 1; i <= exponente; i++) {
        resultado = base * resultado;
    }
    return resultado;
}
