

// let add=document.querySelector("#añadir")
// add.addEventListener("click", addCoders);

// import { codersList } from "./data.js";

function addCoders() {

//creando el objeto
    function coders (name, sign){
        this.name=name;
        this.sign=sign;
    }

//añadiendo datos del formulario al objeto
    let  nameAdd = document.querySelector('input').value;
    let signAdd = document.querySelector('select').value;

    newCoder = new coders (nameAdd, signAdd);

    console.log (newCoder);

    addBaseDate();
    newListCoders();
}

//función para crear un nuevo array con datos del formulario
let newBaseDate=[];
function addBaseDate(){
    newBaseDate.push(newCoder);
    console.log(newBaseDate);

}
//unir los dos arrays

function newListCoders(){
    var newList=codersList.concat(newBaseDate);
    console.log(newList);
}   
export{newBaseDate};