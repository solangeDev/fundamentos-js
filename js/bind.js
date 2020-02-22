let People = function (person, age){
    this.person = person;
    this.age = age;
    this.info = function(){
        //no se necesita l fn bind por que el scope del arrow fn es del padre
        // setTimeout(function(){
        //     console.log(this.person + "is" + this.age + "years old")
        //     console.log(`${this.person} is ${this.age} years old`)
            
        // },3000)
        //presentacion sin arrow fn
        let imprimir = function(){
            console.log(this.person + " is" + this.age + "years old")
            console.log(`${this.person} is ${this.age} years old`)
        }
        setTimeout(imprimir.bind(this),3000)
        //peor forma de presentar
        /*setTimeout(function(){
            console.log(this.person + "is" + this.age + "years old")
            console.log(`${this.person} is ${this.age} years old`)
        }.bind(this),3000)*/
    }
}

let person1 = new People("carlos","22");
person1.info();

