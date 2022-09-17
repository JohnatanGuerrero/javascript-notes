//decode cesar cipher


//decode cesar cipher alphabetic
function decodeAlphabetic(mensaje, desplazamiento) {
    let result = '';
    let alphabet = '@.ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 0; i < mensaje.length; i++) {
        let char = mensaje[i];
        if (alphabet.indexOf(char) !== -1) {
            let index = alphabet.indexOf(char) - desplazamiento;
            if (index < 0) {
                index = index + alphabet.length;
            }
            result += alphabet[index];
        } else {
            result += char;
        }
    }
    return result;
}


for(let i=0;i<26;i++){
    if((decodeAlphabetic('AVCNGPVQJWOCPQANQIQVGZQBEQOA', i)).indexOf("LOGO")){
        console.log(decodeAlphabetic('AVCNGPVQJWOCPQANQIQVGZQBEQOA', i));
    }
    //console.log(decodeAlphabetic('AVCNGPVQJWOCPQANQIQVGZQBEQOA', i));
}