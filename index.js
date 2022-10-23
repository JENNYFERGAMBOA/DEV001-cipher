import cipher from './cipher.js';

window.addEventListener("load",inicio,true);
//Función de inicio que captura los datos y transforma el  input string en mayusculas
function inicio(){
  document.getElementById("mensajeADecifrar").addEventListener("keyup",function(){
    this.value=this.value.toUpperCase();
  },
  true
  );

  document.getElementById("cifrar").addEventListener("click",function(){
    let string= document.getElementById("mensajeADecifrar").value;
    let offset= document.getElementById("desplazamiento").value;
    document.getElementById("textoResultado").value=cipher.encode(offset,string); 
  },
  true
  )
  document.getElementById("descifrar").addEventListener("click",function(){
    let string= document.getElementById("mensajeADecifrar").value;
    let offset= document.getElementById("desplazamiento").value;
    document.getElementById("textoResultado").value=cipher.decode(offset,string);
  },
  true
  )
}


//console.log(cipher);
