// const nome = prompt('Digite seu nome')
// const altura = parseFloat(prompt('Digite sua altura em metros (ex: 1.75)'))
// const peso = parseFloat(prompt('Digite seu peso'))
// const imc = peso / (altura * altura)

//     if (imc < 18.5) {
//         alert(`${nome}, seu IMC é ${imc}Kg. Você está classificado com: MAGREZA.`)
//     } 
//     else if (imc >= 18.5 && imc < 25) {
//         alert(`${nome}, seu IMC é ${imc}Kg. Você está classificado com: NORMAL.`)
//     }
//     else if (imc >= 25 && imc < 30) {
//         alert(`${nome}, seu IMC é ${imc}Kg. Você está classificado com: SOBREPESO.`)
//     }
//     else {
//         alert(`${nome}, seu IMC é ${imc}Kg. Você está classificado com: OBESIDADE.`)
//     }

// ----------------------------------------------------------------------------------------------------------------------

// 1. Calculadora de Desconto

// Uma loja está oferecendo 10% de desconto em qualquer produto.
// Peça ao usuário o preço do produto e mostre o valor final com desconto.

// const nome = prompt('digite seu nome')
// const preco = parseFloat(prompt('digite o preço do produto'))
// let precoComDesconto = preco.toFixed(2) - (preco.toFixed(2) * 0.10)

// alert(`${nome} o desconto do Produto foi de R$${preco.toFixed(2)} para R$${precoComDesconto.toFixed(2)}`)

// ----------------------------------------------------------------------------------------------------------------------

// 2. Validação de Idade para Entrada

// Um evento só permite entrada de pessoas com 18 anos ou mais.
// Peça a idade do usuário e informe se ele pode entrar ou não pode entrar.

// const nome = prompt('Digite seu Nome')
// const idade = prompt('Digite sua Idade')

// if (idade >= 18) {
//     alert(`${nome} ja tem ${idade} anos de idade portanto ja pode entrar no Evento!`)
// }else{
//     alert(`${nome} nao tem ${idade} anos de idade portanto nao pode entrar no Evento!`)
// }

// ----------------------------------------------------------------------------------------------------------------------

// 3. Conversor de Temperatura

// Peça ao usuário um valor em Celsius e converta para Fahrenheit.
// Mostre o resultado na tela.

// const Temperatura = parseFloat(prompt('Digite a temperatura do ambiente'))
// let transforma = (Temperatura.toFixed(1) * 1.8) + 32
// alert(`a temperatura de ${Temperatura} Celsius foi convertida para ${transforma} Fahrenheit`)

// ----------------------------------------------------------------------------------------------------------------------

// 4. Classificação de IMC

// Peça o peso e a altura do usuário e calcule o IMC.
// Retorne a classificação:

// abaixo de 18.5 → Magreza

// entre 18.5 e 24.9 → Normal

// entre 25 e 29.9 → Sobrepeso

// acima de 30 → Obesidade

// ----------------------------------------------------------------------------------------------------------------------

// const nome = prompt('Digite seu nome')
// const alturaString = prompt('Digite sua altura (ex: 1,75)'); 
// const altura = parseFloat(alturaString.replace(',', '.'));
// const pesoString = prompt('Digite seu Peso (ex: 75,5)');
// const peso = parseFloat(pesoString.replace(',', '.'));
// const formula = peso /(altura*altura)

// if(formula < 18){
//     alert(`${nome} vc esta com magreza `)
// }
// else if(formula > 18 && formula < 24){
//     alert(`${nome} vc esta com peso Normal `)
// }else if(formula > 25 && formula < 30){
//     alert(`${nome} vc esta com Sobrepeso`)
// }else {
//     alert(`${nome} vc esta com Obesidade`)
// }

// ----------------------------------------------------------------------------------------------------------------------

// 5. Sistema de Login (simples)

// Você tem um usuário padrão:
// Peça ao usuário para digitar o login e senha.
// Se ambos estiverem corretos → “Acesso permitido”.
// Se estiver errado → “Acesso negado”.

// let usuario = "admin";
// let senha = "1234";

// const login = prompt('Digite o login')
// const password = parseFloat(prompt('digite a senha '))

// if (login == usuario && password == senha) {
//     alert('Acesso permitido')
// }else{
//     alert('Acesso negado')
// }

// ----------------------------------------------------------------------------------------------------------------------

// 6. Controle de Estoque

// Uma loja tem 20 unidades de um produto.
// Peça que o usuário digite quantas unidades deseja comprar.

// Se tiver no estoque → “Compra realizada”

// Se não tiver → “Quantidade indisponível”

// E atualize o valor do estoque.

// let produto = 20
// let quantidade = parseFloat(prompt('quantos Produtos Deseja'))

// if (quantidade <= 20) {
//     alert('Compra realizada')
// }else{
//     alert('Quantidade indisponível')
// }

// ----------------------------------------------------------------------------------------------------------------------

// 7. Gerenciador de Tarefas

// Crie um array vazio.
// O usuário poderá digitar 3 tarefas, uma por vez.
// Salve no array e depois exiba:

// a lista completa

// a quantidade de tarefas

// a primeira e a última tarefa

// let tarefas = []
// let usuario = prompt('Digite sua Tarefa')
// let tarefa = usuario

// while(tarefa = 3){
//     usuario
// }

// ----------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------

// 🔁 1. while

// ▶ O while executa enquanto uma condição for verdadeira.

// let i = 0;

// while (i < 5) {
//   console.log("Valor de i:", i);
//   i++;  // importante evitar loop infinito!
// }

                                                        //

// 🔵 EXERCÍCIOS COM while
// ✅ 1. Fácil — Contagem simples

// Peça ao usuário um número final.
// Use while para contar do 1 até esse número e mostrar na tela

// for (let indice = 0 ; indice <= 20; indice++){
//     console.log(indice)
// }

// let inicio = 0
// let vezesDois = inicio * 2
 
// while(vezesDois < 10){
//     console.log(inicio)
//     inicio++
    
// }


let numero = 2; // Inicializa o contador

while (numero <= 10) {
  console.log(numero); // Exibe o número par
  numero = numero + 2; // Garante que o próximo número será o par seguinte
}