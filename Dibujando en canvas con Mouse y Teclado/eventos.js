var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;
var estado = 0;          // estado del click      
var colorLinea = "blue";    // color a la linea

//Capturar cuando se presiona el click
document.addEventListener("mousedown",presionarMouse);  

//capturar cuando se suelta el click
document.addEventListener("mouseup",soltarMouse); 

//Capturar cuando se mueve el mouse 
document.addEventListener("mousemove",dibujarMouse); 

//Dibujo del borde
dibujarLinea("red", 0, 0, 300, 0, papel);
dibujarLinea("red", 300, 0, 300, 300, papel);
dibujarLinea("red", 300, 300, 0, 300, papel);
dibujarLinea("red", 0, 300, 0, 0, papel);

// Funcion para mousemove
function dibujarMouse(evento){

  if (estado == 1) {   // solo se dibujara si esta el click del mouse presionado
    dibujarLinea(colorLinea, x, y, evento.layerX, evento.layerY, papel);
  }
  x = evento.layerX;
  y = evento.layerY;
}

// Funcion para mousedown
function presionarMouse(evento){
  estado = 1;         //click presionado  
  x = evento.layerX;
  y = evento.layerY;
}

// Funcion para mouseup
function soltarMouse(evento){
  estado = 0;         // click suelto
  x = evento.layerX;
  y = evento.layerY;
}

//Dibujar linea inicial
dibujarLinea("red", x-1, y-1, x+1, y+1, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento)
{
  var colorcito = colorLinea;
  var movimiento = 5;
  switch(evento.keyCode)
  {
    case teclas.UP:
      dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
      y = y - movimiento;
    break;
    case teclas.DOWN:
      dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
      y = y + movimiento;
    break;
    case teclas.LEFT:
      dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
      x = x - movimiento;
    break;
    case teclas.RIGHT:
      dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
      x = x + movimiento;
    break;
  }
}
