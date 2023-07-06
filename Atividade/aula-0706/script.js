let numero = -2;
if(numero > 0){
    console.log("O numero " + numero + " é positivo");
} else if(numero < 0){
    console.log("O numero " + numero + " é negativo.");
} else {
    console.log("O numero " + numero + " é zero.");
}

let idade = 20;
let msg = (idade > 18) ? idade + " anos, você é maior de idade" : idade + " anos, você é menor de idade";
console.log(msg);

let num1 = 4, num2 = 8, num3 = 2;
if(num1 > num2 && num1 > num3){
    if(num2 > num3){
        console.log(num1 + " > " + num2 + " > " + num3);
    } else {
        console.log(num1 = " > " + num3 + " > " + num2);
    }
} else if(num2 > num1 && num2 > num3){
    if(num1 > num3){
        console.log(num2 + " > " + num1 + " > " + num3);
    } else {
        console.log(num2 + " > " + num3 +  " > " + num1);
    }
} else if(num3 > num1 && num3 > num2){
    if(num1 > num2){
        console.log(num3 + " > " + num1 + " > " + num3);
    } else {
        console.log(num3 + " > " + num2 + " > " + num1);
    } 
} else if(num1 == num2 || num2 == num3 || num2 == num3){
    console.log("Numeros iguais não permitidos.");
}

let numero1 = 3, numero2 = 3;
let result = numero1 * numero2;
if((result % 2) == 0){
    console.log(result + ", O produto é par.");
} else {
    console.log(result + ", O produto é impar.");
}

let dia = "terça";
switch(dia){
    case "segunda":
        console.log("segunda é um dia util.");
        break;
    case "terça":
        console.log("terça é um dia util.");
        break;
    case "quarta":
        console.log("quarta é um dia util.");
        break;
    case "quinta":
        console.log("quinta é um dia util."); 
        break; 
        case "sexta":
        console.log("sexta é um dia util.");
        break;
    case "sabado":
        console.log("sabado é um fim de semana.");
        break;
    case "domingo":
        console.log("domingo é um fim de semana.");
        break;
}

let semana = 4;
switch(semana){
    case 1:
        console.log("segunda");
        break;
    case 2:
        console.log("terça");
        break;
    case 3:
        console.log("quarta");
        break;
    case 4:
        console.log("quinta");
        break;
    case 5:
        console.log("sexta");
        break;
    case 6:
        console.log("sabado");
        break;
    case 7:
        console.log("domingo");
        break;
}