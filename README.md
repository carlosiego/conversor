<h1>📒 Conversor</h1>

<img src="https://user-images.githubusercontent.com/99915608/194779915-023fd681-5e12-49e5-a22d-710e67204b73.png"/>


Este projeto foi criado com o intuito de consolidar meus conhecimentos e mostrar algumas das minhas habilidades.

<h2>Um dos vários problemas que enfrentei durante este projeto:</h2>

- Utilizei o método .map() para percorrer um array e em cima de cada item utilizei o .createElement() para criar os options, depois disso dei um .appendChild() no primeiro select, logo depois dei outro .appendChild() no segundo select, mas aconteceu esse erro ⬇️
<div display=flex>
<img src="https://user-images.githubusercontent.com/99915608/194962226-1356edf1-5892-4c33-92c1-67f42d0784e8.png" width=440px/>
<img src="https://user-images.githubusercontent.com/99915608/194962468-96e73d0f-c22a-4fc1-8514-f62680972ec9.png" width=440px height=275px/>
</div>
- Apenas o último .appendChild() ficava salvo, diante disso foquei em procurar uma solução e encontrei, com o método .cloneNode() clonei todos os options e assim meu problema foi resolvido.
<img src="https://user-images.githubusercontent.com/99915608/194963373-0d38aff5-5697-486d-bcb0-31ae3e81f9d6.png"/>
<h2>Funcionalidades:</h2>
- Converte qualquer tipo de medida de comprimento

<a href="https://carlosiego.github.io/conversor">Acesse</a>
