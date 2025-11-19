// 🟧 3. Calculadora de Média de Notas da Sala

// Objetivo:
// Peça o nome da turma, depois pergunte o nome de cada aluno e sua nota. Ao final, calcule a média geral.

// Classificação: Fácil
// Dica: Use arrays numéricos, soma, e divisão, com um loop.


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let PerguntaRegistros = prompt('Deseja Cadastrar alunos ? (SIM/NAO)').toLowerCase()
let classe = []

if (PerguntaRegistros === 'sim') {
  while (PerguntaRegistros === 'sim') {
    let perguntaAluno = prompt('Escreva o nome do Aluno Desejado (exe: Ana)')    
    let perguntaNota = parseFloat(prompt(`Escreva a nota do aluno ${perguntaAluno} (exe: 10,0)`))   
    let cadastraAlunos = prompt('Deseja Cadastrar Mais Alunos (SIM/NAO)')

    let alunoNovos = {
      aluno : perguntaAluno,
      nota : perguntaNota
    }

    classe.push(alunoNovos)
    
    if (cadastraAlunos == 'nao') {
      alert('Voce nao quis cadastrar mais alunos !')
      break
    }
  }

  let notaTotalTurma = classe.reduce((acumulador,itemAtual)=>{
      return acumulador + itemAtual.nota
    }, 0)

    let mediaTurma = notaTotalTurma / classe.length;
    alert(`Soma das notas totais da turma foi  ${mediaTurma.toFixed(2)}`) 

}else{
  alert('Voce Escolheu nao Cadastrar !')
  alert(' Finalizando ...')
}

