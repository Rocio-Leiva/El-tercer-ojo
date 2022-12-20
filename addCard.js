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
    function coders (name, sign, img){
        this.name=name;
        this.sign=sign;
        this.img=img;
    }

//añadiendo datos del formulario al objeto
    nameAdd = document.querySelector('input').value;
    signAdd = document.querySelector('select').value;
    imgAsign='';
         switch(signAdd){
                case "Acuario": imgAsign = './img/acuario.png'; break;
                case "Cancer": imgAsign = './img/cancer.png'; break;
                case signAdd="Aries": imgAsign = './img/aries.png'; break;
                case signAdd="Capricornio": imgAsign = './img/capricornio.png'; break;
                case signAdd="Escorpio": imgAsign = './img/escorpio.png'; break;
                case signAdd="Géminis": imgAsign = './img/geminis.png'; break;
                case signAdd="Leo": imgAsign = './img/leo.png'; break;
                case signAdd="Libra": imgAsign = './img/libra.png'; break;
                case signAdd="Piscis": imgAsign = './img/piscis.png'; break;
                case signAdd="Sagitario": imgAsign = './img/sagitario.png'; break;
                case signAdd="Tauro": imgAsign = './img/tauro.png'; break;
                case signAdd="Virgo": imgAsign = './img/virgo.png'; break;
             }; 
    
    console.log();

    newCoder = new coders (nameAdd, signAdd, imgAsign);

    console.log (newCoder);

    addBaseDate();
    // newListCoders();
}

//función para crear un nuevo array con datos del formulario
newBaseDate=[];
function addBaseDate(){
    newBaseDate.push(newCoder);
    console.log(newBaseDate);

}

export { }

//unir los dos arrays

// function newListCoders(){
//     var newList=codersList.concat(newBaseDate);
//     console.log(newList);
// }   
