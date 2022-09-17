function decode(message, desplazamiento){
    let alphabet = '@.ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';

    for(let i=0; i<message.length;i++){
        let char=message[i];
        if(alphabet.indexOf(char)!== -1){
            let index= alphabet.indexOf(char)-desplazamiento;
            if(index<0){
                index=index+alphabet.length;
            }
            result+=alphabet[index];
        }else{
            result+=char;
        }
    }
    return result;
}

for(let i=0;i<26;i++){
    console.log(decode("AVCNGPVQJWOCPQANQIQVGZQBEQOA",i));
}