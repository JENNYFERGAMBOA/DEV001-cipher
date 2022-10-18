const cipher={
      //cifrado, los valores de encode son:offset y string
      encode:function(offset,string){
             if(offset===undefined|| string===undefined){
                  throw new TypeError ("Le falto escribir un dato")
             } else if (offset ===0|| string===typeof 0 ){
                  throw new TypeError ("Solo puede escribir letras")
             }
             else if (offset ===null|| string===null ){
                  throw new TypeError ("ingrese un valor valido")
             }
            //variable en la cual se ubica nuestro array de abc
            let abecedario= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            //variable en la que estara el mensaje cifrado
            let respuesta="";
            //le sacamos el modulo a el offset
            offset=(offset%26+26%26);

            if(string){
                  //mirara la longitud del texto a cifrar
                  for(let i=0;i<string.length;i++){
                        //mirara si la letra si esta en el abc
                        if(abecedario.indexOf(string[i]) !=-1){
                              //variable guardara la posicon de nuestra letra
                              //aqui se hace la suma de la letra con el offset y luego a llevo al modulo
                              let posicion=(abecedario.indexOf(string[i])+offset)%26;
                              //muestra el resultado, += es un operador de asignacion
                              respuesta+=abecedario[posicion];
                        }else{
                        respuesta+=string[i];
                        }
                  }
            }
            return respuesta;

      },

     //los valores de decode son:offset y string
       decode: function(offset,string){
            //funcion typeError -- tco usar tres ya que faltaba el del valor nulo
            if(offset===undefined|| string===undefined){
                  throw new TypeError ("Le falto escribir un dato")
            } else if (offset ===0|| string===typeof 0){
                  throw new TypeError ("Solo puede escribir letras")
            }
            else if (offset ===null|| string===null ){
                  throw new TypeError ("ingrese un valor valido")
             }
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
                               //muestra el resultado, += es un operador de asignacion
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
function validarNumeros(validar){
      if((validar.charCode>= 48)(validar.charCode<= 57)){
            return true;
      }
            return false;
}
    validarNumeros;

//console.log(cipher.value);
export default cipher;
