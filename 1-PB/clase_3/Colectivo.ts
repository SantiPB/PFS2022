import * as rls from "readline-sync";
 let llegoColectivo: string ;
   console.log("esperando el colectivo");
  llegoColectivo = rls.question("llego el colecvtico?(s/n): ");
      while (llegoColectivo=="N") {
   console.log ("esperando el colectivo");
  llegoColectivo = rls.question ("llego el colectivo? (s/n): ");
}
   console.log("llego el colectivo") 
   