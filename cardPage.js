import { codersList } from "./data.js"
import { newBaseDate } from "./addCard.js"

let boton = document.querySelector(".suerte");
let eleccion = "";
boton.addEventListener("click", ()=> {
 let newList= [...codersList, ...newBaseDate];
 
let signImagen = newList.map(element => element ["img"]);
let signName = newList.map(element => element ["name"]);
let horoscopo = newList.map(element => element ["sign"]);
let aleatorio = Math.floor(Math.random() * newList.length);

console.log(newList[aleatorio]);
let eleccion = horoscopo[aleatorio];
console.log(eleccion);

azar();
});


function azar() {

  if (eleccion === 'piscis') {
    window.location = href='https://www.amazon.es/';
    
    // window.location = "<button type='button' class='btn btn-primary btn-lg suerte'><a class='button-link' href='https://www.amazon.es/'>PROBAR SUERTE</a></button>";
  } else if (eleccion === [1] === 'Aries') {
    window.location = "url2";
  } else if (eleccion === [1] === 'Tauro') {
    window.location = "url3" ;
  } else if (eleccion === [1] === 'Geminis') {
    window.location = "url4";
  } else if (eleccion === [1] === 'Cancer') {
    window.location = "url5";
  } else if (eleccion === [1] === 'Leo') {
    window.location = "url6";
  } else if (eleccion === [1] === 'Virgo') {
    window.location = "url7";
  } else if (eleccion === [1] === 'Libra') {
    window.location = "url8" ;
  } else if (eleccion === [1] === 'Escorpio') {
    window.location = "url9";
  } else if (eleccion === [1] ===  'Sagitario') {
    window.location = "url10";
  } else if (eleccion === [1] === 'Capricornio') {
    window.location = "url11";
  // } else if (eleccion === 'Acuario') {
  //   formulario.innerHTML = "<button type='button' class='btn btn-primary btn-lg suerte'><a class='button-link' href='https://www.amazon.es/'>SABER MI FUTURO</a></button>";
  } 
 
}



