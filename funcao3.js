let numero = parseInt(prompt("Digite um número para fatorar"));
let fatorial = 1;
 
function calcularFatorial (parNumero){
    if (parNumero == 1 || parNumero == 0 ){
        return 1
    }
    else{
        while (parNumero){
            fatorial *= parNumero;
            parNumero--;
        }
    }
    return fatorial;
}
let resultado = calcularFatorial(numero);
alert (`O fatorial do número ${numero} é ${resultado}`);
 