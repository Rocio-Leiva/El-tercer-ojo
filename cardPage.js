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
  let signImagen = newList.map(element => element ["img".src]);
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
  console.log(horoscopo[aleatorio]);

  // function tarotList() {

  //   //creando el objeto
  //       function selectCoders (name, sign, img){
  //           this.name=name;
  //           this.sign=sign;
  //           this.img=img;
  //       };

  //       nameDelete = signName[aleatorio];
  //       signDelete= horoscopo[aleatorio];
  //       imgDelete = signImagen[aleatorio];
        
  //       selectCoders = new selectCoders (nameDelete, signDelete, imgDelete);
  //       tarotList.push(selectCoders);

           
  //     };

  // tarotList()
  // console.log (selectCoders);
  // console.log(tarotList);  

});


