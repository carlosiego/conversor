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
  if (selectdois_txt == 'Quilometro' & selecttres_txt == 'Metro'){
    $('#segundacaixa').attr('value', `${pcaixa*1000}`)
  }else if(selectdois_txt == 'Quilometro' & selecttres_txt == 'Centímetro'){
    $('#segundacaixa').attr('value', `${pcaixa*100000}`)
  }else if(selectdois_txt == 'Quilometro' & selecttres_txt == 'Milímetro'){
    $('#segundacaixa').attr('value', `${pcaixa*1e+6}`)
  }else if(selectdois_txt == 'Quilometro' & selecttres_txt == 'Micrômeto'){
    $('#segundacaixa').attr('value', `${pcaixa*1e+9}`)
  }else if(selectdois_txt == 'Quilometro' & selecttres_txt == 'Nanômetro'){
    $('#segundacaixa').attr('value', `${pcaixa*1e+12}`)
  }else if(selectdois_txt == 'Quilometro' & selecttres_txt == 'Milha'){
    $('#segundacaixa').attr('value', `${pcaixa / 1.609}`)
  }else if(selectdois_txt == 'Quilometro' & selecttres_txt == 'Jarda'){
    $('#segundacaixa').attr('value', `${pcaixa * 1094}`)
  }else if(selectdois_txt == 'Quilometro' & selecttres_txt == 'Pé'){
    $('#segundacaixa').attr('value', `${pcaixa * 3281}`)
  }else if(selectdois_txt == 'Quilometro' & selecttres_txt == 'Polegada'){
    $('#segundacaixa').attr('value', `${pcaixa * 39370}`)
  }else if(selectdois_txt == 'Quilometro' & selecttres_txt == 'Milha náutica'){
    $('#segundacaixa').attr('value', `${pcaixa / 1.852}`)
  }
}



  