var arreglo=[];
console.log(arreglo);
console.log(arreglo.length);
arreglo.push('Luis');
console.log(arreglo);
console.log(arreglo.length);
arreglo.push('Liz');
console.log(arreglo);
console.log(arreglo.length);
arreglo.push('israel');
console.log(arreglo);
console.log(arreglo.length);

console.log(arreglo[1]);
arreglo.push('lalo');
arreglo.push('rogelio');
arreglo.push('Tony');
arreglo.push('kachys');
arreglo.push('carlos');
var body = document.getElementsByTagName('body')[0];
for(var indice=0; indice<arreglo.length; indice++){
   var button = document.createElement('button');
   button.textContent = arreglo[indice];
   
   body.appendChild(button);
}
var nombre=Moises 
var numeros=[2,8,5,3,0,4,7,6,9,1];
console.log(numeros);
console.log(numeros.sort());
console.log(numeros.reverse());
nombre.split('').sort()
nombre.split('')