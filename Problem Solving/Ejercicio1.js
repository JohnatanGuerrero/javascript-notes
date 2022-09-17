function rerverseWord(text){
    /*
   let reverse=text.split("").reverse().join("");
   console.log(reverse);
   */
    let invertido="";
    /*
    for(let i=text.length-1;i>=0;i--){
        invertido+=text[i];
    }
    */
    for(letra of text){
        invertido=letra+invertido;
    }

    console.log(invertido);
}


rerverseWord("hola");