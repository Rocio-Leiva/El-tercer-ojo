import { codersList } from "./data.js"
import { newBaseDate } from "./addCard.js"

let card_selection = document.querySelector("#card_selection");

let boton = document.querySelector(".suerte");
let eleccion = "";
boton.addEventListener("click", ()=> {
 let newList= [...codersList, ...newBaseDate];
 
let signImagen = newList.map(element => element ["img"]);
let signName = newList.map(element => element ["name"]);
let horoscopo = newList.map(element => element ["sign"]);
let aleatorio = Math.floor(Math.random() * newList.length);

card_selection.innerHTML=`<div class="d-flex flex-column align-items-center justify-content-center"><h1 class="name_animation">${signName[aleatorio]}</h1>
      <div class="d-felx align-items-center justify-content-center"><img src="${signImagen[aleatorio]} class="justify-content-center card_animation" alt="... ">
      </div>
      </div>`

console.log(newList[aleatorio]);
let eleccion = horoscopo[aleatorio];
console.log(eleccion);


azar();
});


function azar() {

  if (eleccion === 'piscis') {
    window.location = href='https://www.amazon.es/';

    // window.location.assign("https://www.w3schools.com");
    
    // window.location = "<button type='button' class='btn btn-primary btn-lg suerte'><a class='button-link' href='https://www.amazon.es/'>PROBAR SUERTE</a></button>";
  } else if (eleccion === [1] === 'Aries') {
    window.location = href='https://www.amazon.es/';
  } else if (eleccion === [1] === 'Tauro') {
    window.location = href='https://www.amazon.es/' ;
  } else if (eleccion === [1] === 'Geminis') {
    window.location = href='https://www.amazon.es/';
  } else if (eleccion === [1] === 'Cancer') {
    window.location = href='https://www.amazon.es/';
  } else if (eleccion === [1] === 'Leo') {
    window.location = href='https://www.amazon.es/';
  } else if (eleccion === [1] === 'Virgo') {
    window.location = href='https://www.amazon.es/';
  } else if (eleccion === [1] === 'Libra') {
    window.location = href='https://www.amazon.es/' ;
  } else if (eleccion === [1] === 'Escorpio') {
    window.location = href='https://www.amazon.es/';
  } else if (eleccion === [1] ===  'Sagitario') {
    window.location = href='https://www.amazon.es/';
  } else if (eleccion === [1] === 'Capricornio') {
    window.location = "url11";
  // } else if (eleccion === 'Acuario') {
  //   formulario.innerHTML = "<button type='button' class='btn btn-primary btn-lg suerte'><a class='button-link' href='https://www.amazon.es/'>SABER MI FUTURO</a></button>";
  } 
 
}



