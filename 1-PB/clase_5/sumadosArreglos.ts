import *as rls from 'readline-sync'
     let vectora : number[] = new Array (6);
     let vectorb : number[] = new Array (6);
     let SumaVectores : number [] = new Array (6)
for (let i = 0; i < 6; i++) { 
    vectora[i] = rls.questionFloat(`Ingrese el valor del vector uno que ira en la posicion ${i+1}: `);
    vectorb[i] = rls.questionFloat(`Ingrese el valor del vector dos que ira en la posicion ${i+1}: `);
    SumaVectores [i] = vectora[i] + vectorb[i] }
console.log(`total de la suma, en sus respectivas posiciones, almacena en el nuevo vector los siguientes valores: ${SumaVectores}`)