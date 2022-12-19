let codersList = 
    [{
    name:'Ainoha',
    sign: 'Acuario',
    },
    {
    name:'Mila',
    sign:'Acuario',
    },
    {
    name:'Delia',
    sign:'Aries',
    },
    {
    name: 'Marta',
    sign: 'Aries',
    },
    {
    name: 'Miriam',
    sign: 'Cáncer',
    },
    {
    name: 'Claudette',
    sign: 'Capricornio',
    },
    {
    name: 'Paola',
    sign: 'Capricornio',
    },
    {
    name: 'Vero',
    sign: 'Capricornio',
    },
    {
    name: 'Aldara',
    sign: 'Escorpio',
    },
    {
    name: 'Ana',
    sign: 'Escorpio',
    },
    {
    name: 'Margarita',
    sign: 'Géminis',
    },
    {
    name: 'Nohely',
    sign: 'Géminis',
    },
    {
    name: 'Anyi',
    sign: 'Leo',
    },
    {
    name: 'Mary',
    sign: 'Leo',
    },
    {
    name: 'Celia',
    sign: 'Libra',
    },
    {
    name: 'Maria Shirley',
    sign: 'Libra',
    },
    {
    name: 'Cele',
    sign: 'Piscis',
    },
    {
    name: 'Diana',
    sign: 'Piscis',
    },
    {
    name: 'Rocio',
    sign: 'Piscis',
    },
    {
    name: 'Rosibel',
    sign: 'Piscis',
    },
    {
    name: 'Carmen',
    sign: 'Sagitario',
    },
    {
    name: 'Eva',
    sign: 'Virgo',
    },
    {
    name: 'Jennifer',
    sign: 'Virgo',
    },
    {
    name: 'Rosemary',
    sign: 'Virgo',
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
