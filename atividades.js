
//3-
function mensagemDeOla(){
    console.log("Olá Mundo!");
}
mensagemDeOla();

//atividade 4-
let nome;
function receberNome( nome = prompt ("Escreva seu nome")){
    console.log(`Olá ${nome}!`);
}
receberNome();

//atividade 5-
let numero = parseInt(prompt("Escreva um número"));
function dobroNumero(parNumero){
    return parNumero *2;
}
let dobro = dobroNumero(numero);
alert(`O dobro do número digitado é ${dobro}`);
    
//atividade 6-
let numero1ParaMedia = parseInt(prompt("Escreva o primeiro número"));
let numero2ParaMedia = parseInt(prompt("Escreva o segundo número"));
let numero3ParaMedia = parseInt(prompt("Escreva  o terceiro número"));
let media;

function numeros(numeroParaMedia){
    return (numero1ParaMedia + numero2ParaMedia +numero3ParaMedia)/3;
}
media=numeros();
console.log(`A média do números é ${media}`);

//atividade 7-
let num1 = prompt("Escreva um número");
let num2 = prompt("Escreva outro número");

function conferirNumero(){
if(num1 > num2){
    return console.log(`O número ${num1} é o maior`);
}
else if (num2 > num1){
    return console.log(`O número ${num2} é o maior`);
}
}
conferirNumero();

//atividade 8-
let numParaMulti=prompt("Escreva um número");
function receberNumeroParaMulti(mult){
    return mult*mult;
}
let multiplicacao=receberNumeroParaMulti(numParaMulti);
console.log (`O número multiplicado por ele mesmo é ${multiplicacao}`);
