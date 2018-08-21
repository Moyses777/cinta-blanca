var contador = 0;
var body = document.getElementsByTagName('body')[0];
for(var index=1; index<=10000; index++){
    if(index%2==0){
   var button=document.createElement('button');
   button.textContent=index;
   body.appendChild(button);
   contador++; 
   
}
}
alert(contador);

