const listComprimento = ['Quilometro', 'Metro', 'Centímetro', 'Milímetro', 'Micrômeto', 'Nanômetro', 'Milha', 'Jarda', 'Pé', 'Polegada', 'Milha náutica']

const listDinheiro = ['Real', 'Dólar', 'Euro', 'Yuan Chinês']
var lista = []

function mudancaSelectMain(){
  var elementoSelectPrincipal = document.querySelector('#selectMain')
  var tipoConversao = elementoSelectPrincipal.options
  [elementoSelectPrincipal.selectedIndex].value
  var caixa1 = document.querySelector('#firstInput')
  var caixa2 = document.querySelector('#secondInput')
  caixa1.value = ''
  caixa2.value = ''
  if(tipoConversao == 'dinheiro'){
    lista = listDinheiro
  }else{
    lista = listComprimento
  }
  let selectChild1 = document.getElementById('selectChild1')
  selectChild1.innerHTML = ''
  let selectChild2 = document.getElementById('selectChild2')
  selectChild2.innerHTML = ''
  lista.map(item => {
  let option = document.createElement('option')
  option.innerText = item
  option.value = item
  selectChild1.appendChild(option)
  let option_clone = option.cloneNode(true)
  selectChild2.appendChild(option_clone)
})
}

mudancaSelectMain()


function entrada(n){
  var elementoSelectPrincipal = document.querySelector('#selectMain')
  var tipoConversao = elementoSelectPrincipal.options[elementoSelectPrincipal.selectedIndex].value
  if(tipoConversao == 'dinheiro'){
    converteDinheiro(n)
  }else{
    converteComprimento(n)
    lista = listComprimento
  }
}