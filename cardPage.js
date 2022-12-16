let seleccionar = document.querySelector('select');
let formulario = document.querySelector('.play');

// seleccionar.addEventListener('change', seleccionarHoroscopo());

function seleccionarHoroscopo() {
  let eleccion = seleccionar.value;
console.log(eleccion);
  if (eleccion === 'Piscis') {
    formulario.innerHTML = "<button type='submit' class='btn btn-primary'><a class='button-link' href='https://www.amazon.es/'>SABER MI FUTURO</a></button>";
  } else if (eleccion === 'Aries') {
    formulario.innerHTML = "<button type='submit' class='btn btn-primary'><a class='button-link' href='https://www.factoriaf5.org/'>SABER MI FUTURO</a></button>";
  } else if (eleccion === 'Tauro') {
    formulario.innerHTML = "<button type='submit' class='btn btn-primary'><a class='button-link' href='https://www.amazon.es/'>SABER MI FUTURO</a></button>";
  } else if (eleccion === 'Geminis') {
    formulario.innerHTML = "<button type='submit' class='btn btn-primary'><a class='button-link' href='https://www.amazon.es/'>SABER MI FUTURO</a></button>";
  } else if (eleccion === 'Cancer') {
    formulario.innerHTML = "<button type='submit' class='btn btn-primary'><a class='button-link' href='https://www.amazon.es/'>SABER MI FUTURO</a></button>";
  } else if (eleccion === 'Leo') {
    formulario.innerHTML = "<button type='submit' class='btn btn-primary'><a class='button-link' href='https://www.amazon.es/'>SABER MI FUTURO</a></button>";
  } else if (eleccion === 'Virgo') {
    formulario.innerHTML = "<button type='submit' class='btn btn-primary'><a class='button-link' href='https://www.amazon.es/'>SABER MI FUTURO</a></button>";
  } else if (eleccion === 'Libra') {
    formulario.innerHTML = "<button type='submit' class='btn btn-primary'><a class='button-link' href='https://www.amazon.es/'>SABER MI FUTURO</a></button>";
  } else if (eleccion === 'Escorpio') {
    formulario.innerHTML = "<button type='submit' class='btn btn-primary'><a class='button-link' href='https://www.amazon.es/'>SABER MI FUTURO</a></button>";
  } else if (eleccion === 'Sagitario') {
    formulario.innerHTML = "<button type='submit' class='btn btn-primary'><a class='button-link' href='https://www.amazon.es/'>SABER MI FUTURO</a></button>";
  } else if (eleccion === 'Capricornio') {
    formulario.innerHTML = "<button type='submit' class='btn btn-primary'><a class='button-link' href='https://www.amazon.es/'>SABER MI FUTURO</a></button>";
  } else if (eleccion === 'Acuario') {
    formulario.innerHTML = "<button type='submit' class='btn btn-primary'><a class='button-link' href='https://www.amazon.es/'>SABER MI FUTURO</a></button>";
  } 
 
}

const horoscopos = ["Piscis", "Aries", "Tauro", "Geminis", "Cancer", "Leo", "Virgo", "Libra", "Escorpio", "Sagitario", "Capricornio", "Acuario" ];
const aleatorio = horoscopos[Math.floor(Math.random() * horoscopos.length)];
let boton = document.querySelector(".suerte");

boton.addEventListener("click", ()=> {
console.log("holaaa");
})

function azar() {
  let eleccion = boton.value;
  if (eleccion === 'Piscis') {
    formulario.innerHTML = "<button type='submit' class='btn btn-primary'><a class='button-link' href='https://www.amazon.es/'>SABER MI FUTURO</a></button>";
  } else if (eleccion === 'Aries') {
    formulario.innerHTML = "<button type='submit' class='btn btn-primary'><a class='button-link' href='https://www.factoriaf5.org/'>SABER MI FUTURO</a></button>";
  } else if (eleccion === 'Tauro') {
    formulario.innerHTML = "<button type='submit' class='btn btn-primary'><a class='button-link' href='https://www.amazon.es/'>SABER MI FUTURO</a></button>";
  } else if (eleccion === 'Geminis') {
    formulario.innerHTML = "<button type='submit' class='btn btn-primary'><a class='button-link' href='https://www.amazon.es/'>SABER MI FUTURO</a></button>";
  } else if (eleccion === 'Cancer') {
    formulario.innerHTML = "<button type='submit' class='btn btn-primary'><a class='button-link' href='https://www.amazon.es/'>SABER MI FUTURO</a></button>";
  } else if (eleccion === 'Leo') {
    formulario.innerHTML = "<button type='submit' class='btn btn-primary'><a class='button-link' href='https://www.amazon.es/'>SABER MI FUTURO</a></button>";
  } else if (eleccion === 'Virgo') {
    formulario.innerHTML = "<button type='submit' class='btn btn-primary'><a class='button-link' href='https://www.amazon.es/'>SABER MI FUTURO</a></button>";
  } else if (eleccion === 'Libra') {
    formulario.innerHTML = "<button type='submit' class='btn btn-primary'><a class='button-link' href='https://www.amazon.es/'>SABER MI FUTURO</a></button>";
  } else if (eleccion === 'Escorpio') {
    formulario.innerHTML = "<button type='submit' class='btn btn-primary'><a class='button-link' href='https://www.amazon.es/'>SABER MI FUTURO</a></button>";
  } else if (eleccion === 'Sagitario') {
    formulario.innerHTML = "<button type='submit' class='btn btn-primary'><a class='button-link' href='https://www.amazon.es/'>SABER MI FUTURO</a></button>";
  } else if (eleccion === 'Capricornio') {
    formulario.innerHTML = "<button type='submit' class='btn btn-primary'><a class='button-link' href='https://www.amazon.es/'>SABER MI FUTURO</a></button>";
  } else if (eleccion === 'Acuario') {
    formulario.innerHTML = "<button type='submit' class='btn btn-primary'><a class='button-link' href='https://www.amazon.es/'>SABER MI FUTURO</a></button>";
  } 
 
}

console.log(horoscopos);
console.log(aleatorio);

// para recorrer el array 

// array.forEach(element => {
    
// });
