import { codersList } from "./data.js"

//coderList array 25 alumnas
//array fusionado newList

//si newList = 0 que no se ha metido datos,, se hace el random de coderslist teniendo en cuenta lengt de coderslist y si el new list es distinto de cero se coge el ramdon de newlist

const horoscopos = ["Piscis", "Aries", "Tauro", "Geminis", "Cancer", "Leo", "Virgo", "Libra", "Escorpio", "Sagitario", "Capricornio", "Acuario" ];
// let coderList o newlist
const aleatorio = horoscopos[Math.floor(Math.random() * codersList.length)];
let boton = document.querySelector(".suerte");

boton.addEventListener("click", ()=> {
console.log("holaaa");
})

function azar() {
  let eleccion = boton.value;
  if (eleccion === 'Piscis') {
    formulario.innerHTML = "<button type='submit' class='btn btn-primary'><a class='button-link' href='https://www.amazon.es/'>SABER MI FUTURO</a></button>";
  } else if (eleccion === 'Aries') {
    formulario.innerHTML = "<button type='submit' class='btn btn-primary'><a class='button-link' href='https://www.factoriaf5.org/'>SABER MI FUTURO</a></button>";
  } else if (eleccion === 'Tauro') {
    formulario.innerHTML = "<button type='submit' class='btn btn-primary'><a class='button-link' href='https://www.amazon.es/'>SABER MI FUTURO</a></button>";
  } else if (eleccion === 'Geminis') {
    formulario.innerHTML = "<button type='submit' class='btn btn-primary'><a class='button-link' href='https://www.amazon.es/'>SABER MI FUTURO</a></button>";
  } else if (eleccion === 'Cancer') {
    formulario.innerHTML = "<button type='submit' class='btn btn-primary'><a class='button-link' href='https://www.amazon.es/'>SABER MI FUTURO</a></button>";
  } else if (eleccion === 'Leo') {
    formulario.innerHTML = "<button type='submit' class='btn btn-primary'><a class='button-link' href='https://www.amazon.es/'>SABER MI FUTURO</a></button>";
  } else if (eleccion === 'Virgo') {
    formulario.innerHTML = "<button type='submit' class='btn btn-primary'><a class='button-link' href='https://www.amazon.es/'>SABER MI FUTURO</a></button>";
  } else if (eleccion === 'Libra') {
    formulario.innerHTML = "<button type='submit' class='btn btn-primary'><a class='button-link' href='https://www.amazon.es/'>SABER MI FUTURO</a></button>";
  } else if (eleccion === 'Escorpio') {
    formulario.innerHTML = "<button type='submit' class='btn btn-primary'><a class='button-link' href='https://www.amazon.es/'>SABER MI FUTURO</a></button>";
  } else if (eleccion === 'Sagitario') {
    formulario.innerHTML = "<button type='submit' class='btn btn-primary'><a class='button-link' href='https://www.amazon.es/'>SABER MI FUTURO</a></button>";
  } else if (eleccion === 'Capricornio') {
    formulario.innerHTML = "<button type='submit' class='btn btn-primary'><a class='button-link' href='https://www.amazon.es/'>SABER MI FUTURO</a></button>";
  } else if (eleccion === 'Acuario') {
    formulario.innerHTML = "<button type='submit' class='btn btn-primary'><a class='button-link' href='https://www.amazon.es/'>SABER MI FUTURO</a></button>";
  } 
 
}

console.log(horoscopos);
console.log(aleatorio);

// para recorrer el array 

// array.forEach(element => {
    
// });
