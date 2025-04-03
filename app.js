
//função hello word
function helloWord(){
   console.log("Olá, mundo!");
}
helloWord();

//função hello com nome
function helloNome(nome){
    console.log(`Olá, ${nome}!`)
}
helloNome('bruno');

//função que retorna um número dobrado
function numeroDobrado(numero1){
    return numero1*2;
}
let numeroDobrados = numeroDobrado(3);
console.log(numeroDobrados);

//função media de 3 números
function media (a, b,c){
    return (a+b+c)/3;
}
mediana = media(9,9,9)
console.log(mediana);

//função maior numero
function maiorNumero(a,b){
    return a > b ? a: b;
}
maior=maiorNumero(2,4);
console.log(maior)

//função que recebe multiplica ele por ele mesmo
function potencial(a){
    return a*a;
}
multiplicado = potencial(6);
console.log(multiplicado);