var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick );

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
  var lineas = parseInt(texto.value);
  var l = 0;
  var yi, xf;
  var colorcito = "green";
  var espacio = ancho / lineas;

  for(l = 0; l < lineas; l++)
  {
    yi = espacio * l;
    xf = espacio * (l + 1);
    //Esquina infererior isquierda
    dibujarLinea(colorcito, 0, yi, xf, 300);
    //Esquina inferior derecha
    dibujarLinea(colorcito, 0+yi, 300, 300, 300-xf);
    //Esquina Superior derecha
    dibujarLinea(colorcito, 300, 300-yi, 300-xf, 0);
    //Esquina superior isquierda
    dibujarLinea(colorcito, 300-yi, 0, 0, xf);

    //log Lineas
    console.log("Linea " + l);
  }


  //Dibujar bordes para evitar el efecto aliesing (dibujo entre pixeles)
  dibujarLinea(colorcito, 1,1,1,299);
  dibujarLinea(colorcito, 1,299,299,299);
  dibujarLinea(colorcito, 299,299,299,1);
  dibujarLinea(colorcito, 299,1,1,1);
}
