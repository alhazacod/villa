var v =document.getElementById("villa");
var papel=v.getContext("2d");
var mapa="tile.png";

var imagen=new Image();

function aleatorio(min,max) {
  var resultado;
  resultado=Math.floor(Math.random()*(max-min+1))+min;
  return resultado;
}
