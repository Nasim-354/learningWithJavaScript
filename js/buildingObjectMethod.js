// function constructor

// object constructor old version.
const person= new Object();
person.name = 'nasim';
person.age = 24;
console.log(person);

// string to number converter 
const start = '786';
// const num = +start;
const num = Number(start);
console.log(num);


// boolean constructor
const willAttend = 0;
const bl = Boolean(willAttend);
console.log(bl);

const Address = new Object();
Address.city = 'Rajshahi';
Address.country = 'bangladesh';
console.log(Address);

// number to string converter.
const total = 1970;
// const str = total +"";
const str = String(total);
console.log(str);
const number = Math.min(45,11,89,23,56,-12,56);
const numb = Math.max(45,11,89,23,56,-12,56);
console.log(number);
console.log(numb);

const n = 7.6;
const n1 = 7.5;
const round = Math.round(n);
const round1 = Math.round(n1);
console.log(round);
console.log(round1);

console.log(Math.floor(7.6));
console.log(Math.ceil(7.6));

console.log(Math.abs(-33));

function Numbers(num){
    const r = Math.round(num);
    console.log('round:',r);
    const f = Math.floor(num);
    console.log('floor',f);
    const c = Math.ceil(num);
    console.log('ceil:',c);
}
Numbers(5.6);

// Date with Js Data.

const date = new Date();
console.log(date);

const Date1 = new Date(2025,2,10,10,10,10);
console.log(Date1)
const fullYear = date.getFullYear();
console.log(fullYear);

let d = new Date();
date.setFullYear(2040,0,5);
console.log(date);

const d1 = d.getDay(2024-3-5)
console.log(d1)