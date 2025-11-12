const sentence = 'I am eating banana. i love Banana';
const check = /\/banana/g;
console.log(check.test(sentence));
console.log(sentence.replace(check, 'mango'));

const number = '03750259118'
const test = /^01[3-9]\d{8}$/;
console.log(test.test(number));

// set practice

const myArray = [1, 2, 2, 3, 4, 4, 5];
const mySet = new Set(myArray);
const mySet1 = [...new Set(myArray)];
console.log(mySet);
console.log(mySet1);

const set = new Set();
set.add(10);
set.add(20);
set.add(10);
set.add(30);
console.log(set);

set.delete(10);
console.log(set);

const array = [1, 2, 3, 4, 2, 1, 5, 5];
const newArray = [... new Set(array)];
console.log(newArray);

// validation function
function n(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'please invalid your number';
    }
    return num1 + num2;
}
console.log(n(33, 900));

function string(st1, st2) {
    if (typeof st1 !== 'string' || typeof st2 !== 'string') {
        return 'please invalid your name';
    }
    else {
        return `${st1} and ${st2}`;
    }
}
console.log(string('nasim', 'hakim'));
console.log(string('nsim', 0));

function single(myName) {
    if (typeof myName !== 'string') {
        return 'please invalid your name'
    }
    return `valid name`
}
console.log(single('name'))