const meuArray = [];
let contador = 0;
let n = 0;

while (contador <= 100) {
    if (contador % 2 !== 0) {
        n = n + contador;
    }
    contador++;
}

meuArray.push(n);
alert("O resultado é: " + meuArray);


// Fazer uma função que soma todos os valores ímpares do array e retorna em um popup (alert)