//Función que realiza un conteo de palabras dada una cadena de texto
function wordCount(str) {
    return str.trim().split(/\S/).length;
}

console.log(wordCount("hola claro que si"));
