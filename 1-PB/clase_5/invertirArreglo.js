"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var n = rls.questionInt("cantidad de elementos: ");
var arregloUsuario = new Array(n);
var arregloInvertido = new Array(n);
var i = 0;
for (i; i < n; i++) {
    arregloUsuario[i] = rls.questionInt("Ingrese un valor para la posicion " + i + " :");
    arregloInvertido[n - 1 - i] = arregloUsuario[i];
}
console.log("La lista de elementos es: ", arregloUsuario, ",La invertida es: ", arregloInvertido);
