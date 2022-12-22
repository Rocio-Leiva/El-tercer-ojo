// document.write('<a href=\"http://127.0.0.1:5500/index-juego.html\">START</a>');
document.querySelector(".big-button").style.padding="10px";
document.querySelector("h1").style.fontSize = "xx-large";
//document.querySelector("h1").style.fontSize = "2cm";

let playBtn=document.querySelector("#playBtn");
let sound= new Audio('./musica/tarot.mp3');
playBtn.addEventListener('click', ()=>{
   console.log ( "hola prueba");
    sound.play();
});

