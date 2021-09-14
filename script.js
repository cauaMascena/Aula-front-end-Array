// const numeros = [2, 27, 8, 13, 100, 12, 73];
// let numeros100
// let cont = 0
// const limite = 6
// while (cont <= limite) {
//     numeros100[cont] = numeros[cont] = 100;
//     cont++
// }


// // console.log(numeros);

// // function adicao100(numeros) {
// //     numeros[0] = 102;
// // }

// // adicao100(numeros);

// console.log(numeros);

"use strict"

const numeros = [2, 27, 8, 13, 100, 12, 73];

// MAP= percorre todo array e pode modificar ou não o array
// FILTER= filtra 
//REDUCE= reduz a uma informação só

//Criar um novo array com cada elemento 
//do array numeros adicionado 100

const adicionar100 = (numero) => numero + 100

const numeros100 = numeros.map(adicionar100)

console.log(numeros100);

//Criar um novo array com cada elememto
//do arraynumeros descontando 50%const adicionar100 = (numero) => numero + 100

const descontar50 = (numero) => ((numero * 0.5) / 100) * 100

const desconto = numeros.map(descontar50)

console.log(desconto);

//Criar um novo array com os elementos 
//do array numeros que são menores que 20

const EncontarMenoresQue20 = (numero) => numero < 20

const menorQue20 = numeros.filter(EncontarMenoresQue20)

console.log(menorQue20);

//Criar um novo array com os elementos
//do array numeros que são pares

const numerosPares = (numero) => numero % 2 == 0

const numeroPar = numeros.filter(numerosPares)

console.log(menorQue20)

//Somar tosos os elementos do array numeros

const SomarTudo = (a, b) => a + b

const total = numeros.reduce(SomarTudo, 0)

console.log(total)

//somar todos os elementos pares maiores que 20

const resultado = numeros
    .filter(numerosPares)
    .filter(EncontarMenoresQue20)
    .reduce(SomarTudo)

console.log(resultado)