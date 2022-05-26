import * as rls from 'readline-sync';
 let clave : string ; 
 let intento, contador : number ;
contador = 0 ;
 intento = 1 ;
console.log ("ingrese la clave tenes 3 intentos");
   while (contador <3 ){  
         clave = rls.question ("ingrese la clave porfavor") ;      
          if (clave =="eureka") {
           break ; 
    } else (clave != " eureka" ); {
          contador = contador + 1
          intento = intento + 1 
          console.log ("clave incorrecta")
        }      
         if (contador == 3 ){
            console.log ("se acabaron los intentos");
        } 
}
  
