"use strict";

function saludar(saludo) {
  return function (nombre) {
    console.log(saludo + "" + nombre);
  };
}
var saludarHola = saludar("hola");
saludar("toni");
saludar("dai");
saludar("ti");
saludar("oni");
saludar("ton");

// function multiplica(a, b) {
//   console.log(a);
//   return a * b;
// }
// var multiplicaPorDos = multiplica.bind(this, 2);

// for (let i = 0; i < 11; i++) {
//   multiplicaPorDos(i);
// }
// console.log(multiplicaPorDos(4));

function saludar(saludo) {
  return function (nombre) {
    console.log(saludo + " " + nombre);
  };
}
var saludarHola = saludar("Hola"); // Esto devuelve una función
//saludarHola("Toni"); // 'Hola Ton
saludarHola("tomas");

function counter() {
  let result = 0;
  return function add() {
    result++;
  };
}

function outer() {
  return function inner() {};
}

function human(n) {
  (function sayHi() {
    console.log(`hi im ${n}`);
  })();
  (function saybye() {
    console.log(`${n} says goodbye`);
  })();
}
human("tomas");

function counter() {
  let count = 0;
  function add() {
    count++;
    console.log(count);
  }
  return add;
}

const nuevoContador = counter();
nuevoContador(); // 1
nuevoContador(); // 2
nuevoContador(); // 3

const otroContador = counter();
otroContador(); // 1
otroContador(); // 2
otroContador(); // 3
/*
  Ejercicio 1

  La función counter debe retornar otra función. Esta función retornada debe actuar como un contador, retornando un valor numérico que empieza en 1 e incrementa con cada invocación.

  Ejemplo:

   */

var instructor = {
  nombre: "Franco",
  edad: 25,
};

var alumno = {
  nombre: "Juan",
  curso: "FullStack",
};

function getNombre() {
  return this.nombre;
}

function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena) {
  return delimitadorIzquierda + cadena + delimitadorDerecha;
}

let textoAsteriscos = crearCadena.bind(this, "*", "*");
let textoGuiones = crearCadena.bind(this, "-", "-");
let textoUnderscore = crearCadena.bind(this, "_", "_");

console.log(textoAsteriscos("tomas"));
console.log(textoGuiones("tomas"));
console.log(textoUnderscore("tomas"));

function factorial(x) {
  if (x > -1 && x < 2) return 1;
  else if (x < 0) return 0;
  return x * factorial(x - 1);
}
console.log(factorial(4));

let arreglo = [9, 6, 4, 7, 3, 7, 8, 3, 2, 4, 7, 8];
let set1 = new Set(arreglo);
console.log(set1);
// agregar numero a set
let newSet = set1.has(8);
console.log(newSet);

console.log(set1);
// set to array

var stack = [];
stack.push(1);
stack.push(10);
stack.push(7);
stack.push(5);
stack.push(9);

var i = stack.pop();
console.log(i);

///STACKS / PILAS ------- push y pop
//agregar metodos a mi clase
function Stack() {
  this.array = [];
}
Stack.prototype.push = function (num) {
  this.array.push(num);
};

Stack.prototype.pop = function () {
  this.array.pop();
};

let stack2 = new Stack();
stack2.push(1);
stack2.push(10);
stack2.push(7);
stack2.push(5);
stack2.push(9);
console.log(stack2);

//// QUEUE / COLAS ----------- shift y unshift

function nFactorial(n) {
  if (n === 0 || n === 1) return 1;
  if (n < 0) return 0;
  return n * nFactorial(n - 1);
}
console.log(4);

// function nfibo(n) {
//   let contador = 0;
//   if (contador === n) {
//     return 5;
//   }
//   contador++;
//   return nfibo(n) + nfibo(n + 1);
// }
// nfibo(5);

// fib(n) + fib(n + 1);
// // 0 +1 = 1
// //  1 +1= 2
// //  2 + 1 = 3
// //  3 + 2 =5
// // 5 + 3=8

function fib(n) {
  if (n === 1) return 1;
  if (n === 0) return 0;
  return fib(n - 1) + fib(n - 2);
}
console.log(fib(5));

// fib(5) = fib(4) + fib(3) = 3 + 2 = 5
// fib(4) = fib(3) + fib(2) = 2 + 1 = 3
// fib(3) = fib(2) + fib(1) = 1 + 1 = 2
// fib(2) = fib(1) + fib(0) = 1 + 0 = 1
// fib(1) = 1
// fib(0)  = 0
