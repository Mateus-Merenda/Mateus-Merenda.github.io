function emayl(){
	var mail = new String(prompt('Insira um e-mail: '));
	
	var validacao_arroba = mail.split('@');

	var validacao_ponto = validacao_arroba[1].split('.');

	if(validacao_arroba.length != 2 || validacao_arroba[0].length < 1 || validacao_ponto.length != 2 || validacao_ponto[0].length < 2){
		alert("E-mail não validado.");
	}else{
		alert("E-mail validado com sucesso.");
	}
}