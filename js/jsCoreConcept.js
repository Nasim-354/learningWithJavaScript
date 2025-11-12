let num = 15;
let copy = num;
copy = 25;

console.log(num);
console.log(copy);

let arr = [1, 2, 3];
let cp = arr;
cp = 88;
console.log(arr);
console.log(cp);

let language = {
    name: 'Nasim',
    age: 25
}
let newVersion = language;
newVersion = {
    key: 'Location',
    value: 'browser'
}
console.log(language);
console.log(newVersion);

function add(a, b, c, d, e) {

    console.log(10, 20, 40);
}
console.log(add());

function noNegative(a, b) {
    if (a < 0 || b < 0) {
        return;
    }
    return a + b;
}
console.log(noNegative(-2, -5));

const object = {
    id: 2,
    name: 'nasim'
}
console.log(object.id);
console.log(object.salary);

const array = [10, 20, 30];
delete array[0];
console.log(array[0]);
console.log(array);

const eighth = undefined;
console.log(typeof eighth);
console.log(typeof null);

const R = [10, 20, 30, 40, 50];
delete R[2];
console.log(R);

function sum(a = 0, b = 0, c = 0) {
    return a * b * c;
}
console.log(sum(10, 20, 3));

const number = true;
if (number) {
    console.log('truthy number', number);
}
else {
    console.log('falsy number', number);
}

console.log(!!'hello');

console.log(!!null);
let value = 'coding';
console.log(!!value);

if (value) {
    console.log('true');
}
else {
    console.log('false');

}

console.log([] == false)

console.log(true == 1);

// console.log({} === {});

let r = [];
rs = R;
console.log(r === R);

function condition(n, boolean) {
    if (n == boolean) {
        console.log('true');
    }
    else {
        console.log('false');
    }
}
condition(10, true);

console.log('strin' == false);

console.log(null === undefined);
console.log([8, 7] == [8, 7]);
console.log('hello');


function greeting(handler) {
    morningGreet()
}
function morningGreet() {
    console.log('morning');
}
greeting(morningGreet);

function calculate(a, b, callback) {
    const sum = a + b;
    return callback(sum);
}
function print(value) {
    console.log(`this is addition: ${value}`);
}
calculate(10, 20, print);