// document.write('<a href=\"http://127.0.0.1:5500/index-juego.html\">START</a>');
document.querySelector(".big-button").style.padding="10px";
document.querySelector("h1").style.fontSize = "xx-large";
//document.querySelector("h1").style.fontSize = "2cm";

let sound= new Audio('./musica/Khalil Gibran nos habla del trabajo. Presentación de Tarot El Camino.mp3');
playBtn.addEventListener('click', ()=>{
    sound.play();
});

