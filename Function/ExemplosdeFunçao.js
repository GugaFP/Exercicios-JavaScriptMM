// // Hoisting -> Usa funções(functions) e variaveis (var), antes
// // da declaração

// // Declaracao da função -> Você "ensina" o computador à realizar
// // o quee está dentro da função  

// function saudacao() {    
//     let nomePessoa = prompt("Digite seu nome: ")

//     let horaAtual = new Date().getHours()
    
//     if (horaAtual > 6 && horaAtual < 13) {
//         window.alert("Bom dia " + nomePessoa)
//     } else if (horaAtual >= 13 && horaAtual < 18) {
//         window.alert("Boa tarde " + nomePessoa)
//     } else {
//         window.alert("Boa noite " + nomePessoa)
//     }    
// }

// // Chamada da função -> Pedindo para o computador realizar as 
// // tarefas que voce ensinou
// saudacao()

// function somar(num1, num2, num3) {
//     let soma = num1 + num2 + num3

//     return soma
// }

// // let resultado = somar(5, 16, 19) // 40
// // let resultado2 = somar(1, 1, 1) // 3

// // console.log("O resultado é: " + resultado);

// // Exemplos de funções
// // window.alert("Texto")
// // console.log("Outro texto")
// // window.prompt("Digite algo: ")


// // Exemplo objeto

// let professor = {
//     nome: "Thiago",
//     sobrenome: "Nascimento",
//     idade: 26
// }

// let aluno = {
//     nome: "Vanessa",
//     nomeComposto: "Byork",
//     idade: 24
// }

// let aluno2 = {
//     nome: "Eduardo",
//     sobrenome: "Audi",
//     idade: "25+"
// }
// let aluno3 = {
//     nome: "Eduardo",
//     sobrenome: "Pereira",
//     idade: "25+"
// }

// let produto = {
//     nome: "Controle Remoto",
//     marca: "Philco",
//     modelo: "XRCTFG-456",
//     preco: 30.0
// }



// console.log("Antes do desconto: " + produto.preco);

// produto.preco = 20

// console.log("Depois do desconto: " + produto.preco);

// // professor.nome = prompt("Digite o nome: ")
// // professor.sobrenome = prompt("Digite o sobrenome: ")
// // professor.idade = parseInt(prompt("Digite o idade: "))

// // console.log(professor);