const data = {
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
      {
        "name": "Molecule Man",
        "age": "29",
        "secretIdentity": "Dan Jukes",
        "powers": [
          "Radiation resistance",
          "Turning tiny",
          "Radiation blast"
        ]
      },
      {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        "name": "Eternal Flame",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      }
    ]
  }


/*** Copia de objeto ***/
// arreglo utilizar [] en vez {}
let test = {...data};
test.squadName = "carla";

/*** Map ***/
test.members = test.members.map((a)=>{
    let obj = {...a}
    obj.name = "hola"
    obj.pepe = "grillo"
    return obj;
})
//console.log(test, data)

/*** Filtr/Map ***/
let membersFilt = data.members.filter((a)=>{
    let num = 29;
    num = num.toString()
    if(a.age === num){
        return a;
    }
}).map((a)=>{
    let b = {...a}
    b.age = 12;
    return b;
})
//console.log(membersFilt, data);

/*** for IN ***/
//solo recorre si sobreescriben "Muta"
for (const prop in data) {
   //console.log(`${prop} => ${data[prop]}`);
}

/*** Reduce ***/
const uint8 = [0, 1, 2, 3];

function sum(previousValue, currentValue) {
  return previousValue + currentValue;
}

console.log(uint8.reduce(sum));

/* no hacer mutaras y sufriras*/
//membersFilt[0].age = 12;
/*let newMembers = test.members.forEach((a)=>{
    a.pepe = "grillo"
})*/

/* no recorre objetos!!! 
data.forEach((a)=>{
    console.log(a);
})*/

