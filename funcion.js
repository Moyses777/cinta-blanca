/* This funtion validate if this words are anagrams*/
function validaAnagrama(){
    debugger;
    //validar entrada de usuario
    var palabra1 = document.getElementById('palabra1').value;
    var palabra2 = document.getElementById('palabra2').value;
    if(validaInput(palabra1, palabra2)){
        //hacemos el codigo de anagrama
         var palabra1Ordenada=palabra1.toLowerCase().split("").sort().join("");
         var palabra2Ordenada=palabra2.toLowerCase().split("").sort().join("");

         if(palabra1Ordenada===palabra2Ordenada){
             targeta(palabra1+" - "+palabra2,false);
         }else{
             targeta(palabra1+" - "+palabra2,true);
         }
    }else{
        //Mostramos error en input
        document.write('Le falto una palabra >:v');
    }
}
/** 
 *this funtion validate if the inputs are not empty
 *@param {string} texto1
 *@param {string} texto2
 *@return {boolean}
 *@author {Moises}
 *@since v1.0
*/
function validaInput(texto1,texto2){
     return texto1.length>0 && texto2.length>0;
}
function targeta(texto, error){
    //crear la targeta
    var targeta = document.createElement('div');
    //creo el texto de la targeta
    var h3 = document.createElement('h3');
    //le asigno el texto que recibo para el parametro
    h3.textContent=texto;
    targeta.appendChild(h3);
    targeta.classList.add('targeta');
    //valido si es erroneo o no
    if(error){
        targeta.classList.add('error');

    }else{
        targeta.classList.add('correcto');
    }
    var resultado = document.getElementsByClassName('resultado')[0];
    resultado.appendChild(targeta);

    //limpio los input
    document.getElementById('palabra1').value='';
    document.getElementById('palabra2').value='';
    
}