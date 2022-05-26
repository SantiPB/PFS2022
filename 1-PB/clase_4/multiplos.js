"use strict";
exports.__esModule = true;
var readline = require("readline-sync");
function esMultiplo(numero1, numero2) {
    if (numero1 % numero2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
var numero1 = readline.questionInt("ponga el primer numero: ");
var numero2 = readline.questionInt("ponga el segundo numero: ");
