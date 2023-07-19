let quadrado = document.querySelector("#quadrado");

quadrado.onclick = () => {
    quadrado.style.backgroundColor = "#003049";
    quadrado.style.transform = "translateY(200px)"
}

quadrado.ondblclick = () => {
    quadrado.style.backgroundColor = "#d63acb";
    quadrado.style.transform = "translateY(0px)"
}

quadrado.addEventListener("mouseout", () => {
    quadrado.style.backgroundColor = "#f07167";
});

console.log({quadrado});