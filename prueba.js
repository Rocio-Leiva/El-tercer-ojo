import { codersList } from "./data.js";

let add=document.querySelector("#añadir")
add.addEventListener("click", printCoders);

function printCoders(array) {
    let codersPrinted = "";
    array.forEach(item => {
        codersPrinted += `<div class="prueba"><h2>${item.name}</h2>
    <img src="${item.img}" alt="freakCoder" class="freakCoder">
    </div>`
    });

    document.querySelector(".ctFichas").innerHTML = codersPrinted;
};

printCoders(codersList);

export { printCoders }