var columna = 0, fila = 1;
var respuestas = ["pollo","fruta"]
document.addEventListener('keydown', function(event) {
    const tecla = event.keyCode;
    if (tecla >= 65 && tecla <= 90){
        escribir(String.fromCharCode(tecla));
    }          
    

});     
function escribir(letra){
    columna++;
    document.getElementById(`cuadro${fila}_${columna}`).innerText = letra;
    if (columna == 5){
        verificar();
    }

}
function verificar(){

    
    var palabra = '';
    for(var i = 1 ; i <= 5; i++){
     palabra += document.getElementById(`cuadro${fila}_${i}`).innerText;
        
    }
    console.log(palabra);
    columna = 0;
    fila++;
}