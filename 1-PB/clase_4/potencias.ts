import * as rls from "readline-sync"
  let base : number = rls.questionInt ("poner la base: ")
  let exponente: number = rls.questionInt ("poner el exponente: ")
function potencia(base, exponente) {
  let resultado: number = 1;
    for (let i: number = 1; i <= exponente; i++){
        resultado = base * resultado;}
    return resultado } 