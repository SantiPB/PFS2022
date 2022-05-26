import * as readline from 'readline-sync' 
function esMultiplo (numero1 : number, numero2 : number) : boolean {
    if (numero1 % numero2 == 0){
        return true;} 
        else { return false;
        }} 
  let numero1 : number = readline.questionInt("ponga el primer numero: ");
  let numero2 : number = readline.questionInt("ponga el segundo numero: ");
  console.log(esMultiplo(numero1, numero2));