// const pizza = 'Calabresa';
// const estabelecimento = 'Martingnoni';
// const preco = 75;

// console.log(`Eu fui à pizzaria ${estabelecimento} e gastei R$${preco} em uma pizza de ${pizza}`);

// const altura = 100;
// const largura = 250;
// const perim = (altura + largura) * 2;

// console.log(perim);

// const cels = 23;
// const farh = cels * 1.8 + 32;
// console.log(farh);
// const kelv = cels + 273.15;
// console.log(kelv);
// const km = 98;
// const milha = km * 0.621371;
// console.log(milha.toFixed(1));

// let saldo = 500;
// saldo += 200;
// saldo -= 300;
// saldo -= 10;

// console.log(saldo);

// const preco = 373;
// const descPorc = 14;
// const desconto = preco * (descPorc / 100)
// console.log(desconto.toFixed(2));
// const valorFinal = preco - desconto;
// console.log(valorFinal.toFixed(2));


// let a = 0, b = 1;
// for(let i = 0; i <=10; i++) {
//     console.log(a);
//     [a, b] = [b, a+b];
// }

// let qtd = 10;
// let seqFib = [];
// let a = 0;
// let b = 1;
// for(let i=0; i<=qtd; i++) {
//     seqFib.push(a);
//     let proxN = a + b;
//     a = b;
//     b = proxN;
// }
// console.log("Os primeiros termos são: ")
// console.log(seqFib.join("/"));

const nomes = ['Marcos', 'José', 'Ygor', 'Cesar'];
nomes.push('Pedro');
nomes.unshift('Hendrius');
nomes.splice(2, 0, 'Karlos', 'Carlos');
// nomes.splice(3, 3);
for(let i = 0; i < nomes.length; i++) {
    console.log(i, '-', nomes[i]);
}
// nomes.push('Pedro');
// console.log(nomes)

// const titulo = document.getElementById('titulo');

// if(titulo) {
//     titulo.textContent = 'Lista de terefas';
// }

// const titulo = document.getElementById('titulo').innerText = "Lista de Tarefas";

// const cor = document.querySelector('#sobre p').style.color="blue";

const cor = document.querySelector('#sobre').style.font="Arial";

// if(cor) {
//     cor.style.color="blue";
// }

