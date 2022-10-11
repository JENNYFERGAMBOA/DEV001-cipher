const cipher={
      //cifrado, los valores de encode son:offst y string
      encode:function(offset,string){
            //variable en la cual se ubica nuestro array de abc
            let abecedario= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            //variable en la que estara el mensaje cifrado
            let respuesta="";
            //le sacamos el modulo a la llave en caso de ser negativo
            offset=(offset%26+26%26);
            

      


            if(string){
                  //longitud del texto a cifrar
                  for(let i=0;i<string.length;i++){
                        //mirara si la letra si esta en el abc
                        if(abecedario.indexOf(string[i]) !=-1){
                              //variable guardara la posicon de nuestra letra
                              //aqui se hace la suma de la letra con el offset y luego a llevo al modulo
                              let posicion=(abecedario.indexOf(string[i])+offset)%26;
                              //muestra el resultado concatenado
                              respuesta+=abecedario[posicion];
                        }else{
                        respuesta+=string[i];
                        }
                  }
            }
            return respuesta;
      },




      
     //los valores de decode son:offst y string
       decode: function(offset,string){
               //variable en la cual se ubica nuestro array de abc
             let abecedario= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
             //variable en la que estara el mensaje cifrado
             let respuesta="";
             //le sacamos el modulo a la llave en caso de ser negativo
             offset=(offset%26-26)%26;

             if(string){
                   //longitud del texto a cifrar
                   for(let i=0;i<string.length;i++){
                         //mirara si la letra si esta en el abc
                         if(abecedario.indexOf(string[i]) !=-1){
                               //variable guardara la posicon de nuestra letra
                               //aqui se hace la suma de la letra con el offset y luego a llevo al modulo
                               let posicion=(abecedario.indexOf(string[i])-offset)%26;
                               //muestra el resultado concatenado
                               respuesta+=abecedario[posicion];
                         } else {
                               respuesta+=string[i];
                           }
                   }
             }
             return respuesta;
       }
};
//funcion para validar los numeros de desplazamiento ingresados por usuario
function validarNumeros(event){
      if(event.charCode>= 48 && event.charCode<= 57){
            return true;
      }
            return false;
}
    validarNumeros;
//console.log(cipher.value);   
export default cipher;
