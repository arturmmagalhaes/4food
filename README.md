# 4food

<p align="justify">Projeto de Front-end para a Labenu de um app de delivery baseado no iFood.

- # Link
http://4food.arturmagalhaes.surge.sh

- # Telas
![](/src/assets/screenshot/screenshot.png)
                                                     
- # Tecnologias
  O projeto foi desenvolvido com ReactJS.
  - # Dependências
    - React Router DOM
    - Axios
    - Styled-components
    - Material-ui

- # Estrutura do projeto
  <p align="justify">O projeto foi construido para mobile (Iphone X) e dividido nos componentes Cart, EditAddress, EditProfile, FeedPage, Footer, Header, Hooks, Landing, Login, OrderPopUp, Profile, RegisterAddress, Restaurant, SearchPage e SignUp. 
  <p align="justify">Os componentes Footer, Header, Hooks, OrderPopUp são globais e pode ser utilizado por todas as páginas do sistema.
  <p align="justify">No componente Landing abre uma página inicial.
  <p align="justify">Em EditAddress, RegisterAddress, EditProfile e SignUp o sistema faz uma requisição à api para alterar ou adicionar informações a aplicação.
  <p align="justify">Para seguir no app é necessário obter um token que é gerado pelo login.
  <p align="justify">A busca na api pelos restaurantes é feito no componente Restaurant, SearchPage e é mostrado em FeedPage.
  <p align="justify">A adição de produtos no carrinho é feito por LocalStorage e ao confirmar a compra, o componente CArt faz uma requisição a api.
  <p align="justify"É possível acessar o perfil(Profile) pelo footer.
  
- # Como rodar o projeto
```bash
  $ git clone https://github.com/arturmmagalhaes/4food.git
  $ cd 4food
  $ npm install
  $ npm run start
 ```
- # Como deployar o projeto
```bash
  $ npm run build
  $ surge ./build [url-desejada]
```

<h4 align="center">Feito por: Artur Marques Magalhães, Diogo Gaspar, Luiz Mitsuru Dai, Ronaldo Jonson e Thiago Stephen.
