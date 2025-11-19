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

// 🟧 3. Calculadora de Média de Notas da Sala

// Objetivo:
// Peça o nome da turma, depois pergunte o nome de cada aluno e sua nota. Ao final, calcule a média geral.

// Classificação: Fácil
// Dica: Use arrays numéricos, soma, e divisão, com um loop.

// let PerguntaRegistros = prompt('Deseja Cadastrar alunos ? (SIM/NAO)').toLowerCase()
// let classe = []

// if (PerguntaRegistros === 'sim') {
//   while (PerguntaRegistros === 'sim') {
//     let perguntaAluno = prompt('Escreva o nome do Aluno Desejado (exe: Ana)')    
//     let perguntaNota = parseFloat(prompt(`Escreva a nota do aluno ${perguntaAluno} (exe: 10,0)`))   
//     let cadastraAlunos = prompt('Deseja Cadastrar Mais Alunos (SIM/NAO)')

//     let alunoNovos = {
//       aluno : perguntaAluno,
//       nota : perguntaNota
//     }

//     classe.push(alunoNovos)
    
//     if (cadastraAlunos == 'nao') {
//       alert('Voce nao quis cadastrar mais alunos !')
//       break
//     }
//   }

//   let notaTotalTurma = classe.reduce((acumulador,itemAtual)=>{
//       return acumulador += itemAtual.nota
//     }, 0)

//     let mediaTurma = notaTotalTurma / classe.length;
//     alert(`Soma das notas totais da turma foi  ${mediaTurma.toFixed(2)}`) 

// }else{
//   alert('Voce Escolheu nao Cadastrar !')
//   alert(' Finalizando ...')
// }

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 🟦 4. Loja Virtual — Carrinho de Compras

// Objetivo:
// Solicite ao usuário produtos para o carrinho (nome e preço). Continue até ele parar. No final, exiba o valor total e a lista de itens.

// Classificação: Médio
// Dica: Arrays de objetos, Number(), laços de repetição. 

// let PerguntaCompra = prompt('Deseja fazer alguma Compra ? (SIM/NAO)').toLowerCase()
// let compras = []

// if (PerguntaCompra === 'sim') {
//   while (PerguntaCompra === 'sim') {
//     let nomeProduto = prompt('Escreva o nome do Produto (exe: Air Fryer)')    
//     let precoProduto = parseFloat(prompt(`Escreva o preço ${nomeProduto} (R$250,00)`))   
//     let perguntaNovaCompra = prompt('Deseja Comprar mais Coisas ? (SIM/NAO)')

//     let novasCompras = {
//       nome : nomeProduto,
//       preco : precoProduto
//     }

//     compras.push(novasCompras)
    
//     if (perguntaNovaCompra == 'nao') {
//       alert('Voce nao quis comprar mais nada !')
//       break
//     }
//   }

//    const listaDeComprasFeitas = compras.map((itemAtual)=>{
//       return itemAtual.nome
//   })

//   let precoTotal = compras.reduce((acumulador,itemAtual)=>{
//       return acumulador += itemAtual.preco
//     }, 0)
    
//     alert(`Soma dos produtos ${listaDeComprasFeitas} foi de ${precoTotal.toFixed(2)}`) 

// }else{
//   alert('Voce nao quis Comprar mais nada !')
//   alert(' Finalizando ...')
// }

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


