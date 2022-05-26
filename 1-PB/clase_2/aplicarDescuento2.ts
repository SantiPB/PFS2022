import * as rl from "readline-sync";
let precioProducto : number = rl.questionFloat ("Ingrese el precio")
let cantidadProducto : number = rl .questionFloat("Ingrese la ")
let precioFinal : number 
if(precioProducto*cantidadProducto > 1000 )  {
    precioFinal = precioProducto*cantidadProducto 
}
console.log("El precio final del producto es:" , precioFinal)
