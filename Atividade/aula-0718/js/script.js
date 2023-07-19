// Vetor de objetos representando os alunos
const alunos = [
    { nome: 'João', idade: 20, nota: 8.5 },
    { nome: 'Maria', idade: 22, nota: 9.0 },
    { nome: 'Pedro', idade: 21, nota: 7.8 },
    { nome: 'Ana', idade: 19, nota: 9.5 },
    { nome: 'Gabriel', idade: 20, nota: 7.5 }   
];

function tabelaInicio(){
    const tabela = document.querySelector("#tabelaAlunos");
    for(let aluno of alunos){
        tabela.innerHTML += `

        <tr>
            <td> ${aluno.nome} </td>
            <td> ${aluno.idade} </td>
            <td> ${aluno.nota} </td>
        </tr>
        `;
    }
}

tabelaInicio();



