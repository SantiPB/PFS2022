"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var vector1 = new Array(6);
var vector2 = new Array(6);
var SumaVectores = new Array(6);
for (var i = 0; i < 6; i++) {
    vector1[i] = rls.questionFloat("Ingrese el valor del vector uno que ira en la posicion ".concat(i + 1, ": "));
    vector2[i] = rls.questionFloat("Ingrese el valor del vector dos que ira en la posicion ".concat(i + 1, ": "));
    SumaVectores[i] = vector1[i] + vector2[i];
}
console.log("total de la suma, en sus respectivas posiciones, almacena en el nuevo vector los siguientes valores: ".concat(SumaVectores));
