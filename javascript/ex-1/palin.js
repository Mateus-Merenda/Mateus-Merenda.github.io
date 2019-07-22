function palin(){
	var palavra = prompt("Digite uma palavra: ");
	palavra = palavra.toUpperCase();
	var arvalap = palavra.split('').reverse().join('');

	palavra == arvalap ? alert("Palíndromo.") : alert("Não é palíndromo.");
}
