let module = {
    x : 8,
    getX: function(){
        return this.x;
    }
}


let test = {
    x:9
}

let lala =module.getX.call(test);
console.log(lala);


