"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
console.log("Este programa mostrara la suma de todos los valores que compongan el arreglo. El mismo tendra tamaño y elementos asignados por el usuario.");
var n = rls.questionInt("Ingrese el tamaño que desea que tenga el arreglo (numero entero positivo): ");
while (n < 0) {
    n = rls.questionInt("Ingrese un numero valido: ");
}
var sumaElementos = 0;
var num = new Array(n);
for (var i = 0; i < n; i++) {
    num[i] = rls.questionFloat("Ingrese el elemento que se ubicara en la posicion ".concat(i + 1, ": "));
    sumaElementos = sumaElementos + num[i];
}
console.log("La suma de todos los elementos da un total de: ".concat(sumaElementos));
