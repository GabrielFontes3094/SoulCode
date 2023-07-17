function elementos(vetor){
    let soma = 0;
    for(i = 0; i < vetor.length; i++){
        soma += vetor[i];
    }
    return soma;
}
const vetor = [1, 2, 3, 4, 5];
const resutado = elementos(vetor);
console.log(resutado);

// exercicio 2
function palavras(vetor){
    return vetor.join('');
}
const texto = ['Olá ', 'mundo', '! ', 'Estou ', 'aqui '];
const resultado = palavras(texto);
console.log(resultado);

// exercicio3
function MaiorVetor(vetor) {
    let maior = vetor[0];
    for (let i = 1; i < vetor.length; i++) {
        if (vetor[i] > maior) {
        maior = vetor[i];
        }
    }
    console.log("O maior valor é:", maior);
}
const numeros = [4, 7, 4, 5, 2];
MaiorVetor(numeros);

// exercicio4
function Media(vetor) {
    let soma = 0;
    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i];
    }
    const media = soma / vetor.length;
    console.log("A média dos elementos é:", media);
}
const numeros1 = [3, 10, 6, 9, 2];
Media(numeros1);

// exercicio 5
function elevarAoQuadrado(vetor) {
    const resultado = vetor.map(numero => numero ** 2);
    console.log("O array com os números elevados ao quadrado é:", resultado);
}
const numeros2 =  [1, 2, 3, 4, 5];
elevarAoQuadrado(numeros2);

// exercicio 6
function filtro(palavras1) {
    const resultado = palavras1.filter(palavras1 => palavras1.charAt(0) === 'A');
    console.log("O array contendo letras 'A' é:", resultado);
}
const palavras1 = ['Abacaxi', 'TV', 'Cubo', 'Abobora'];
filtro(palavras1);

// exercicio 6
function Mult3(numeros) {
    numeros.forEach(numero => {
        const resultado = numero * 3;
        console.log(resultado);
    });
}
const numeros4 = [1, 2, 3, 4, 5];
Mult3(numeros4);

// exercicio 5
function verificarPresencaDoNumero(array, numero) {
    return array.includes(numero);
}
const numeros5 = [4, 0, 11, 10, 7];
const estaPresente = verificarPresencaDoNumero(numeros5, 10);
console.log(estaPresente);
