const btnVermelho = document.querySelector("#vermelho");
const btnAmarelo = document.querySelector("#amarelo");
const btnVerde = document.querySelector("#verde");
const semaforo = document.querySelector("#semaforo");
const btnAuto = document.querySelector("#auto");

const imagem = [
    "img/vermelho.png",
    "img/amarelo.png",
    "img/verde.png",
];

btnVerde.addEventListener("click", () => {
    clearInterval(interval);
    semaforo.src = imagem[2];
});

btnAmarelo.addEventListener("click", () => {
    clearInterval(interval);
    semaforo.src = imagem[1];
});

btnVermelho.addEventListener("click", () => {
    clearInterval(interval);
    semaforo.src = imagem[0];
});

let indice = 1;
let interval;
btnAuto.addEventListener("click", () => {
    interval = setInterval(() => {
        semaforo.src = imagem[indice];
        if(indice == (imagem.length-1)) {
            indice = 0;
        }
        else {
            indice++;
        }
    }, 1000);
});