import { codersList } from "./data.js"
import { newBaseDate } from "./addCard.js"

let listTarot=[];
let nameDelete = "";
let signDelete = "";
let imgDelete= "";


let card_selection = document.querySelector("#card_selection");

let boton = document.querySelector(".suerte");

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
  console.log(horoscopo[aleatorio]);
}


