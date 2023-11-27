var ubicacion_nodo = [{ x: 50, y: 375 }];
var probabilidades = [];
var nodosfinales = [];
var ramasIniciales = 0;

//INICIO
var canvas = document.getElementById("miCanvas");
var ctx = canvas.getContext("2d");

// Dibuja un rectángulo en el canvas
ctx.fillStyle = "#000000"; // Color de relleno rojo
ctx.fillRect(50, 375, 70, 40); // Parámetros: x, y, ancho, alto
//

// Agrega texto al canvas
ctx.fillStyle = "#FFF"; // Color de texto negro
ctx.font = "20px Arial"; // Estilo de fuente
ctx.fillText("1", 80, 400); // Texto y posición (x, y)

var numeroNodos = 1;

function aumentar() {
  var input = document.getElementById("numeroRamas");
  var value = parseInt(input.value, 10);
  if (value < numeroNodos) {
    input.value = parseInt(input.value, 10) + 1;
  }
}

function disminuir() {
  var input = document.getElementById("numeroRamas");
  var value = parseInt(input.value, 10);
  if (value > 1) {
    input.value = value - 1;
  }
}

function añadirRama() {
  var ramaActual = parseInt(document.getElementById("numeroRamas").value - 1);
  var nodosCantidad = parseInt(prompt("Cuantos nodos añadira ? "));
  var flag = prompt("Son nodos finales ? [si] [no]");
  flag = flag.toUpperCase();
  console.log(flag);
  //actualizar cantidad nodos
  numeroNodos = numeroNodos + nodosCantidad;
  //
  var validador = true;
  if (flag == "SI") {
    var nombresRamas = [];
    var i;
    var tope;
    var diferencia;
    var altura = 40;
    var distancia = 150;
    //calcular diferencia (espacio entre flechas)

    if (ubicacion_nodo.length == 1) {
      switch (nodosCantidad) {
        case 1:
          diferencia = 0;
          break;
        case 2:
          diferencia = 450;
          break;
        case 3:
          diferencia = 240;
          break;
        case 4:
          diferencia = 160;
          break;
      }
      altura = 200;
      distancia = 250;
      validador = false;
    } else {
      switch (nodosCantidad) {
        case 1:
          diferencia = 0;
          break;
        case 2:
          altura = 20;
          diferencia = 60;
          break;
        case 3:
          diferencia = 80;
          break;
        case 4:
          diferencia = 60;
          break;
      }
      validador = true;
    }

    var acomulador = 0;

    for (i = 0; i < nodosCantidad; i++) {
      nombresRamas[i] = prompt(`Numero : [${i + 1}] = Nombre union :`);
      if (validador == true) {
        var probabilidad = parseFloat(
          prompt(`Numero : [${i + 1}] = Probabilidad:`)
        );
      }
      var numero = parseFloat(
        prompt(`Numero : [${i + 1}] = INGRESE VALOR FINAL:`)
      );
      //
      var nodoResult = numero * probabilidad;
      acomulador = acomulador + nodoResult;
      ///

      if (i == 0) {
        tope = ubicacion_nodo[ramaActual].y - altura;
        drawArrowLine(
          ubicacion_nodo[ramaActual].x + 70,
          ubicacion_nodo[ramaActual].y + 20,
          ubicacion_nodo[ramaActual].x + 120 + distancia,
          tope + 20
        );
        tope = tope + diferencia;
        //
      } else {
        drawArrowLine(
          ubicacion_nodo[ramaActual].x + 70,
          ubicacion_nodo[ramaActual].y + 20,
          ubicacion_nodo[ramaActual].x + 120 + distancia,
          tope + 20
        );
        tope = tope + diferencia;
      }
      /////
    }

    nodosfinales.push(acomulador);
    console.log(nodosfinales);
  } else {
    var nombresRamas = [];
    var i;
    var tope;
    var diferencia;
    var altura = 40;
    var distancia = 150;
    //calcular diferencia (espacio entre flechas)

    if (ubicacion_nodo.length == 1) {
      switch (nodosCantidad) {
        case 1:
          diferencia = 0;
          break;
        case 2:
          diferencia = 450;
          break;
        case 3:
          diferencia = 240;
          break;
        case 4:
          diferencia = 160;
          break;
      }
      altura = 200;
      distancia = 250;
      validador = false;
      ramasIniciales = nodosCantidad;
    } else {
      switch (nodosCantidad) {
        case 1:
          diferencia = 0;
          break;
        case 2:
          altura = 30;
          diferencia = 90;
          break;
        case 3:
          diferencia = 80;
          break;
        case 4:
          diferencia = 60;
          break;
      }
      validador = true;
    }

    for (i = 0; i < nodosCantidad; i++) {
      nombresRamas[i] = prompt(`Numero : [${i + 1}] = Nombre union :`);
      if (validador == true) {
        var probabilidad = parseFloat(
          prompt(`Numero : [${i + 1}] = Probabilidad:`)
        );
        probabilidades.push(probabilidad);
        console.log(probabilidades);
      }
      if (i == 0) {
        tope = ubicacion_nodo[ramaActual].y - altura;
        drawArrowLine(
          ubicacion_nodo[ramaActual].x + 70,
          ubicacion_nodo[ramaActual].y + 20,
          ubicacion_nodo[ramaActual].x + 120 + distancia,
          tope
        );
        dibujarOvalo(
          ubicacion_nodo[ramaActual].x + 120 + distancia,
          tope,
          50,
          25
        );
        // guardar ubicacion en array de posiciones
        ubicacion_nodo.push({
          x: ubicacion_nodo[ramaActual].x + 100 + distancia,
          y: tope - 20,
        });
        ///
        tope = tope + diferencia;

        //
      } else {
        drawArrowLine(
          ubicacion_nodo[ramaActual].x + 70,
          ubicacion_nodo[ramaActual].y + 20,
          ubicacion_nodo[ramaActual].x + 120 + distancia,
          tope
        );
        dibujarOvalo(
          ubicacion_nodo[ramaActual].x + 120 + distancia,
          tope,
          50,
          25
        );

        // guardar ubicacion en array de posiciones
        ubicacion_nodo.push({
          x: ubicacion_nodo[ramaActual].x + 100 + distancia,
          y: tope - 20,
        });
        ///
        tope = tope + diferencia;
      }
      /////
    }
  }
}
////

//recta

function drawArrowLine(startX, startY, endX, endY) {
  // Dibuja la línea
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.stroke();
}

// Dibujar un óvalo
function dibujarOvalo(x, y, radioX, radioY) {
  ctx.beginPath();
  ctx.ellipse(x, y, radioX, radioY, 0, 0, 2 * Math.PI);
  ctx.fillStyle = "black"; // Establecer el color de relleno a negro
  ctx.fill();
  ctx.stroke();
}

function calcular() {
  var resultadoFinal = [];
  var aux = 0;
  var indiceY=0;
  var flag = false;
  if (probabilidades[0] == null) {
    flag = true;
    console.log(nodosfinales);
  }

  if (flag == true) {
    console.log(ramasIniciales);
  } else {
    for (var i = 0; i < ramasIniciales; i++) {
      aux = probabilidades[indiceY] * nodosfinales[indiceY];
      aux = aux + probabilidades[indiceY+1] * nodosfinales[indiceY+1];
      resultadoFinal.push(aux);
      indiceY = indiceY + 2 ;
    }
    console.log(ramasIniciales);
    console.log(resultadoFinal);
  }
}
