
    //message="VCNGPVQJWOCPQANQIQVGZQBEQOA";
    //pista=['@','.','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];


//funcion para decodificar el mensaje
function decodificar(message){
    var pista=['@','.','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var message=message.split("");
    var decoficado=[];
    for(var i=0;i<message.length;i++){
        for(var j=0;j<pista.length;j++){
            if(message[i]==pista[j]){
                decoficado.push(j)
            }
        }
    }
    return decoficado;
}



