var boton_encriptar = document.querySelector(".btn_encriptar");
var boton_desencriptar = document.querySelector(".btn_desencriptar");
var muneico = document.querySelector(".conteiner_muneico");
var texto_inicio = document.querySelector(".conteiner_parrafo");
var resultado = document.querySelector(".result_text");

boton_encriptar.onclick = encriptar;
boton_desencriptar.onclick = desencriptar;

function encriptar(){
    ocultar_adelante();
    var text= recuperar_texto();
    resultado.textContent= encriptar_texto(text);
}
function desencriptar(){
    ocultar_adelante();
    var text= recuperar_texto();
    resultado.textContent= desencriptar_texto(text);
}

function recuperar_texto(){
    var text= document.querySelector(".text");
    return text.value
}
function ocultar_adelante(){
    muneico.classList.add("ocultar");
    texto_inicio.classList.add("ocultar");
}

function encriptar_texto(mensaje){
    var texto = mensaje;
    var texto_final = "";
    
    for (var i = 0; i < texto.length; i++){
        if (texto[i]=="a"){
            texto_final = texto_final + "ai"
        }
        else if (texto[i]=="e"){
            texto_final = texto_final + "enter"
        }
        else if (texto[i]=="i"){
            texto_final = texto_final + "imes"
        }
        else if (texto[i]=="o"){
            texto_final = texto_final +  "ober"
        }
        else if (texto[i]=="u"){
            texto_final = texto_final + "ufat"
        }
        else{
            texto_final = texto_final+ texto[i]
        }
    }
    return texto_final
}

function desencriptar_texto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
        
    }

    return textoFinal;

}


 
 const btnCopiar = document.querySelector(".btn_copiar"); 
 btnCopiar.addEventListener("click", copiar = () => {
 var contenido = document.querySelector(".result_text").textContent;
 navigator.clipboard.writeText(contenido);
 console.log("hola"); 
});





