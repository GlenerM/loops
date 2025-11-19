// ✅ 20 Exercícios em Situações-Problema (JS + Lógica + Rotina de Front-End)
// 1. Controle de Formulário de Cadastro

// Nível: Fácil
// Tema: DOM + validações simples
// Problema:
// Crie um programa que receba nome, e-mail e senha de um usuário através de inputs HTML. Ao clicar em “Cadastrar”, verifique se os campos estão preenchidos. Exiba uma mensagem de sucesso ou erro no DOM.
// Dica: Use document.querySelector() e innerText.

// 2. Carrinho de Compras Simples

// Nível: Fácil
// Tema: Arrays
// Problema:
// Peça ao usuário que digite produtos e adicione-os em um array até que ele digite "finalizar". Depois exiba a lista de produtos e a quantidade total.
// Dica: Use push() e loops.

// 3. Sistema de Votação de Preferências

// Nível: Fácil
// Tema: Switch + contadores
// Problema:
// Permita que o usuário vote entre 3 opções (ex.: “Dark mode”, “Light mode”, “Sistema”). Repita até digitar "sair". Mostre o total de votos de cada opção.
// Dica: Use switch para tratar cada voto.

// 4. Controle de Acesso por Idade

// Nível: Fácil
// Tema: Condicionais
// Problema:
// Simule um site que só permite acesso a maiores de 18. Pergunte a idade e exiba se o acesso é permitido ou negado.
// Dica: Use if/else.

// 5. Ranking de Usuários

// Nível: Médio
// Tema: Objetos + arrays + ordenação
// Problema:
// Crie objetos representando usuários com nome e pontuação. Adicione vários ao array e depois exiba um ranking ordenado.
// Dica: Use sort() com função de comparação.

// 6. Simulador de Feed de Notícias

// Nível: Médio
// Tema: DOM + templates
// Problema:
// Crie um campo onde o usuário escreve uma “notícia”. Ao clicar em “Publicar”, ela é adicionada visualmente ao feed mostrando data e hora.
// Dica: Use new Date() e insertAdjacentHTML().

// 7. Filtro de Lista de Produtos

// Nível: Médio
// Tema: Funções + filter
// Problema:
// Tenha uma lista fixa de produtos com nome e preço. Permita ao usuário digitar um valor mínimo e filtre apenas os produtos acima desse valor.
// Dica: Use filter().

// 8. Agenda de Contatos

// Nível: Médio
// Tema: Objetos + loops
// Problema:
// O usuário pode cadastrar contatos com nome, telefone e e-mail. Ele pode adicionar quantos quiser e no final exibir toda a agenda formatada.
// Dica: Armazene cada contato como objeto dentro de um array.

// 9. Simulador de Notificações (Interval)

// Nível: Médio
// Tema: setInterval
// Problema:
// Crie uma função que simule notificações surgindo a cada 3 segundos na tela. Permita iniciar e parar as notificações.
// Dica: Armazene o ID do intervalo.

// 10. Cadastro com Máscara de CPF

// Nível: Médio
// Tema: Regex
// Problema:
// Crie um input de CPF que automaticamente formata o número enquanto o usuário digita (000.000.000-00).
// Dica: Use replace() com regex.

// 11. Calculadora de Tempo Usando Datas

// Nível: Médio
// Tema: Date
// Problema:
// Peça a data de início e fim de um projeto e exiba quantos dias totais ele levou.
// Dica: Subtraia datas convertidas com getTime().

// 12. Simulador de Login com LocalStorage

// Nível: Médio/Avançado
// Tema: Web Storage API
// Problema:
// Armazene um usuário e senha no localStorage. Ao tentar fazer login, valide os dados.
// Dica: Use localStorage.getItem() e JSON.parse().

// 13. Sistema de Tarefas com Prioridade

// Nível: Médio/Avançado
// Tema: Classes
// Problema:
// Use uma classe Tarefa com atributos: nome, prioridade e concluída. Permita criar tarefas, marcar como concluídas e listar pendentes.
// Dica: Crie métodos na classe.

// 14. Consumo de API de Previsão do Tempo

// Nível: Avançado
// Tema: fetch + Promises
// Problema:
// Consuma uma API pública de clima e exiba temperatura e condição do tempo com base na cidade digitada.
// Dica: Use fetch() e then().

// 15. Chat Simples em Tempo Real (Fake)

// Nível: Avançado
// Tema: async/await + DOM
// Problema:
// Simule um chat onde, após o usuário enviar uma mensagem, o "sistema" responde com um atraso de 2 segundos.
// Dica: Use await new Promise(r => setTimeout(r, 2000)).

// 16. Editor de Texto com Contador de Caracteres

// Nível: Avançado
// Tema: Eventos do teclado
// Problema:
// Crie uma textarea que mostra em tempo real quantos caracteres foram digitados e o limite permitido.
// Dica: Use o evento input.

// 17. Simulador de Upload de Arquivo

// Nível: Avançado
// Tema: Eventos + barra de progresso
// Problema:
// Faça um input de arquivo e, ao selecionar um arquivo, simule uma barra de progresso crescendo com setInterval.
// Dica: Atualize o width de um elemento estilo progress bar.

