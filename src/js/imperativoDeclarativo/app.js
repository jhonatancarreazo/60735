// imperativo

// const numeros = [1, 2, 3, 4, 5];
// let sumaCuadradosPares = 0;

// for (let i = 0; i < numeros.length; i++) {
//   if (numeros[i] % 2 === 0) {
//     const cuadrado = numeros[i] ** 2;
//     sumaCuadradosPares += cuadrado;
//   }
// }
// console.log(sumaCuadradosPares);

// ------------------------------------------------------------------------

//declarativa

const numeros = [1, 2, 3, 4, 5];
const pares = numeros.filter((numero) => numero % 2 === 0);
console.log(pares);
const cuadrado = pares.map((numero) => numero ** 2);
console.log(cuadrado);
const sumaCuadradosPares = cuadrado.reduce(
  (actual, elemento) => actual + elemento,
  0
);
// como trabaja reduce:
//1ª vuelta: 0 + 4
//2ª vuelta: 4 + 16
//resultado: 20
console.log(sumaCuadradosPares);
