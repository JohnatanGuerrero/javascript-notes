function hamming(text1, text2){
    let distance = 0;
    if(text1.length!=text2.length){
        return -1;
    }
    for(let i=0;i<text1.length;i++){
        if(text1[i]!=text2[i]){
            distance++;
        }
    }
    return distance;
}

console.log(hamming("diade","abcde"));