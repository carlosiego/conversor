function converteComprimento(n){
  
    let selectdois = document.getElementById('selectChild1')
    let selectdois_txt = selectdois.options[selectdois.selectedIndex].text
    let selecttres = document.getElementById('selectChild2')
    let selecttres_txt = selecttres.options[selecttres.selectedIndex].text
  
    let pcaixa = document.getElementById('firstInput')
    let scaixa = document.getElementById('secondInput')
  
    let caixa_entrada_valor = pcaixa.value
    let caixa_saida = scaixa
    
    let selectp = selectdois_txt
    let selects = selecttres_txt
  
    if(n === 2){
      caixa_entrada_valor = scaixa.value
      caixa_saida = pcaixa
    
      selectp = selecttres_txt
      selects = selectdois_txt
    }
  
    // Objetos de calculos de conversão de Comprimento
  
    const dic_quilo = {
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
  
    const dic_metro = {
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
  
    const dic_cent = {
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
  
    const dic_mili = {
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
  
    const dic_micro = {
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
    
    const dic_nano = {
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
  
    const dic_milha = {
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
  
    const dic_jarda = {
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
  
    const dic_pe = {
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
  
    const dic_poleg = {
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
  
    const dic_milhaN = {
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
    const dic_med_gerais = {'Quilometro': dic_quilo, 'Metro': dic_metro, 'Centímetro': dic_cent, 'Milímetro': dic_mili, 'Micrômeto': dic_micro, 'Nanômetro': dic_nano, 'Milha': dic_milha, 'Jarda': dic_jarda, 'Pé': dic_pe, 'Polegada': dic_poleg, 'Milha náutica': dic_milhaN}
  
    var dic_afazer = {}
    
    if(selectdois_txt == selecttres_txt){
      caixa_saida.value = caixa_entrada_valor
    }
  
    for(let element in dic_med_gerais){
      if(selectp == element){
        dic_afazer = dic_med_gerais[element]
      }
    }
  
    for(let medida in dic_afazer){
      if(medida == selects){
        caixa_saida.value = dic_afazer[medida]
      }
    }
  }