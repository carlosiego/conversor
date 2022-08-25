function escolhap(){
  var select = document.getElementById('selectp')
  var valor = select.options[select.selectedIndex].value
  var selectdois = document.getElementById('select2')
  selectdois.innerHTML = ''
  var selecttres = document.getElementById('select3')
  selecttres.innerHTML = ''
  
  // Listas  
  var lista_compr = ['Quilometro', 'Metro', 'Centímetro', 'Milímetro', 'Micrômeto', 'Nanômetro', 'Milha', 'Jarda', 'Pé', 'Polegada', 'Milha náutica']

  var lista_freq = ['Hertz', 'Quilo-hertz', 'Mega-hertz', 'Gigahertz']

  var lista_ener = ['Joule', 'Quilojoule', 'Gram calorie', 'Quilocaloria', 'Watt-hora', 'Quilowatt-hora', 'Elétron-volt', 'BTU', 'therm (US)', 'Pé-libra força']

  if(valor == 'compr'){
    var lis = lista_compr
  }else if (valor == 'freq'){
    var lis = lista_freq
  }else if (valor == 'ener'){
    var lis = lista_ener
  }
  for(let pos in lis){
    var option = document.createElement('option')
    option.innerText = `${lis[pos]}`
    option.value = `${lis[pos]}`
    selectdois.appendChild(option)
  }
  for(let pos in lis){
    var option = document.createElement('option')
    option.innerText = `${lis[pos]}`
    option.value = `${lis[pos]}`
    selecttres.appendChild(option)
  } 
}


function entrada_caixa1(){
  
  var selectdois = document.getElementById('select2')
  var selectdois_txt = selectdois.options[selectdois.selectedIndex].text

  var selecttres = document.getElementById('select3')
  var selecttres_txt = selecttres.options[selecttres.selectedIndex].text

  var pcaixa = document.getElementById('primeiracaixa').value
  var scaixa = document.getElementById('segundacaixa').value

  // Conversão: Quilometro para ...
  var dic_quilo = {
    'Metro': pcaixa*1000,
    'Centímetro': pcaixa*100000,
    'Milímetro': pcaixa*1e+6,
    'Micrômeto': pcaixa*1e+9,
    'Nanômetro': pcaixa*1e+12,
    'Milha': pcaixa / 1.609,
    'Jarda': pcaixa * 1094,
    'Pé': pcaixa * 3281, 
    'Polegada': pcaixa * 39370,
    'Milha náutica': pcaixa / 1.852
  }

  var dic_metro = {
    'Quilometro': pcaixa / 1000,
    'Centímetro': pcaixa * 100,
    'Milímetro': pcaixa * 1000,
    'Micrômeto': pcaixa * 1e+6,
    'Nanômetro': pcaixa * 1e+9,
    'Milha': pcaixa / 1609,
    'Jarda': pcaixa * 1.094,
    'Pé': pcaixa * 3.281, 
    'Polegada': pcaixa * 39.37,
    'Milha náutica': pcaixa / 1852
  }

    if(selectdois_txt == 'Quilometro'){
      var dic_afazer = dic_quilo
    }else if (selectdois_txt == 'Metro'){
      var dic_afazer = dic_metro
    }
    for(var pos in dic_afazer){
      if(pos == selecttres_txt){
        $('#segundacaixa').attr('value', `${dic_afazer[pos]}`)
      }
    }
  
}



  