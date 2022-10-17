async function converteDinheiro(n){
    var caixa1 = document.querySelector('#firstInput')
    var caixa2 = document.querySelector('#secondInput')

    var selectChild1 = document.querySelector('#selectChild1')
    var selectChild2 = document.querySelector('#selectChild2')

    var caixaEntrada = caixa1.value
    var caixaSaida = caixa2
    if(n == 2){
        caixaEntrada = caixa2.value
        caixaSaida = caixa1
    }

    
    if(selectChild1.value == selectChild2.value){
        caixaSaida.value = caixaEntrada
        return
    }

    listaMoedas = {
    'Real': 'BRL',
    'Dólar': 'USD',
    'Euro': 'EUR',
    'Yuan Chinês': 'CNY',
    }

    var primeiraParteConversao = ''
    var segundaParteConversao = ''

    for(let element in listaMoedas){
        if(selectChild1.value == element){
            primeiraParteConversao = listaMoedas[element]
        }
    }

    for(let element in listaMoedas){
        if(selectChild2.value == element){
            segundaParteConversao = listaMoedas[element]
        }
    }

    var conversao = primeiraParteConversao + "-" + segundaParteConversao
    var conversaoSemHifen = primeiraParteConversao + segundaParteConversao

    try{
        const url = `https://economia.awesomeapi.com.br/json/last/${conversao}`
        const consultaMoeda =  await fetch(url)
        var moedaJson = await consultaMoeda.json()
        var moedaConvertida = await moedaJson[conversaoSemHifen].ask
        
        caixaSaida.value = caixaEntrada * moedaConvertida
    }catch{
        alert('Conversão não encontrada')
    }

}