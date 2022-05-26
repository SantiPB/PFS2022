"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var cantidadProducto = rls.questionInt("Cantidad de productos a comprar (Misma marca): ");
var precioProducto = rls.questionFloat("Dinero a pagar por producto (Unidad/Unidad con centecimas): ");
var compra = cantidadProducto * precioProducto;
if (compra > 1000) {
    var compraDescontada = compra - compra * 0.1;
    console.log("Su compra total fue de: " + compra + "$.", "por lo que se le hizo un descuento del 10%, por lo que el total actual es de:" + compraDescontada + "$.");
}
else {
    console.log("Su compra total fue de: " + compra + "$. Aproveche la oferta para conseguir un descuento del 10% al hacer una compra superior a 1000$.");
}
