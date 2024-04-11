let numero = prompt("Digite um numero para saber sua tabuada");
 
function tabuada(numeroP){
    for(var i=1;i<=10 ; i++){
        console.log (` ${numeroP} X  ${i}=  ${numero * i}`);
    }
   
}
tabuada(numero);