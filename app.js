let titulo = document.querySelector('h1');

titulo.innerHTML = 'Hora do desafio';

function botaoclicado(){
    console.log('O botão foi clicado');
}
function euamojs(){
    alert('Eu amo JS');
}
function nomedecidade(){
    let cidade = prompt('diga uma cidade do brasil: ');
    alert(`Estive em ${cidade} e lembrei de você`);
}

function botaosomar(){
    let numero1 = Number(prompt("Digite um número"));
    let numero2 = Number(prompt("Digite um número"));
    let soma = numero1 + numero2;
    alert(`A soma de ${numero1} + ${numero2} é igual a ${soma}`);
}