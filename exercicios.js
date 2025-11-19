
// // 🟢 Exercício Fácil
// // Situação:
// // Você quer comprar 3 lanches no valor de R$8 cada.
// // Crie variáveis para armazenar o valor do lanche, quantidade e calcule o valor total.

// // Saída esperada: Valor total: R$24

// const valor = 8
// const quantidade = 3
// const valorTotal = valor * quantidade

// alert(`vc comprou ${quantidade} lanches no valor ${valor} cada Todos os lanches somados sao de ${valorTotal}`)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 🔴 Exercício Difícil

// Situação:
// Um vendedor recebe salário fixo + comissão de 7% sobre as vendas.
// Crie variáveis para salário base e valor total vendido no mês, e calcule o salário final.
// Mostre também quanto da comissão foi ganho.

// const salarioFixo = 2.500
// const comissao = salarioFixo * 0.07
// const diasTrabalhadosNoMes = 22

// const SalarioComissao = diasTrabalhadosNoMes * comissao
// const salarioTotal = salarioFixo + SalarioComissao

// alert(`o funcionaria ganha R$${salarioFixo.toFixed(3)} e sua comissao é de 7% sobre as vendas realizadas 
//    ele vendeu 1 produto durante um mes inteiro e seu salario neste mes foi R$${salarioTotal.toFixed(3)} `)


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 🟢 Exercício Fácil

// Situação:
// Peça uma idade (pode ser variável fixa mesmo) e verifique:

// Se idade ≥ 18 → "Pode dirigir"

// Caso contrário → "Não pode dirigir"


// const idade = parseFloat(prompt('digite sua idade'))

// if (idade >=18 ) {
//     alert('vc ja pode dirigir ')
// }else{
//     alert('vc nao pode dirigir')
// }

// 🟡 Exercício Médio

// Situação:
// Você possui R$ no seu saldo.
// Se o saldo for maior que 100, escreva "Pode comprar o jogo".
// Se estiver entre 50 e 100, escreva "Quase lá".
// Senão, escreva "Saldo insuficiente".

// const saldoPedido = parseFloat(prompt('Digite o saldo que possui em conta'))

// if(saldoPedido > 100){
//     alert('Pode comprar o jogo')
// }else if(saldoPedido = 50 && saldoPedido < 100){
//     alert('Quase lá')
// }else{
//     alert('Saldo insuficiente')
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 🔴 Exercício Difícil

// Situação:
// Crie um programa que recebe a nota do aluno (0 a 100) e classifica:

// ≥ 90 → A

// 80-89 → B

// 70-79 → C

// 60-69 → D

// < 60 → F

// Mostre também uma mensagem para cada caso (ex: "Muito bem!", "Estude mais!", etc.)

// const nota = parseFloat(prompt('Digite a nota de 0 à 100 !'))

// if(nota > 90){
//     alert('sua nota foi A')
// }else if(nota >= 80 && nota <= 89 ){
//     alert('sua nota foi B')
// }else if(nota >= 70 && nota <= 79 ){
//     alert('sua nota foi C')
// }else if(nota >= 60 && nota <= 69 ){
//     alert('sua nota foi D')
// }else if (nota < 60 ){
//     alert('sua nota foi F')
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 🟢 Exercício Fácil
// Situação:
// Imprima os números de 1 até 10 usando um for.

for(let i = 0; i <= 10; i++){
  console.log(`Numero ${i}`);
}



