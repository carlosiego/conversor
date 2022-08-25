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

  // Objetos de calculos de conversão
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

  var dic_cent = {
    'Quilometro': pcaixa / 100000,
    'Metro': pcaixa / 100,
    'Milímetro': pcaixa * 10,
    'Micrômeto': pcaixa * 10000,
    'Nanômetro': pcaixa * 1e+7,
    'Milha': pcaixa / 160900,
    'Jarda': pcaixa / 91.44,
    'Pé': pcaixa / 30.48, 
    'Polegada': pcaixa / 2.54,
    'Milha náutica': pcaixa / 185200

  }

  var dic_mili = {
    'Quilometro': pcaixa / 1e+6,
    'Metro': pcaixa / 1000,
    'Centímetro': pcaixa / 10,
    'Micrômeto': pcaixa * 1000,
    'Nanômetro': pcaixa * 1e+6,
    'Milha': pcaixa / 1.609e+6,
    'Jarda': pcaixa / 914.4,
    'Pé': pcaixa / 304.8, 
    'Polegada': pcaixa / 25.4,
    'Milha náutica': pcaixa / 1.852e+6
  }

  var dic_micro = {
    'Quilometro': pcaixa / 1e+9,
    'Metro': pcaixa / 1e+6,
    'Centímetro': pcaixa / 10000,
    'Milímetro': pcaixa / 1000,
    'Nanômetro': pcaixa * 1000,
    'Milha': pcaixa / 1.609e+9,
    'Jarda': pcaixa / 914400,
    'Pé': pcaixa / 304800, 
    'Polegada': pcaixa / 25400,
    'Milha náutica': pcaixa / 1.852e+9
  }
  
  var dic_nano = {
    'Quilometro': pcaixa / 1e+12,
    'Metro': pcaixa / 1e+9,
    'Centímetro': pcaixa / 1e+7,
    'Milímetro': pcaixa / 1e+6,
    'Micrômeto': pcaixa / 1000,
    'Milha': pcaixa / 1.609e+12,
    'Jarda': pcaixa /  9.144e+8,
    'Pé': pcaixa / 3.048e+8, 
    'Polegada': pcaixa / 2.54e+7,
    'Milha náutica': pcaixa / 1.852e+12
  }

  var dic_milha = {
    'Quilometro': pcaixa * 1.609,
    'Metro': pcaixa * 1609,
    'Centímetro': pcaixa * 160900,
    'Milímetro': pcaixa * 1.609e+6,
    'Micrômeto': pcaixa * 1.609e+9,
    'Nanômetro': pcaixa / 1.609e+12,
    'Jarda': pcaixa * 1760,
    'Pé': pcaixa * 5280, 
    'Polegada': pcaixa * 63360,
    'Milha náutica': pcaixa / 1.151
  }

  var dic_jarda = {
    'Quilometro': pcaixa / 1094,
    'Metro': pcaixa / 1.094,
    'Centímetro': pcaixa * 160900,
    'Milímetro': pcaixa * 1.609e+6,
    'Micrômeto': pcaixa * 1.609e+9,
    'Nanômetro': pcaixa / 1.609e+12,
    'Jarda': pcaixa * 1760,
    'Pé': pcaixa * 5280, 
    'Polegada': pcaixa * 63360,
    'Milha náutica': pcaixa / 1.151
  }

  var dic_pe = {
    'Quilometro': pcaixa / 3281,
    'Metro': pcaixa / 3.281,
    'Centímetro': pcaixa * 30.48,
    'Milímetro': pcaixa * 304.8,
    'Micrômeto': pcaixa * 304800,
    'Nanômetro': pcaixa / 3.048e+8,
    'Jarda': pcaixa / 3,
    'Milha': pcaixa / 5280, 
    'Polegada': pcaixa * 12,
    'Milha náutica': pcaixa / 6076
  }

  var dic_poleg = {
    'Quilometro': pcaixa / 39370,
    'Metro': pcaixa / 39.37,
    'Centímetro': pcaixa * 2.54,
    'Milímetro': pcaixa * 25.4,
    'Micrômeto': pcaixa * 25400,
    'Nanômetro': pcaixa / 2.54e+7,
    'Jarda': pcaixa / 36,
    'Milha': pcaixa / 63360, 
    'Pé': pcaixa / 12,
    'Milha náutica': pcaixa / 72910
  }

  var dic_milhaN = {
    'Quilometro': pcaixa / 1.852,
    'Metro': pcaixa / 1852,
    'Centímetro': pcaixa * 185200,
    'Milímetro': pcaixa * 1.852e+6,
    'Micrômeto': pcaixa * 1.852e+9,
    'Nanômetro': pcaixa / 1.852e+12,
    'Jarda': pcaixa * 2025,
    'Milha': pcaixa * 1.151, 
    'Pé': pcaixa * 6076,
    'Polegada': pcaixa * 72910
  }

  var dic_med_gerais = {'Quilometro': dic_quilo, 'Metro': dic_metro, 'Centímetro': dic_cent, 'Milímetro': dic_mili, 'Micrômeto': dic_micro, 'Nanômetro': dic_nano, 'Milha': dic_milha, 'Jarda': dic_jarda, 'Pé': dic_pe, 'Polegada': dic_poleg, 'Milha náutica': dic_milhaN}

  // Verifica option selecionado na segunda caixa
  for(var element in dic_med_gerais){
    if(selectdois_txt == element){
      var dic_afazer = dic_med_gerais[element]
    }
  }

  // Verifica option selecionado na terceira caixa
  for(var medida in dic_afazer){
    if(medida == selecttres_txt){
      $('#segundacaixa').attr('value', `${dic_afazer[medida]}`)
    }
  }
  
}



  