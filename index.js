/*
Exercicio 1

const distanciaKm = 200;
const consumoKmL = 40;
const precoL = 6.70;

const totalLitros = distanciaKm / consumoKmL;
const custototal = consumoKmL * precoL;
console.log(`O carro com ${distanciaKm.toFixed(2)}Km, fez ${totalLitros} Km/l. E gastou R$${custototal.toFixed(2)}`);
*/

const LadoA = 60;
const LadoB = 30;
const LadoC = 20;

if (LadoA + LadoB > LadoC && LadoA + LadoC > LadoB && LadoB + LadoC > LadoA) {
    console.log("Os lados podem formar um triangulo")

if (LadoA === LadoB && LadoB === LadoC) {
    console.log("o Triangulo e equilatero")
} else if (LadoA === LadoB || LadoB === LadoC || LadoA === LadoC) {
    console.log("O triangulo e Isósceles")
} else {
    console.log("O triangulo e escaleno")
}
}

/*
*/
/*
const numeroverdadeiro = 12;
let numprimo = true;

if (numeroverdadeiro < 2) {
    numprimo = false;
} else {
    for (let i = 2; i <= Math.sqrt(numeroverdadeiro); i++) {
        if (numeroverdadeiro % i === 0) {
            numprimo = false;
            break;
        }
    }
}

if (numprimo) {
    console.log(`O número ${numeroverdadeiro} é primo.`);
} else {
    console.log(`O número ${numeroverdadeiro} não é primo.`);
}
*/
/*
const Turma = [
    { Aluno: "Cesar", Nota: 9},
    { Aluno: "Wilson", Nota: 8},
    { Aluno: "Maria", Nota: 7},

];

let soma = 0;
for (let aluno of Turma) {
    soma += aluno.Nota;
}
let media = soma / Turma.length;
console.log(`A média da turma é ${media.toFixed(2)}`);
 
let melhoraluno = Turma[0];
for (let Aluno of Turma) {

    if (Aluno.Nota > melhoraluno.Nota) {
        melhoraluno = Aluno;
    }
}

console.log(`O melhor aluno é ${melhoraluno.Aluno} com nota ${melhoraluno.Nota}`);
*/