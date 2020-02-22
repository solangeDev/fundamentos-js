function loop(x){
    if(x >= 10){
        return
    }
    console.log(x);
    loop(x+1)
}

loop(0);