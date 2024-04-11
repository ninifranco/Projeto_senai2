let valor = prompt("Digite o valor de seu dinheiro");
let total;

function valorNumero(valor){
   total=valor/4.80;
   return alert(`O valor da conversão é de ${total.toFixed(2)}`);

}
valorNumero(valor);