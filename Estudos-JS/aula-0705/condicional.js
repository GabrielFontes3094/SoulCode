const altura = 1.5;

if(altura >= 1.6)
    console.log("Entrou no brinquedo");
else
    console.log("Não entrou no brinquedo");

let niveling = 3;
if(niveling == 1)
    console.log("Iniciante");
else if(niveling == 2)
    console.log("Intermediario");
else if(niveling == 3)
    console.log("Avançado");
else if(niveling == 4)
    console.log("Fluente");
else
    console.log("Indefinido");

let nota1 =7;
let nota2 = 10;
let result = (nota1 + nota2) / 2;

if(result == 6){
    console.log("Sua nota é: " + result);
    console.log("Está na média!");
}
else if(result >= 7 && result <= 10){
    console.log("Sua nota é: " + result);
    console.log("Está acima da média");
}
else if(result <= 5 && result >= 0){
    console.log("Sua nota é: " + result);
    console.log("Estude mais!");
}
else
    console.log("Digite notas entre 0 e 10.");

// Escopo -> Bloco de Código

let conseguiuFazerCompra; // flag
let saldo = 250;

if(saldo > 200) { 
    console.log("Fez a compra do tenis");
    conseguiuFazerCompra = true; 
}
else {
    console.log("Sem grana suficiente");
    conseguiuFazerCompra = false;
}

if(conseguiuFazerCompra) {
    console.log("Conseguiu fazer a compra!");
}

let num1 = 150, num2 = 120, num3 = 300;
if(num1 == num2 || num2 == num3 || num1 == num3) {
    console.log("Os numeros não podem ser iguais.");
}
else if(num1 > num2 && num1 > num3) {
    if(num2 > num3) {
        console.log(num1 + " > " + num2 + " > " + num3); // num1 > num2 > num3
    }
    else {
        console.log(num1 + " > " + num3 + " > " + num2); // num1 > num3 > num2
    }
}
else if(num2 > num1 && num2 > num3) {
    if(num1 > num3) {
        console.log(num2 + " > " + num1 + " > " + num3); // num2 > num1 > num3
    }
    else {
        console.log(num2 + " > " + num3 + " > " + num1); // num2 > num3 > mum1
    }
}
else {
    if(num1 > num2) {
        console.log(num3 + " > " + num1 + " > " + num2); // num3 > num1 > mum2
    }
    else {
        console.log(num3 + " > " + num2 + " > " + num1); // num3 > num2 > mum1
    }
}