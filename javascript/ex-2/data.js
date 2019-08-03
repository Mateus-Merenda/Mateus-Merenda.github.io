function datao(){
	var dataA = prompt("Digite uma data: ");
	console.log(dataA);
	dataA = new Date(dataA);
	// console.log(dataA);
	
	var dataB = new Date();
	// console.log(dataB);

	var dataC = dataB.getTime() - dataA.getTime();
	dataC = (dataC / 1000) * 3600 * 24;
	console.log(dataC);
	dataC = new Date();
	console.log(dataC);
}


// function palin(){
// 	var palavra = prompt("Digite uma palavra: ");
// 	palavra = palavra.toUpperCase();
// 	var arvalap = palavra.split('').reverse().join('');

// 	palavra == arvalap ? alert("Palíndromo.") : alert("Não é palíndromo.");
// }