/**
 * JavaScript new version ES6(ECMAScript 6).
 * Start now...
 */

// Default parameter system for function.

function Num(n1, n2) {
    const sum = n1 + n2;
    return sum;
}
console.log(Num(20));

// Nan problem solve.

function Num(n1 = 0, n2 = 0) {
    const sum = n1 + n2;
    return sum;
}
console.log(Num(20, 10));

function string(name = `'Your name'`) {
    return `My name is ${name}`;
}
console.log(string('Aklima'));

// Create is function there parameter is default value 0.

function sum(n1 = 0, n2 = 0, n3 = 0) {
    const sum = n1 + n2 + n3;
    return sum;
}
console.log(sum(10, 13));

// Default value 50.

function deposit(n = 50) {
    return n;
}
console.log(deposit())

// Author default name and income 

function author(Name = 'Anonymous', income = 0) {
    return `My name is ${Name} and income value:${income}`;
}
console.log(author());

// ‍Area of a Square.

function Square(n = 1) {
    const sqr = n * n;
    return sqr;
}
const result = Square();
console.log(result);


function schoolBook(Name = "Js book") {
    return Name;
}
console.log(schoolBook(['bangla,English', 'Math']));
console.log(schoolBook([]));
console.log(schoolBook());

const favoritBook = (book) => {
    const list = Array.isArray(book) && book.length ? book : 'js book';
    return list;
}
console.log(favoritBook(['bangla', 'english']));
console.log(favoritBook([]));
console.log(favoritBook());

// use of template.

const Add = function (a, b) {
    const sum = a + b;
    return `n1:${a} n2:${b} sum:${sum}`;
}
const result1 = Add(5, 5);
console.log(result1);

const employee = {
    name: 'nasim',
    age: 22,
    salary: 12000
}

const emy = function () {
    return `employee name :${employee.name} and age :${employee.age}, salary : ${employee.salary}`;

}
console.log(emy());

const fruits = ['apple', 'banana', 'orange'];
const ft = `apple is ${fruits[0]} banana is ${fruits[1]} orange is ${fruits[2]}`;
console.log(ft);
function fut() {
    return `apple is ${fruits[0]} banana is ${fruits[1]} orange is ${fruits[2]}`;

}
console.log(fut());

// student details 

// const student = {
//     name: 'nasim',
//     age: 23,
//     result: [60, 80, 90]
// }
// const sum = student.result[0] + student.result[1] + student[2];
// const avg = sum / 3;
// const print = `student name ${student.name} and result average ${avg}`;
// console.log(print);

const student = {
    name: 'nasim',
    age: 23,
    result: [60, 80, 90]
};

const sum1 = student.result.reduce((a, b) => a + b, 0)
const avg = sum1 / student.result.length;

const print = `student name ${student.name} and result average ${avg.toFixed(2)}`;
console.log(print);

import { add } from './distructuring.js';
console.log(add(5, 3));