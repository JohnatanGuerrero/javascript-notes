//Escribir un programa que muestre en pantalla los números del 1 al 100
//Sustituyendo múltiplos de 3 por su primer nombre
//Múltiplos de 5 por su sengudo nombre
//Múltiplos de ambos 3,5 por sus dos nombres

//Definiendo la función
function multiplos(n){
    for(let i=1; i<=n;i++){
        if(i%15==0){
            console.log("JOHNATAN RODOLDO");
        }else if(i%3==0){
            console.log("JOHNATAN");
        }else if(i%5==0){
            console.log("RODOLFO")
        }else{
            console.log(i);
        }
    }
}

//LLamando la función
multiplos(100);


