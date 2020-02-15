const name1 = document.querySelector('.name'); 
const name2 = document.getElementById("name"); 
const name3 = document.getElementsByName("name"); //no funciona con addEventListener

const nombre = "pedro";

const email = document.getElementsByName("email"); //no funciona con addEventListener
const email2 = document.getElementById("email");
const email3 = document.querySelector('#email'); 

const link = document.getElementById("link"); 

name1.addEventListener('input', function (evt) {
    //nombre = this.value; error en consola
   //console.log(evt); revisar la estructura de los eventos
   let cont_resp = document.querySelector('#name_resp'); 
   cont_resp.innerHTML = this.value
});

email2.addEventListener("change", (e)=>{
    //document.getElementsByName("email")[0].value);
    let email = document.getElementById("email").value;
    let cont_resp = document.querySelector('#email_resp'); 
    cont_resp.innerHTML = email    
});


link.addEventListener("click", (e)=>{
    let link = document.getElementById("link").href;
    e.preventDefault();
    alert("hola")
    window.location = link
});


const submit = document.getElementById("sobmit"); 
submit.addEventListener("click", (e)=>{
    e.preventDefault();
    alert("hola");
    document.getElementById("form_id").submit();
});

