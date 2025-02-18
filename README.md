# Challenge-amigo-secreto
Este projeto consiste em uma aplicação simples para adicionar amigos a uma lista e realizar um sorteio aleatório de um desses amigos. A aplicação é feita com HTML, CSS e JavaScript, permitindo aos usuários adicionar amigos e sortear um deles de forma interativa.

FUNCIONALIDADES:
1. Adicionar amigos
   Adicionar o nome de amigos a uma lista utilizando um botaõ.
   Se o campo estiver vazio, será exibido um alerta pedindo para inserir um nome.
2. Exibir lista de amigos
   A lista de amigos adicionados será exibida na tela em tempo real.
3. Sorteio dos nomes
   Ao clicar no botão de sorteio, o sistema seleciona um amigo aleatoriamente da lista e exibe o nome sorteado em um campo de resultado.
   Se não houver amigos na lista, o usuário verá uma mensagem informando que não há amigos para sortear.

ESTRUTURA DE ARQUIVOS
index.html: O arquivo HTML que contém a estrutura básica da página.
style.css: Arquivo CSS opcional para a estilização da página.
script.js: O arquivo JavaScript que contém a lógica do código para adicionar amigos, exibir a lista e sortear um amigo.

COMO FUNCIONA
O array amigos armazena os nomes dos amigos.
O adicionarAmigo() adiciona o nome do amigo ao array e atualiza a lista de amigos na tela.
O atualizarListaAmigos() atualiza a visualização da lista de amigos.
O sortearAmigo() sorteia um amigo aleatoriamente e exibe o nome sorteado.
