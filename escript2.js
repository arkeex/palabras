var columna = 0, fila = 1;
var respuestas = ["pollo","FRUTA"]
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
    
    var palabra = [];

    for(let i = 1 ; i <= 5; i++){
     palabra.push(document.getElementById(`cuadro${fila}_${i}`).innerText);
    }
    const orange = respuestas[1].split("").map(letter => palabra.includes(letter))

    console.log(orange);
    columna = 0;
    fila++;
}
