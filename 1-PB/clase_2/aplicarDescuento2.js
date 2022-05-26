"use strict";
exports.__esModule = true;
var rl = require("readline-sync");
var precioProducto = rl.questionFloat("Ingrese el precio");
var cantidadProducto = rl.questionFloat("Ingrese la ");
var precioFinal;
if (precioProducto * cantidadProducto > 100) {
    precioFinal = precioProducto * cantidadProducto;
}
console.log("El precio final del producto es:", precioFinal);
