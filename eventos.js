var v =document.getElementById("villa");
var papel=v.getContext("2d");

var fondo=new Image();
fondo.src="tile.png";
fondo.addEventListener("load",dibujar);

var vaca=new Image();
vaca.src="vaca.png";
vaca.addEventListener("load",dibujarVaca);

var pollo=new Image();
pollo.src="pollo.png";
pollo.addEventListener("load",dibujarPollo);

var cerdo=new Image();
cerdo.src="cerdo.png";
cerdo.addEventListener("load",dibujarCerdo);

function dibujarVaca(evento){
  papel.drawImage(vaca,0,0)
}
function dibujarPollo(evento){
  papel.drawImage(pollo,70,0)
}
function dibujarCerdo(evento){
  papel.drawImage(cerdo,0,50)
}

function dibujar(evento){
  papel.drawImage(fondo,0,0)
}

function aleatorio(min,max) {
  var resultado;
  resultado=Math.floor(Math.random()*(max-min+1))+min;
  return resultado;
}
