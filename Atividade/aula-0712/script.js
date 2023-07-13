function media(n1, n2, n3){
    return((n1*2 + n2*3 + n3*4) / 9);
}
console.log("media ponderada entre 6, 7, 8 é " + media(6, 7, 8));

// exercicio 2
function divisor(num){
    let qnt = 0;
    for(let i = 2; i <= num; i++){
        if(num % i == 0){
            qnt++;
        }
    }
    return qnt;
}
console.log("Quantidade de divisores de 88 é " + divisor(88));

// exercicio 3
function numDigitos(num){
    let texto = num.toString();
    let acumulador = 0;
    for(let i = 0; i < texto.length; i++){
        acumulador += parseInt(texto.charAt(i));
    }
    return acumulador;
}
console.log("a soma dos digitos 3142 é " + numDigitos(3141));

// exercicio 4
function revertexto(texto){
    let textorevertido = "";
    for(let i = texto.length - 1; i >= 0; i--){
        textorevertido += texto.charAt(i);
    }
    return textorevertido;
}
console.log("a frase 'ola mundo!' ao contrario é " + revertexto("ola mundo!"));

// exercicio 5
function velocidade(comprimento, tempo){
    return(comprimento / tempo);
}
console.log("A velocidade de uma bicicleta que andou 40km em 3h é " + velocidade(40, 3) + "km/hora");

// exercicio 6
function isVogal(char) {
    switch(char.toLowerCase()) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            return true;
    }
    return false;
}
function removeVogais(texto) {
    let textoSemVogal = "";
    for(let i = 0; i < texto.length; i++) {
        let char = texto.charAt(i);
        if(!isVogal(char)) {
            textoSemVogal += char;
        }
    }
    return textoSemVogal;
}
console.log("'JavaScript' sem vogal é " + removeVogais("JavaScript"));

// Crie uma função que receba um número no sistema decimal e retorne o mesmo número no sistema binário.
function converterDecimalBinario(num) {
    let numBinario = "";
    let divisao = num;
    for(;;) {
        if(divisao <= 0)
            break;
        let resto = divisao % 2;
        divisao = parseInt(divisao / 2);
        numBinario = resto + numBinario;
    }
    return numBinario;
}
// function converterDecimalBinario(num) {
//     if(num <= 0)
//         return "";
//     let divisao = parseInt(num / 2);
//     let resto = (num % 2).toString();
//     resto = converterDecimalBinario(divisao) + resto;
//     return resto;
// }
console.log("345 na base binária é " + converterDecimalBinario(345));

// let num = 10;
// console.log(num.toString(10));
// console.log(num.toString(2));
// console.log(num.toString(8));
// console.log(num.toString(16));

// Crie uma função que receba um número e uma outra função e execute essa de acordo com número informado.
function repetir(callback, interation) {
    for(let i = 0; i < interation; i++) {
        callback(i);
    }
}
repetir(index => console.log("Repetição #"+(index+1)), 10);