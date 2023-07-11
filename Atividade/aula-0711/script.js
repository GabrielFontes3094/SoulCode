let texto="Ola Abobora cor de rosa.";
let numerodeA = 0;
for(let i = 0; i < texto.length;i++){
    if(texto.charAt(i) == "A" || texto.charAt(i) == "a"){
        numerodeA++;
    }
}
console.log(texto + " tem " + numerodeA + " 'A's");

let raiz = 81;
console.log("A raiz quadrada de " + raiz + " é " + Math.sqrt(raiz));

let quebrado = 9.23801;
console.log("O numero mais proximo de " + quebrado + " é " + Math.round(quebrado));

let modulo =-8;
console.log(Math.abs(modulo));

let aleatorio = (Math.floor(Math.random() * (20 - 10 + 1) + 10));
console.log("o numero aleatorio é: " + aleatorio);

num = 5.132920;
console.log(num + " arredondando para duas casas decimal é: " + num.toFixed(2));

num = "45.32512";
let numArrend = Math.floor(Number.parseFloat(num));
console.log(num + " arrendondadndo para o anterior é " + numArrend);

num = Infinity;
if (isNaN(numeroTeste)) {
    console.log(numeroTeste + " Não é um número!");
} else {    
    if (isFinite(numeroTeste)) {
        console.log(numeroTeste + " é finito!");
    } else {
        console.log(numeroTeste + " é infinito");
    }
}

// Escreva um programa que verifique se a string "ba" contém em outra string.
texto = "Minha mãe fez doce de jaca mais eu gosto é de doce de leite.";
if(texto.includes("ba")) {
    console.log("Contém 'ba'");
}
else {
    console.log("Não contém 'ba'");
}

// Escreva um programa que converte uma string para letras maiúsculas e para letras minúsculas e mostre na tela.
console.log(texto);
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());

// Extraia uma parte específica de uma string com base em índices.
console.log("De 0 a 18 tem-se '" + texto.substring(0, 18) + "'");

// Substitua todas as ocorrências de uma substring por outra em uma string.
console.log(texto.replaceAll("jaca", "banana"));

// Remova espaços em branco extras no início e no final e no final de uma string.
console.log(texto.trim());

// Inverta uma string. Utilize o laço for.
let textoInvertido = "";
for(let i = texto.length-1; i >= 0; i--) {
    textoInvertido += texto.charAt(i);
}
console.log(textoInvertido);
