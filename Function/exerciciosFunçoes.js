// Construir um menu que é possível escolher um exercicio entre os exercicios anteriores, 
// para ser executado. Faça com que o menu repita a sua execução, disponibilize as opções 
// para o usuário, até que seja digitado "sair"

// function exerciciologin(){
//     let username = prompt("Digita o seu usuario");

//     let senha = prompt("Digite a sua senha");

//     if(username == "admin" && senha == "senha123"){
//         console.log("Login bem sucedido")
//         alert("Login bem sucedido");
//     }
//     else{
//         console.log("Você não tem permissão de acesso")
//         alert("Você não tem permissão de acesso");
//     }

// }

function exercicioparimpar(){
let number = parseInt(prompt("Digite um numero: "))

if(number%2 == 0){
    console.log("É par")
    alert("É par")
}
else{
    console.log("É impar")
    alert("É impar")
}
}

let opcao = window.prompt("MENU\nDigite a opção desejada: \n\n1 - Exercicio Par ou Ímpar\n\n2 - Exercicio da Semana \n\n3 - Exercicio Notas do Aluno \n\n4  - Exercicio Ordem crescente\n\n5 - Exercicio dos contador\n\n6 - Exercicio Loop0a100  ")

switch (opcao) {
    case "1":
        exercicioparimpar()
        break;

    default:
        break;
}

// -------------------------------------------------- //

function exerciciosemana(){

let diadasemana = parseInt(prompt("Digite um numero de 1 a 7: "))

if (diadasemana == "1"){
    console.log("Segunda-Feira") 
    alert("Segunda-Feira");
}
if (diadasemana == "2"){ 
    console.log("vTerça-feira")
    alert("Terça-Feira");
}
if (diadasemana == "3"){ 
    console.log("Quarta-Feira")
    alert("Quarta-Feira");
}
if (diadasemana == "4"){ 
    console.log("Quarta-Feira")
    alert("Quinta-Feira");
}
if (diadasemana == "5"){ 
    console.log("Sexta-Feira")
    alert("Sexta-Feira");
}
if (diadasemana == "6"){ 
    console.log("Sabádo")
    alert("Sabádo");
}
if (diadasemana == "7"){ 
    console.log("Domingo")
    alert("Domingo");
}
}

switch(opcao){
    case "2":
        exerciciosemana()
        break;

    default:
        break;
}

// --------------------------------------------------------------------- //

function exercicionotas(){

let nota1 = parseFloat(prompt("Digite a nota do aluno: "))

let nota2 = parseFloat(prompt("Digite a nota do aluno: "))

let nota3 = parseFloat(prompt("Digite a nota do aluno: "))

let nota4 = parseFloat(prompt("Digite a nota do aluno: "))

let media = (nota1 + nota2 + nota3 + nota4) /4

if(media >= 7.0) {
    console.log("Aprovado")
    alert("Aprovado")
}

else if(media <= 5.0){
    console.log("Reprovado")
    alert("Reprovado")
}

else{
    console.log("Recuperação")
    alert("Recuperação")
}
}

switch(opcao){
    case "3":
        exercicionotas()
        break;

    default:
        break;
}


function exercicioordemcrescente(){

let numero1 = parseInt(prompt("Digite o primeiro numero: "))

let numero2 = parseInt(prompt("Digite o segundo numero: "))

let numero3 = parseInt(prompt("Digite o terceiro numero: "))

if(numero1 < numero2  && numero2 < numero3){
    alert("Crescente")
    console.log("Crescente")
}

else if(numero1 > numero2  && numero2 > numero3){
    alert("Decrescente")
    console.log("Descrescente")
}

else{
    alert("Não está em ordem")
    console.log("Não está em ordem")
}
}

switch(opcao){
    case"4":
    exercicioordemcrescente()
        break;

    default:
        break
}

function exerciciocontadorloop(){
    for (let contador = 1; contador <= 10; contador++) {
            console.log(contador);
        }
}


switch(opcao){
    case"5":
    exerciciocontadorloop()
        break;

    default:
        break
}

function exercicio0a100(){
    let num = 1;
    let soma = 0;

while(num <= 100){
    // soma = soma + num;
    soma += num;
    console.log(soma)
    num++;
}
    console.log("A soma dos números de 1 a 100 é: " + soma);

}
switch(opcao){
    case"6":
    exercicio0a100()
        break;

    default:
        break
}
