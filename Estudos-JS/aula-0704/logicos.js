console.log(true);
console.log(false);

console.log(true && true);
console.log(false && false);
console.log(true && false && true && true);

console.log(true || false);
console.log(true || true);
console.log(true || true || false || true);

console.log(!true);
console.log(!false);

console.log(!true || false);
console.log(!true || false && true);
console.log(true || false && true || true);
console.log(true || (false && true) || true);

let idade = 23;
let calculo = (idade >= 18) && (idade <= 65);
console.log(calculo);

let msg;
let nota1 = 9;
let nota2 = 7;
let condicao =(( nota1 + nota2) / 2) >= 7;
msg = condicao ? "Aprovado" : "Reprovado";
console.log(msg);



