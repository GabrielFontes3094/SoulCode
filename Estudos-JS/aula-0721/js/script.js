import { melhoresFilmes } from "./filmes.js";
function preencherLista(){
        const lista = document.querySelector("#lista-filmes");
        lista.innerHTML = " ";
        melhoresFilmes.forEach(filme =>{
            lista.innerHTML += `<li> ${filme.titulo}</li>`;
        })
        
    }

    preencherLista(melhoresFilmes);