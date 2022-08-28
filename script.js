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


function entrada_caixa(n=0){
  
  var selectdois = document.getElementById('select2')
  var selectdois_txt = selectdois.options[selectdois.selectedIndex].text

  var selecttres = document.getElementById('select3')
  var selecttres_txt = selecttres.options[selecttres.selectedIndex].text

  var pcaixa = document.getElementById('primeiracaixa').value
  var scaixa = document.getElementById('segundacaixa').value


  var caixa_entrada_valor = pcaixa
  var caixa_saida = '#segundacaixa'

  var selectp = selectdois_txt
  var selects = selecttres_txt

  if(n == 2){
  caixa_entrada_valor = scaixa
  caixa_saida = '#primeiracaixa'
    
  selectp = selecttres_txt
  selects = selectdois_txt

  }
  // Objetos de calculos de conversão de Comprimento

  var dic_quilo = {
    'Metro': caixa_entrada_valor*1000,
    'Centímetro': caixa_entrada_valor*100000,
    'Milímetro': caixa_entrada_valor*1e+6,
    'Micrômeto': caixa_entrada_valor*1e+9,
    'Nanômetro': caixa_entrada_valor*1e+12,
    'Milha': caixa_entrada_valor / 1.609,
    'Jarda': caixa_entrada_valor * 1094,
    'Pé': caixa_entrada_valor * 3281, 
    'Polegada': caixa_entrada_valor * 39370,
    'Milha náutica': caixa_entrada_valor / 1.852
  }

  var dic_metro = {
    'Quilometro': caixa_entrada_valor / 1000,
    'Centímetro': caixa_entrada_valor * 100,
    'Milímetro': caixa_entrada_valor * 1000,
    'Micrômeto': caixa_entrada_valor * 1e+6,
    'Nanômetro': caixa_entrada_valor * 1e+9,
    'Milha': caixa_entrada_valor / 1609,
    'Jarda': caixa_entrada_valor * 1.094,
    'Pé': caixa_entrada_valor * 3.281, 
    'Polegada': caixa_entrada_valor * 39.37,
    'Milha náutica': caixa_entrada_valor / 1852
  }

  var dic_cent = {
    'Quilometro': caixa_entrada_valor / 100000,
    'Metro': caixa_entrada_valor / 100,
    'Milímetro': caixa_entrada_valor * 10,
    'Micrômeto': caixa_entrada_valor * 10000,
    'Nanômetro': caixa_entrada_valor * 1e+7,
    'Milha': caixa_entrada_valor / 160900,
    'Jarda': caixa_entrada_valor / 91.44,
    'Pé': caixa_entrada_valor / 30.48, 
    'Polegada': caixa_entrada_valor / 2.54,
    'Milha náutica': caixa_entrada_valor / 185200

  }

  var dic_mili = {
    'Quilometro': caixa_entrada_valor / 1e+6,
    'Metro': caixa_entrada_valor / 1000,
    'Centímetro': caixa_entrada_valor / 10,
    'Micrômeto': caixa_entrada_valor * 1000,
    'Nanômetro': caixa_entrada_valor * 1e+6,
    'Milha': caixa_entrada_valor / 1.609e+6,
    'Jarda': caixa_entrada_valor / 914.4,
    'Pé': caixa_entrada_valor / 304.8, 
    'Polegada': caixa_entrada_valor / 25.4,
    'Milha náutica': caixa_entrada_valor / 1.852e+6
  }

  var dic_micro = {
    'Quilometro': caixa_entrada_valor / 1e+9,
    'Metro': caixa_entrada_valor / 1e+6,
    'Centímetro': caixa_entrada_valor / 10000,
    'Milímetro': caixa_entrada_valor / 1000,
    'Nanômetro': caixa_entrada_valor * 1000,
    'Milha': caixa_entrada_valor / 1.609e+9,
    'Jarda': caixa_entrada_valor / 914400,
    'Pé': caixa_entrada_valor / 304800, 
    'Polegada': caixa_entrada_valor / 25400,
    'Milha náutica': caixa_entrada_valor / 1.852e+9
  }
  
  var dic_nano = {
    'Quilometro': caixa_entrada_valor / 1e+12,
    'Metro': caixa_entrada_valor / 1e+9,
    'Centímetro': caixa_entrada_valor / 1e+7,
    'Milímetro': caixa_entrada_valor / 1e+6,
    'Micrômeto': caixa_entrada_valor / 1000,
    'Milha': caixa_entrada_valor / 1.609e+12,
    'Jarda': caixa_entrada_valor /  9.144e+8,
    'Pé': caixa_entrada_valor / 3.048e+8, 
    'Polegada': caixa_entrada_valor / 2.54e+7,
    'Milha náutica': caixa_entrada_valor / 1.852e+12
  }

  var dic_milha = {
    'Quilometro': caixa_entrada_valor * 1.609,
    'Metro': caixa_entrada_valor * 1609,
    'Centímetro': caixa_entrada_valor * 160900,
    'Milímetro': caixa_entrada_valor * 1.609e+6,
    'Micrômeto': caixa_entrada_valor * 1.609e+9,
    'Nanômetro': caixa_entrada_valor / 1.609e+12,
    'Jarda': caixa_entrada_valor * 1760,
    'Pé': caixa_entrada_valor * 5280, 
    'Polegada': caixa_entrada_valor * 63360,
    'Milha náutica': caixa_entrada_valor / 1.151
  }

  var dic_jarda = {
    'Quilometro': caixa_entrada_valor / 1094,
    'Metro': caixa_entrada_valor / 1.094,
    'Centímetro': caixa_entrada_valor * 160900,
    'Milímetro': caixa_entrada_valor * 1.609e+6,
    'Micrômeto': caixa_entrada_valor * 1.609e+9,
    'Nanômetro': caixa_entrada_valor / 1.609e+12,
    'Jarda': caixa_entrada_valor * 1760,
    'Pé': caixa_entrada_valor * 5280, 
    'Polegada': caixa_entrada_valor * 63360,
    'Milha náutica': caixa_entrada_valor / 1.151
  }

  var dic_pe = {
    'Quilometro': caixa_entrada_valor / 3281,
    'Metro': caixa_entrada_valor / 3.281,
    'Centímetro': caixa_entrada_valor * 30.48,
    'Milímetro': caixa_entrada_valor * 304.8,
    'Micrômeto': caixa_entrada_valor * 304800,
    'Nanômetro': caixa_entrada_valor / 3.048e+8,
    'Jarda': caixa_entrada_valor / 3,
    'Milha': caixa_entrada_valor / 5280, 
    'Polegada': caixa_entrada_valor * 12,
    'Milha náutica': caixa_entrada_valor / 6076
  }

  var dic_poleg = {
    'Quilometro': caixa_entrada_valor / 39370,
    'Metro': caixa_entrada_valor / 39.37,
    'Centímetro': caixa_entrada_valor * 2.54,
    'Milímetro': caixa_entrada_valor * 25.4,
    'Micrômeto': caixa_entrada_valor * 25400,
    'Nanômetro': caixa_entrada_valor / 2.54e+7,
    'Jarda': caixa_entrada_valor / 36,
    'Milha': caixa_entrada_valor / 63360, 
    'Pé': caixa_entrada_valor / 12,
    'Milha náutica': caixa_entrada_valor / 72910
  }

  var dic_milhaN = {
    'Quilometro': caixa_entrada_valor / 1.852,
    'Metro': caixa_entrada_valor / 1852,
    'Centímetro': caixa_entrada_valor * 185200,
    'Milímetro': caixa_entrada_valor * 1.852e+6,
    'Micrômeto': caixa_entrada_valor * 1.852e+9,
    'Nanômetro': caixa_entrada_valor / 1.852e+12,
    'Jarda': caixa_entrada_valor * 2025,
    'Milha': caixa_entrada_valor * 1.151, 
    'Pé': caixa_entrada_valor * 6076,
    'Polegada': caixa_entrada_valor * 72910
  }


  // Objeto que contém todos os objetos de conversões em seus valores
  var dic_med_gerais = {'Quilometro': dic_quilo, 'Metro': dic_metro, 'Centímetro': dic_cent, 'Milímetro': dic_mili, 'Micrômeto': dic_micro, 'Nanômetro': dic_nano, 'Milha': dic_milha, 'Jarda': dic_jarda, 'Pé': dic_pe, 'Polegada': dic_poleg, 'Milha náutica': dic_milhaN}

  var dic_afazer = {}


 
  if(caixa_entrada_valor.length == 0){
    $(`${caixa_saida}`).attr('value', '') // Sem valor na caixa de entrada, sem valor na de saida também.
  }
  
  else if(selectdois_txt == selecttres_txt){
    $(`${caixa_saida}`).attr('value', `${caixa_entrada_valor}`) // Se as opções de 
  }else {
    for(var element in dic_med_gerais){
      if(selectp == element){
        dic_afazer = dic_med_gerais[element]
      }
    }
    
      // Verifica option segundario selecionado
      for(var medida in dic_afazer){
        if(medida == selects){
          $(`${caixa_saida}`).attr('value', `${dic_afazer[medida]}`)
        }
      }
    }



}
 