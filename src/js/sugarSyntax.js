// Acá les dejo algunos de los ejemplos de sugar sintax que vimos el jueves

// sugar sintax: Es hacer más fácil y eficiente el código. Para que nuestro código sea más fácil de leer por otras personas.

// templates literals
// que nos permiten la interpolación* de variables dentro de cadenas usando ${}

//   *interpolar: en este contexto se refiere al proceso de insertar valores de variables o expresiones dentro de una cadena de texto

// const nombre = 'Andrés';
// const edad = 36;
// console.log('mi nombre es ' + nombre + ' y tengo ' + edad + ' años');
// console.log(`mi nombre es ${nombre} y tengo ${edad} años`);

// destructuring
// Nos permite extraer propiedades específicas de un objeto o array en variables individuales. Por ejemplo si necesitamos un valor de un determinado objeto, con la desestructuración podemos guardar ese valor en una nueva variable y usar ese dato.

// const user = { id: 1, nombre: 'Andrés', profesion: 'Programador' };

// const { nombre, profesion, edad = 36 } = user;

// console.log(nombre, profesion, edad);

// spread operator
// Es una forma de desglosar o expandir elementos de una estructura de datos iterable, como un arreglo o un objeto, en partes individuales

const arreglo = [1, 2, 3];
const arreglo2 = [...arreglo, 4]; // consola => [1,2,3,4]

console.log(arreglo2);

// if ternario
// En lugar de usar una declaración if completa, puedes utilizar el operador ternario para expresar la lógica condicional en una sola línea de código

// if tradicional:
// if (edad < 18) {
//   console.log('no podes entrar');
// } else {
//   console.log('podes entrar');
// }

// con if ternario:
// edad < 18 ? console.log('no podes entrar') : console.log('podes entrar')
