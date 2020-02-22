function areatriangulo(base,altura){
    const dividir = total => {
        let total_div = total / 2;
        return total_div;
    }
    const area = dividir(base*altura);
    const loop = (area)=>{
        console.log(area, "lala")
        if(area >= 10){
            console.log(area)
            return 
        }
        loop(area+1)
    }
    loop(area)   
}
areatriangulo(2,2)