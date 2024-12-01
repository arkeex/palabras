document.getElementById("cuadro1_1").focus();
var op = document.getElementById("cuadro1_2").innerHTML;
console.log(op); 
var contador = 0;
function primerCambio(elemento){
    if (contador == 0) contador++;
    else{
        cambiar(elemento);
        contador = 0;       
    }
}
function numeroFila(elemento){
    return elemento.id.charAt(6);
}
function esLetra(e,elemento){
    console.log(e.key);
    letras = /^[A-Za-z]+$/;
    if(e.key.match(letras)) {
        setTimeout(() => {
            cambiar(elemento);
          }, "1");
    }
    else {
        
    }
}
function cambiar(elemento){   
    var sigte = elemento.id.charAt(8);
    document.getElementById("cuadro"+ numeroFila(elemento)+"_" + ++sigte).focus();   

}   
    function ultimoCambio(elemento){
    var fila = numeroFila(elemento);
    for (var i = 1; i<=5;i++){
        document.getElementById("cuadro" + fila + "_" + i).setAttribute("contenteditable", "false");
    }   
    document.getElementById("cuadro" + ++fila + "_1").focus();

}