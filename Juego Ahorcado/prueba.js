//Declaraciónes de variables botones
var boton = document.querySelector("#enviar");
var botonr = document.querySelector("#enviarRespuesta");
var botona = document.querySelector("#mostrarRespuesta");
var botone = document.querySelector("#enviarLetra");

//
var imagen;
var contenedorCasillas = document.querySelector(".casillas");
var casillas = document.querySelector(".casillas");
var entradaGlobal;
var letrar;

function capturarEntrada() {
  console.log("capturar entrada")
    var entradaLocal = document.querySelector("#palabra").value;
    entradaGlobal = entradaLocal;
    const arreglo = entradaLocal.split('');
  contador = arreglo.length;
  var i = 0;
    while (i < contador) {
     crearOutput(arreglo[i]);
     i++
}  
  limpiar();
}

boton.addEventListener("click", capturarEntrada);


function limpiar(){
    document.querySelector("#palabra").value = "";
    document.querySelector("#respuesta").value = "";
}

function capturarRespuesta() {
    console.log("click respuesta")
    let respuestaLocal = document.querySelector("#respuesta").value;
    if (respuestaLocal == entradaGlobal) {
        console.log("te has salvado")
    } else{console.log('no has atinado')
                }
    limpiar()
  }
  
  botonr.addEventListener("click", capturarRespuesta);
  

function crearOutput(letra){
    
    var output = document.createElement("output");
    output.value = letra;
    contenedorCasillas.appendChild(output);
    output.classList.add(letra);
    ponerBlanco(letra);
    const letrasAparecidas = ['a', 'i','u','b','d','g','j','l','n','q' ,'s' ,'v' ,'y','p'];
    const indice = letrasAparecidas.findIndex(elemento=>elemento === letra);
    var casilla = document.querySelector("."+letra);
    if(indice == -1){
        console.log("no hay clases con la letra" + letra);
        error();
        
    }else{casilla.style.color = "black";}

}

function ponerBlanco(letra){
var casilla = document.querySelector("."+letra);
    casilla.style.color = "white"
}

function mostrarResultado(){
    console.log('mostrar resultado')
    var casillas = document.getElementsByTagName("output");
    
    for (let i = 0; i < casillas.length; i++) {
        casillas[i].style.color = "black";
      }
}

botona.onclick = mostrarResultado;
botone.onclick = evaluarLetra;
var i=0;
function evaluarLetra(){
    i==i
    console.log(entradaGlobal)
    var letra = document.querySelector("#letra").value;
    
    const letrarr = entradaGlobal.split('');
    
    const indice = letrarr.findIndex(elemento=>elemento === letra);
    if (indice != -1) {
        var letrar = document.querySelector("." + letra)
        letrar.style.color = "black";
        
    }else{
        error();
    }
        
}

function error(){
     console.log("la letra no esta dentro de la palabra"+i)
        i++;
        dibujar(i);
        function dibujar(i){
            var imagen = document.querySelector(".imagen"+i);
            imagen.style.display = "block"

        }
        }
    


