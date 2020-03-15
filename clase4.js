var ids = [1, 2, "3R"]
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id/'

const opts = { crossDomain: true }

// var promesas=ids.map(function(){
// return obtenerPersonaje(id);
// })

function persona(id) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, function (data) {
      console.log(data);
      resolve(data)
    }).fail(() => reject(id))
  })
}

function onError(id) {
  console.log(`Sucedió un error al obtener el personaje ${id}`)
}

var promesas = ids.map(async (id)=>{
  await persona(id)
  console.log("hola")
})
//capturar cada valor del ajax de cada promesa
Promise
  .all(promesas)
  .then(personajes => console.log(personajes))
  .catch(onError)



