// 18. Gerador de Relatórios JSON

// Nível: Avançado
// Tema: JSON + download de arquivos
// Problema:
// O usuário preenche um formulário, e ao clicar em “Gerar Relatório”, um arquivo JSON com os dados é baixado automaticamente.
// Dica: Use Blob() e URL.createObjectURL().

// 19. Dashboard com Gráfico Simples

// Nível: Avançado
// Tema: Canvas ou biblioteca de gráficos
// Problema:
// Dado um array de vendas por mês, exiba um gráfico simples de barras mostrando o resultado.
// Dica: Use <canvas> e CanvasRenderingContext2D.

// 20. Sistema Completo de Pesquisa com Paginação

// Nível: Difícil
// Tema: Arrays + filter + paginação manual + DOM
// Problema:
// Tenha uma lista grande de itens (200+). O usuário digita um termo para filtrar a lista. O resultado deve ser mostrado com paginação (10 por página).
// Dica: Calcule início e fim usando (paginaAtual - 1) * itensPorPagina.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// ✅ 20 Situações-Problema para Praticar JavaScript (Contexto de Front-End)

// 1. Sistema de Favoritos de Produtos
// Crie um programa que permita ao usuário adicionar produtos a uma lista de favoritos. Sempre que o usuário adicionar um produto, armazene-o em um array e pergunte se deseja favoritar outro até que responda “não”. Ao final, exiba todos os produtos favoritos.

// 2. Menu de Navegação Dinâmico
// Peça ao usuário o nome de seções de um site e crie um menu automaticamente com base nessas entradas. Continue perguntando até que o usuário digite “fim”. Gere o HTML final do menu como string.

// 3. Controle de Temas de Interface
// Simule um sistema de temas onde o usuário escolhe entre “light”, “dark” ou “auto”. Salve a escolha em um objeto de configurações e exiba como o sistema reagiria mudando as cores da interface.

// 4. Cadastro de Usuários com Validação
// Peça nome, email e senha e valide o email com regex e a senha com mínimo de caracteres. Armazene todos os dados em um objeto. Continue cadastrando até que o usuário deseje parar.

// 5. Dashboard de Acessos
// Pergunte ao usuário quantos acessos o site teve em cada dia da semana e armazene os valores em um array. Calcule o total, média e o dia com maior acesso.

// 6. Gerenciador de Cards de Projetos
// Solicite ao usuário nomes de projetos e gere objetos para cada card contendo título, descrição e status. Exiba todos os cards como JSON ao final.

// 7. Simulador de Carrinho de Compras
// Permita adicionar produtos com nome e preço. Ao final, mostre o total, os itens e aplique um cupom de desconto caso o usuário informe um código válido.

// 8. Filtragem de Usuários Online
// Peça uma lista de usuários com nome e status (“online” ou “offline”). Filtre automaticamente e exiba somente os usuários online.

// 9. Sistema de Notificações
// Crie notificações com título, mensagem e tempo para desaparecer. Armazene-as em um array e remova as que já atingiram o tempo limite.

// 10. Controle de Versionamento
// Receba números de versões (ex: “1.0.1”, “2.3.4”) e ordene-as corretamente seguindo regras semânticas (MAJOR, MINOR, PATCH).

// 11. Animação Programada
// Peça ao usuário uma quantidade de “frames” e um texto para animar. Simule uma animação imprimindo um frame do texto a cada iteração com setTimeout (simulado no console).

// 12. Conversor de Datas para Diferentes Regiões
// O usuário informa uma data e um país. Exiba a data formatada no padrão local usando Intl.

// 13. Sistema de Login Simples
// Receba nome e senha. Compare com um objeto que contém vários usuários registrados e retorne se o login é válido.

// 14. Tratamento de Dados de API Fake
// Simule a chamada de uma API com fetch e retorne um array de objetos. Filtre, mapeie e reduza os dados de acordo com instruções do usuário.

// 15. Montagem Automática de Formulários
// O usuário informa os tipos de campos que quer no formulário (texto, email, número). Gere uma estrutura HTML final contendo os inputs.

// 16. Biblioteca de Componentes
// Crie uma classe “Componente” que recebe id, tipo e estilo. O usuário deve criar componentes e listá-los no final.

// 17. Sistema de Comentários
// O usuário envia comentários. Armazene cada um com data/hora atual. Permita listar, excluir por índice e limpar todos.

// 18. Ordenador de Tarefas por Prioridade
// Receba tarefas com título e prioridade (1 a 5). Ordene da maior prioridade para a menor e mostre o resultado.

// 19. Monitor de Performance
// O usuário informa tempos de carregamento de várias páginas. Calcule o tempo médio e identifique a página mais lenta.

// 20. Gerador Automático de Rotas
// Peça ao usuário nomes de páginas de um site e gere automaticamente um objeto representando rotas (ex: “/contato”, “/produtos”, “/blog”).

// Se quiser, posso também gerar a versão em HTML + JS, ou um PDF, ou transformar isso em uma lista interativa ou em Nível fácil, médio e difícil.