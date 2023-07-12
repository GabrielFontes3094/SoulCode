function somar(n1, n2){
    console.log("n1 = " + n1);
    console.log("n2 = " + n2);
    let soma = n1 + n2;
    return soma;
}

let result = soma(4, 6);
console.log(result);
console.log(result);

function calc(n1, n2, op = "+") {
    switch(op) {
        case "+":
            return n1 + n2;
        case "-":
            return n1 - n2;
        case "*":
            return n1 * n2;
        case "/":
            return n1 / n2;
    }
    return NaN;
}

console.log(calc(80, 6)); // 86
console.log(calc(56, -12, "-")); // 65
console.log(calc(-56, 0, "*")); // 0
console.log(calc(18, 2, "somar")); // NaN

// Entrada
// Processamento
// Saída


function desenhaTriangulo(altura) {
    for(let i = 1; i <= altura; i++) {
        let linha = "";
        for(let j = 0; j < (altura-i); j++) {
            linha += " ";
        }
        for(let j = 0; j < i; j++) {
            linha += "* ";
        }
        console.log(linha);
    }
}

desenhaTriangulo(10);
desenhaTriangulo(25);
