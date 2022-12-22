import { codersList } from "./data.js"

let nameAdd = "";
let signAdd = "";
let imgAsign = '';
let newBaseDate = [];
let newList = [...codersList];

let newCoder = {
    "name": "",
    "sign": "",
    "img": "",
}

let add = document.querySelector("#añadir")
add.addEventListener("click", addCoders);

function addCoders() {

    // //creando el objeto
    //     function coders (name, sign, img){
    //         this.name=name;
    //         this.sign=sign;
    //         this.img=img;
    //     }

    //añadiendo datos del formulario al objeto
    nameAdd = document.querySelector('input').value;
    signAdd = document.querySelector('select').value;
    imgAsign = '';
    switch (signAdd) {
        case "Acuario": imgAsign = './img/acuario.jpg'; break;
        case "Cancer": imgAsign = './img/cancer.jpg'; break;
        case "Aries": imgAsign = './img/aries.jpg'; break;
        case "Capricornio": imgAsign = './img/capricornio.jpg'; break;
        case "Escorpio": imgAsign = './img/escorpio.jpg'; break;
        case "Géminis": imgAsign = './img/geminis.jpg'; break;
        case "Leo": imgAsign = './img/leo.jpg'; break;
        case "Libra": imgAsign = './img/libra.jpg'; break;
        case "Piscis": imgAsign = './img/piscis.jpg'; break;
        case "Sagitario": imgAsign = './img/sagitario.jpg'; break;
        case "Tauro": imgAsign = './img/tauro.jpg'; break;
        case "Virgo": imgAsign = './img/virgo.jpg'; break;
    };

    // newCoder = new coders (nameAdd, signAdd, imgAsign);

    newCoder.name = nameAdd;
    newCoder.sign = signAdd;
    newCoder.img = imgAsign;

    console.log(newCoder);

    addBaseDate();
    // newListCoders();
}

//función para crear un nuevo array con datos del formulario
function addBaseDate() {
    // newBaseDate.push(newCoder);
    // console.log(newBaseDate);
    newList.push(newCoder);
    console.log(newList);
}


export { newBaseDate }
export { newList }

//unir los dos arrays

// function newListCoders(){
//     var newList=codersList.concat(newBaseDate);
//     console.log(newList);
// }   
