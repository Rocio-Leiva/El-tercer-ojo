import { codersList } from "./data.js"
import { newBaseDate } from "./addCard.js"

let newList= [];
let signImagen = [];
let signName = [];
let horoscopo = [];
let aleatorio = [];
// let nameDelete = [];
// let tarotList= [];


let card_selection = document.querySelector("#card_selection");
let boton = document.querySelector(".suerte");

boton.addEventListener("click", ()=> {
  newList= [...codersList, ...newBaseDate];
  signImagen = newList.map(element => element ["img"]);
  signName = newList.map(element => element ["name"]);
  horoscopo = newList.map(element => element ["sign"]);

  let k;
    for (i = newList.length; i; i--) {
        aleatorio = Math.floor(Math.random() * i);
        k = newList[i - 1];
        newList[i - 1] = newList[aleatorio];
        newList[aleatorio] = k;}


  // let aleatorio = Math.floor(Math.random() * newList.length);

  card_selection.innerHTML=`<div class="d-flex flex-column align-items-center justify-content-center"><h1 style="color:#ffffff; text-align: center;
  class="name_animation">${signName[aleatorio]}</h1>
      <div class="d-flex align-items-center justify-content-center"><img src="${signImagen[aleatorio]}" class="justify-content-center
      card_animation" alt="... " width="1000px" height="4480px"></div>
      <script type="text/javascript">setTimeout( function() { window.location.href = "${horoscopo[aleatorio]}.html"; }, 5000 );
</script>
      </div>`
      // setTimeout(() => {
      // }, timeout);
      // <button type="button" class="btn btn-info"><a href="${horoscopo[aleatorio]}.html">Ir a mi horoscopo</a></button>


  console.log(newList);
  console.log(newList[aleatorio]);
  console.log(horoscopo[aleatorio]);

  //eliminar del array
  // let listDelete = newList.splice(aleatorio,1)[0];
  // console.log(newList);
  // console.log(listDelete);

  // //el nombre que ha salido de forma aleatoria, incluiro en la lista tarotList
  // console.log(signName[aleatorio])

  // // nameDelete = (signName[aleatorio]);
  // // tarotList.push(nameDelete);
  // console.log(tarotList);

  // document.querySelector("#tarotList").innerHTML="<div><h2>nameDelete</h2></div>"
});
