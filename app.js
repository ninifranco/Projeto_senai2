let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio.';

function botaoConsole(){
    console.log('O botão foi clicado ');
}

function botaoAlert(){
    alert("Eu amo o JS");
}

function botaoPrompt(){
    let cidade = prompt("Digite o nome de uma cidade do Brasil");
    alert(`Estive em ${cidade} e lembrei de você`);
}

function botaoSoma(){
let numero1= parseInt(prompt("Digite o primeiro número para a soma"));
let numero2=parseInt(prompt("Digite o segundo número para a soma"));
let soma = numero1+numero2
alert(`A soma dos números ${numero1} e ${numero2} são ${soma}`);
}


