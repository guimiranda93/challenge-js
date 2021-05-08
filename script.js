const meuArray = [];
let contador = 0;
let n = 0;

while (contador <= 100) {
    if (contador % 2 !== 0) { //verifica se o numero é primo
        n = n + contador; //se for primo vai somar
    }
    contador++;
}
meuArray.push(n);
alert(meuArray)

// Fazer uma função que soma todos os valores ímpares do array e retorna em um popup (alert)