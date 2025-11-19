// 🟦 4. Loja Virtual — Carrinho de Compras

// Objetivo:
// Solicite ao usuário produtos para o carrinho (nome e preço). Continue até ele parar. No final, 
// exiba o valor total e a lista de itens.

// Classificação: Médio
// Dica: Arrays de objetos, Number(), laços de repetição.

let PerguntaCompra = prompt('Deseja fazer alguma Compra ? (SIM/NAO)').toLowerCase()
let compras = []

if (PerguntaCompra === 'sim') {
  while (PerguntaCompra === 'sim') {
    let nomeProduto = prompt('Escreva o nome do Produto (exe: Air Fryer)')    
    let precoProduto = parseFloat(prompt(`Escreva o preço ${nomeProduto} (R$250,00)`))   
    let perguntaNovaCompra = prompt('Deseja Comprar mais Coisas ? (SIM/NAO)')

    let novasCompras = {
      nome : nomeProduto,
      preco : precoProduto
    }

    compras.push(novasCompras)
    
    if (perguntaNovaCompra == 'nao') {
      alert('Voce nao quis comprar mais nada !')
      break
    }
  }

  let precoTotal = compras.reduce((acumulador,itemAtual)=>{
      return acumulador += itemAtual.preco
    }, 0)
    
    alert(`Soma dos Produtos Comprados foi ${precoTotal.toFixed(2)}`) 

}else{
  alert('Voce nao quis Comprar mais nada !')
  alert(' Finalizando ...')
}
