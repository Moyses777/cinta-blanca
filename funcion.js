/* This funtion validate if this words are anagrams*/
function validaAnagrama(){
    debugger;
    //validar entrada de usuario
    var palabra1 = document.getElementById('palabra1').value;
    var palabra2 = document.getElementById('palabra2').value;
    if(validaInput(palabra1, palabra2)){
        //hacemos el codigo de anagrama
         var palabra1Ordenada=palabra1.toLocaleLowerCase().split("").sort().join("");
         var palabra2Ordenada=palabra2.toLocaleLowerCase().split("").sort().join("");

         if(palabra1Ordenada===palabra2Ordenada){
             document.write('Son anagramas');
         }else{
             document.write('No son anagramas');
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
function creaTargeta()