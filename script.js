const meuArray = [];
let contador = 0;
let num = 0;

while (contador <= 100) {
	if (contador % 2 !== 0 ) {
		num = num + contador;
	}
	contador++;
}
meuArray.push(num);	
alert(meuArray)
// Fazer uma função que soma todos os valores ímpares do array e retorna em um popup (alert)
