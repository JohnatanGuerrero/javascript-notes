
//funcion que cuente los numeros de un array utilizando regex
function contarNumeros(text){
    const count = text.match(/\d/g).length;
    return count;
}

console.log(contarNumeros("hola claro que si"));

