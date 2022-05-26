import * as rls from "readline-sync";
 let cantidadElementos: number= (rls.questionInt('Ingresar la cantidad de elementos: '));
 let positivos:number =0;
 let negativos: number =0;
 let cero: number = 0;
 let arregloElementos: number [] = new Array (cantidadElementos);
 let contador: number =0;
    for (contador; contador < cantidadElementos; contador ++ ){

       arregloElementos [contador]= rls.questionInt("numero al elemento "+contador+" : ");
    if (arregloElementos[contador]>0){
        positivos++;  }   
    else if (arregloElementos[contador]<0){
        negativos++; } else{
        cero++; } }
 console.log('los elementos son:', arregloElementos);
 console.log('los numeros positivos son:', positivos);
 console.log('los numeros negativos son:', negativos);
 console.log('los CEROS son:', cero);