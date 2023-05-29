
function encriptar(){

var frase = document.getElementById('mensaje').value.toLowerCase();
  
 var frase1 = frase.replace(/[e]/igm,'enter');
 var frase1= frase1.replace(/[i]/igm,'imes');
 var frase1 = frase1.replace(/[a]/igm,'ai');
 var frase1 = frase1.replace(/[o]/igm,'ober');
 var frase1= frase1.replace(/[u]/igm,'ufat');


 document.getElementById("mensaje").focus();
  document.getElementById("texto").innerHTML=frase1;
  document.getElementById("muñeco").style.visibility="hidden";
  document.getElementById("mensaje").value="";
  
  }
   encriptar();


   function descencriptar(){

    document.getElementById("muñeco").style.visibility="visible";

    var frase2= document.getElementById("texto").value.toLowerCase();

   var frase3 = frase2.replace(/enter/igm,'e');
   var frase3= frase3.replace(/imes/igm,'i');
    var frase3 = frase3.replace(/ai/igm,'a');
    var frase3 = frase3.replace(/ober/igm,'o');
    var frase3= frase3.replace(/ufat/igm,'u');
    document.getElementById("textoN").innerHTML=frase3;
    document.getElementById("texto").value="";
   
   }
   descencriptar();


   function copiar(){
    let texto = document.getElementById("texto");
    texto.select();
    texto.setSelectionRange(0, 99999);
    texto= document.execCommand("copy");
    
    alert("texto copiado");
  
  }



