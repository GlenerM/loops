// 🟦 1. Cadastro de Animais da Fazenda

// Objetivo:
// Peça ao usuário o nome de um fazendeiro e registre todos os animais da fazenda perguntando
// o nome e o tipo de cada animal. Continue até ele desejar parar. No fim, mostre o total de
// animais e suas categorias.

// const nome = prompt('Digite o nome do fazendeiro')
// let pergunta = prompt('Deseja Registrar algum animal ? sim/nao')
// let nomeDosAnimais = []
// let tiposDeAnimais= []

// while (pergunta == 'sim') {
//   let registraAnimal = prompt('Qual o nome do animal que vc quer registrar (exe: brutus ...) ')
//   nomeDosAnimais.push(registraAnimal)

//   let tipoDeAnimal = prompt('Que tipo de animal ele e (exe: gato ...) ')
//   tiposDeAnimais.push(tipoDeAnimal)

//   let novaPergunta = prompt('Deseja Registrar mais algum animal ? sim/nao')

//   if (novaPergunta != 'sim') {
//    alert(`Voce nao quis registrar mais nenhum Animal`)
//    break
//   }

// }
// if (pergunta !== 'sim') {
//   alert(`Voce nao quis registrar nenhum Animal`)
// }

// let totalDeAnimais = nomeDosAnimais.length
// let totalCategorias = tiposDeAnimais.length
// alert(`o fazendeiro ${nome} tem um total ${totalDeAnimais} animais dos tipos ${totalCategorias}...`)

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 🟩 2. Biblioteca do Bairro — Registro de Livros

// Objetivo:
// O programa deve cadastrar livros recebidos pela biblioteca, pedindo título, autor e ano. Continue cadastrando até o usuário parar. Depois, exiba todos os livros.

// let biblioteca = []

// let perguntaCadastrarLivro = prompt('Deseja cadastrar Livros? (sim/nao)')

// while (perguntaCadastrarLivro == 'sim'){

//   let novoLivro = prompt(`Digite o nome do livro`)
//   let novoAutor = prompt('Digite o nome do Autor')
//   let novoAnoLancamento = prompt('Digite ano de lancamento do Livro')

//   let cadastraLivros = {
//   livro : novoLivro,
//   autor : novoAutor,
//   ano : novoAnoLancamento
//     }

//   let cadastraMaisLivros = prompt('Deseja cadastrar mais livros? (sim/nao)')

//   biblioteca.push(cadastraLivros)

//   if(cadastraMaisLivros == 'nao'){
//     alert('Voce nao quis cadastrar mais nenhum Livro')
//     break
//   }
// }

// if(perguntaCadastrarLivro == 'nao'){
//    alert('Voce nao quis cadastrar Livro Algum')
//  }

// let totalDeLivros = biblioteca.length
// alert(`a ${biblioteca} tem a quantidade de livros `)

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------





/////////////////////////////////////////////////////////////////////////////////////////////////////////// CODIGO PARA SE BASEAR NO EXERCIO 3 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const produtos = [
//   { nome: 'Laptop', preco: 1200 },
//   { nome: 'Mouse', preco: 25 },
//   { nome: 'Monitor', preco: 300 }
// ]

// const precoTotal = produtos.reduce((acumulador, produtoAtual) => {
//   return acumulador + produtoAtual.preco;
// }, 0);

// // console.log(precoTotal);
// // console.log(produtos.length)

// const valorFinal = precoTotal / produtos.length
// // console.log(valorFinal.toFixed(0))

// if (valorFinal >= 600 ){
//   return  console.log('vc passou')
// }else{
//   console.log('vc nao passou')
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
