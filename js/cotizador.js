const price = {
	'pase_dia': 30,
	'pase_completo': 50,
	'pase_dosdias': 45
}
//input
let paseDia = document.getElementById('pase_dia');
let paseCompleto = document.getElementById('pase_completo');
let paseDosDias = document.getElementById('pase_dosdias');
//button
let total = document.getElementById('suma-total');
let resumen = document.getElementById('lista-productos');
let button = document.getElementById('calcular');
button.addEventListener("click", calculation);

function calculation (){
    let priceOne = parseInt(paseDia.value) * price.pase_dia ;
    let priceTwo = parseInt(paseDosDias.value) * price.pase_dosdias ;
    let priceFull = parseInt(paseCompleto.value) * price.pase_completo ;
    let priceTotal = priceOne + priceTwo + priceFull;
    console.log(priceTotal)

    if(priceTotal > 0){
		let table = '<table width="100%">';
		if(priceOne > 0){
            table += '<tr><td>Pase por un dí­a</td><td>' + paseDia.value + '</td><td>$' + price.pase_dia + '</td></tr>';
        }
        if(priceTwo > 0){
            table += '<tr><td>Pase Viernes y Sábado</td><td>' + paseDosDias.value + '</td><td>$' + price.pase_dosdias + '</td></tr>';
        }
		if(priceFull > 0){
			table += '<tr><td>Pase completo</td><td>' + paseCompleto.value + '</td><td>$' + price.pase_completo + '</td></tr>';
        }
		table += '</table>';
		resumen.innerHTML = table;
		total.innerHTML = priceTotal;
	}
}


