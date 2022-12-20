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

card_selection.innerHTML=`<div class="d-flex flex-column align-items-center justify-content-center"><h1 style="color:#ffffff; text-align: center;
class="name_animation">${signName[aleatorio]}</h1>
      <div class="d-flex align-items-center justify-content-center"><img src="${signImagen[aleatorio]}" class="justify-content-center 
      card_animation" alt="... " width="180rem" height="280rem">
      <button type="button" class="btn btn-info"><a href="${horoscopo[aleatorio]}.html">Ir a mi horoscopo</a></button>

      </div>
      </div>`

      // setTimeout(() => {
        
      // }, timeout);

console.log(newList[aleatorio]);
let eleccion = horoscopo[aleatorio];
console.log(eleccion);
});


