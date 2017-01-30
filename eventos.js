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
  var x=aleatorio(0,400);
  var y=aleatorio(0,400);
  papel.drawImage(vaca,x,y)
}
function dibujarPollo(evento){
  var x=aleatorio(0,400);
  var y=aleatorio(0,400);
  papel.drawImage(pollo,x,y)
}
function dibujarCerdo(evento){
  var x=aleatorio(0,400);
  var y=aleatorio(0,400);
  papel.drawImage(cerdo,x,y)
}

function dibujar(evento){
  papel.drawImage(fondo,0,0)
}

function aleatorio(min,max) {
  var resultado;
  resultado=Math.floor(Math.random()*(max-min+1))+min;
  return resultado;
}
