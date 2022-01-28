
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

let botonEncriptar = document.querySelector("#btn-encriptar");
let botonDesencriptar = document.querySelector("#btn-desencriptar");
let inputUsuario = document.querySelector("#input-texto");
let respuestaEncriptada = document.querySelector("#msg");


botonEncriptar.addEventListener("click", function () {

    let encriptado = encriptar(inputUsuario.value);
    respuestaEncriptada.value = encriptado;

})

function encriptar(texto) {

    let resultado = texto.replaceAll("e", "enter");
    resultado = resultado.replaceAll("i", "imes");
    resultado = resultado.replaceAll("a", "ai");
    resultado = resultado.replaceAll("o", "ober");
    resultado = resultado.replaceAll("u", "ufat");
    return resultado;

}
botonDesencriptar.addEventListener("click", function () {

    let desencriptado = desencriptar(inputUsuario.value);
    respuestaEncriptada.value = desencriptado
})

function desencriptar(texto) {

    let resultado = texto.replaceAll("enter", "e");
    resultado = resultado.replaceAll("imes", "i");
    resultado = resultado.replaceAll("ai", "a");
    resultado = resultado.replaceAll("ober", "o");
    resultado = resultado.replaceAll("ufat", "u");
    return resultado;
}

var botoncopiar = document.querySelector("#btn-copy");

botoncopiar.addEventListener("click", function (event) {
    event.preventDefault();
    var y = document.getElementById("msg");
    console.log(y.value);
    y.select();
    navigator.clipboard.writeText(y.value)
});


function eliminarTildes(texto) {
    return texto
        .normalize('NFD')
        .replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi, "$1")
        .normalize();
}