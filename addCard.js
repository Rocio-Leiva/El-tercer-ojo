let codersList = 
    [{
    name:'Ainoha',
    sign: 'Acuario',
    img: './img/acuario.png',
    },
    {
    name:'Mila',
    sign:'Acuario',
    img: './img/acuario.png',
    },
    {
    name:'Delia',
    sign:'Aries',
    img: './img/aries.png',
    },
    {
    name: 'Marta',
    sign: 'Aries',
    img: './img/aries.png',
    },
    {
    name: 'Miriam',
    sign: 'Cáncer',
    img: './img/cancer.png',
    },
    {
    name: 'Claudette',
    sign: 'Capricornio',
    img: './img/capricornio.png',
    },
    {
    name: 'Paola',
    sign: 'Capricornio',
    img: './img/capricornio.png',
    },
    {
    name: 'Vero',
    sign: 'Capricornio',
    img: './img/capricornio.png',
    },
    {
    name: 'Aldara',
    sign: 'Escorpio',
    img: './img/escorpio.png',
    },
    {
    name: 'Ana',
    sign: 'Escorpio',
    img: './img/escorpio.png',
    },
    {
    name: 'Margarita',
    sign: 'Géminis',
    img: './img/geminis.png',
    },
    {
    name: 'Nohely',
    sign: 'Géminis',
    img: './img/geminis.png',
    },
    {
    name: 'Anyi',
    sign: 'Leo',
    img: './img/leo.png',
    },
    {
    name: 'Mary',
    sign: 'Leo',
    img: './img/leo.png',
    },
    {
    name: 'Celia',
    sign: 'Libra',
    img: './img/libra.png',
    },
    {
    name: 'Maria Shirley',
    sign: 'Libra',
    img: './img/libra.png',
    },
    {
    name: 'Cele',
    sign: 'Piscis',
    img: './img/piscis.png',
    },
    {
    name: 'Diana',
    sign: 'Piscis',
    img: './img/piscis.png',
    },
    {
    name: 'Rocio',
    sign: 'Piscis',
    img: './img/piscis.png',
    },
    {
    name: 'Rosibel',
    sign: 'Piscis',
    img: './img/piscis.png',
    },
    {
    name: 'Carmen',
    sign: 'Sagitario',
    img: './img/sagitario.png',
    },
    {
    name: 'Eva',
    sign: 'Virgo',
    img: './img/virgo.png',
    },
    {
    name: 'Jennifer',
    sign: 'Virgo',
    img: './img/virgo.png',
    },
    {
    name: 'Rosemary',
    sign: 'Virgo',
    img: './img/virgo.png',
    }
    ];    

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
newBaseDate=[];
function addBaseDate(){
    newBaseDate.push(newCoder);
    console.log(newBaseDate);

}
//unir los dos arrays

function newListCoders(){
    var newList=codersList.concat(newBaseDate);
    console.log(newList);
}   
