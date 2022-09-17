function countRepititions(text,letra){
    let count=0;
    for(let i=0;i<text.length;i++){
        if(letra==text[i]){
            count++;
        }
    }
    return count;
}

console.log(countRepititions("hafasfdfasfasfd","f"));