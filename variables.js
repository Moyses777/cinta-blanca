function pregunta(){

var edad = prompt('Pon la edad: ');
var resultado;
console.log(edad);
if (edad >= 18) {
    console.log('ya es mayor de edad');
} else {
    console.log('Estas chavo chavo');
    if(edad<=15){
        if(edad<=12){
           if(edad<=6){
               console.log('kinder');
           }else{
               console.log('primaria');
           }
        }else{
            console.log('secundaria');
        }
    }else{
        console.log('esta en la prepa');
    }

}
if(edad >= 18){
   if(edad > 23){
    if(edad > 26){
      if(edad > 30){
        if(edad > 45){
          if(edad > 60){
            alert('Abuelito');
            resultado='Abuelito';
          }else{
              alert('Adulto');
              resultado='Adulto';
          }
        }else{
            alert('Señor');
            resultado='Señor';
        }
      }else{
          alert('Doctorado');
          resultado='Doctorado';
      }
    }else{
        alert('Maestria');
        resultado='Maestria';
    }
   }else{
       
       alert('Universidad');
       resultado='Universidad';
   }
}

var encabezado = document.createElement('h1');
encabezado.textContent = resultado;
var body = document.getElementsByTagName('body')[0];
body.appendChild(encabezado);
}