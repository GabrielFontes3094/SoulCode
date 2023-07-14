const nuns= [4, 5, 1, 7, 4, 6, 3, 2, 2, 9];
console.log(nuns);

nuns.push(4);
console.log(nuns);

nuns.unshift(9);
console.log(nuns);

nuns.pop();
console.log(nuns);

nuns.shift();
console.log(nuns);

let juncao = nuns.join(", ");
console.log(juncao);

let vetor2 = [11, 12, 13];
let vetor3 = nuns.concat(vetor2);
console.log(vetor3);

const nomes = ["Gabriel", "Adriano", "Vitor", "Ana"]
console.log(nomes.sort());

console.log(nomes.reverse());

console.log("Gabriel".includes(10));

console.log(nuns.fill(9, 5)); // coloca 9 apartir da 5 posicao

console.log(nuns.indexOf(3));
