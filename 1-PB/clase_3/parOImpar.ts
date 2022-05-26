import * as rls from 'readline-sync';
let numero : number = rls.questionInt("ingrese el numero que desea verificar si es par o impar: ");
while (numero == 0){
    numero =rls.question ("ingrese numero que no seaa 0");
}
if (0 == numero %2){
    console.log ("su numero es par");
}
else
    console.log ("su numero");
    