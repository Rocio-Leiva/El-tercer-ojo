let nameAdd="";
let signAdd="";
let imgAsign='';
let newCoder=[];
let newBaseDate=[];


let add=document.querySelector("#añadir")
add.addEventListener("click", addCoders);

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
                case "Aries": imgAsign = './img/aries.png'; break;
                case "Capricornio": imgAsign = './img/capricornio.png'; break;
                case "Escorpio": imgAsign = './img/escorpio.png'; break;
                case "Géminis": imgAsign = './img/geminis.png'; break;
                case "Leo": imgAsign = './img/leo.png'; break;
                case "Libra": imgAsign = './img/libra.png'; break;
                case "Piscis": imgAsign = './img/piscis.png'; break;
                case "Sagitario": imgAsign = './img/sagitario.png'; break;
                case "Tauro": imgAsign = './img/tauro.png'; break;
                case "Virgo": imgAsign = './img/virgo.png'; break;
             }; 
    
    console.log();

    newCoder = new coders (nameAdd, signAdd, imgAsign);

    console.log (newCoder);

    addBaseDate();
    // newListCoders();
}

//función para crear un nuevo array con datos del formulario
function addBaseDate(){
    newBaseDate.push(newCoder);
    console.log(newBaseDate);

}

export { newBaseDate }

//unir los dos arrays

// function newListCoders(){
//     var newList=codersList.concat(newBaseDate);
//     console.log(newList);
// }   
