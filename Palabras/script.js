var columna = 0, fila = 1;
const soluciones = ["carro","barco","arena","chica","cuero","cielo","salsa"]
var indice = 6;//Math.floor(Math.random() * soluciones.length);
console.log(indice);
document.addEventListener('keydown',function(event) {
 if(event.keyCode>=65 && event.keyCode<=90){  
  escribir(event.key);
 } 
if (event.key == "Backspace"){
  document.getElementById("cuadro"+ fila + "_" + columna).innerText = "";
  columna--;
}
if (event.key == "Enter" && columna== 5){
 columna = 0;
 confirmar();
}
});

function escribir(letra){
 if (columna < 5){
  columna++;
  document.getElementById("cuadro"+ fila + "_" + columna).innerText = letra;
 }
}
function confirmar(){
 var palabra ="";

 for(var i = 1; i<=5; i++){
  palabra+= document.getElementById("cuadro" + fila + "_" + i).innerText;
 }

 for(var i = 0; i<=4; i++){
  for(var j = 0; j<=4; j++){
    if(palabra[j] == "n"){
      console.log(i);
      console.log(j);
      console.log(soluciones[indice][i]);
      console.log(palabra[j]);
    }
   if(soluciones[indice][i] == palabra[j] && i==j){
    var cuadro = document.getElementById("cuadro" + fila + "_" + (j+1));
    cuadro.style.backgroundColor = "green";

   } else if(soluciones[indice][i] == palabra[j] && i!=j){
    if(palabra[j] == "n"){
    console.log('in');  
    console.log("cuadro" + fila + "_" + (j+1));
   }
    var cuadro = document.getElementById("cuadro" + fila + "_" + (j+1));
    cuadro.style.backgroundColor = "orange";}
    
  }
  
 }
 if(palabra == soluciones[indice]){
  alert("felicidades");   
 }
 
 fila++;
}
