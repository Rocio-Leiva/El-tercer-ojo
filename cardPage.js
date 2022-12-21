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
let i,k,aleatorio;
    for (i = newList.length; i; i--) {
        aleatorio = Math.floor(Math.random() * i);
        k = newList[i - 1];
        newList[i - 1] = newList[aleatorio];
        newList[aleatorio] = k;}
// let aleatorio = Math.floor(Math.random() * newList.length);

card_selection.innerHTML=`<div class="d-flex flex-column align-items-center justify-content-center"><h1 style="color:#ffffff; font-family:'Love'; text-align: center;
class="name_animation">${signName[aleatorio]}</h1>
      <div class="d-flex align-items-center justify-content-center"><img src="${signImagen[aleatorio]}" class="justify-content-center 
      card_animation" alt="...  width="100rem" height="170rem" > </div>
      <button type="button" id= "button-link" class="d-flex align-items-center justify-content-centerbtn btn-primary btn-sm"><a href="${horoscopo[aleatorio]}.html">IR A MI HOROSCOPO</a></button>

     
      </div>`

      // setTimeout(() => {
        
      // }, timeout);

console.log(newList[aleatorio]);
let eleccion = horoscopo[aleatorio];
console.log(eleccion);
});


