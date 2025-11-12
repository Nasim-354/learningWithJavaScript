// double items push to array
const ArrayPush = (Name) => {
    let double = [];
    for (const num of Name) {
        const result = num * 2;
        double.push(result);
    }
    return double;
}
console.log(ArrayPush([1, 2, 3, 4, 5, 6]));

// short Rolls

const number = [2, 3, 4, 5, 7, 8, 9];
const doubleNum = number.map(num => num * 2);
console.log(doubleNum);

const aNum = [5, 10, 20, 30, 35, 40, 50];
const dv = aNum.map(n => n / 2);
const add = aNum.map(n => n + 2);
console.log(dv);
console.log(add);

let x = 1;
y = x++;
console.log(y);

// Use of array method check of string.

const stringName = ['Aasim', 'Ahmed', 'Golap'];
const stringLength = stringName.map(s => s.length);
const stringFirstName = stringName.map(s => s[0]);
console.log(stringLength);
console.log(stringFirstName);


// Use of forEach Method
const numbers = [10, 20, 30, 410, 50, 60, 70, 80, 90, 100];
const result = numbers.forEach(n => console.log(n));
console.log(result);

// Difference for map and forEach;
/**
 * Map return allow.
 * forEach return not allow.
 *
 */

// Use of Filter

const fNumber = [70, 75, 60, 80, 65, 14, 50];
const fResult = fNumber.filter(n => n >= 50);
console.log(fResult);

let friends = [];
const fName = ['toma', 'aklima', 'juli', 'jula'];
const fresult = fName.filter(n => n.length > 4);
friends.push(fresult);
console.log(fresult);
console.log(friends);

// use of find


// use of findIndex
const fdIndex = [10, 20, 60, 40, 90];
const fdResult = fdIndex.findIndex(n => n > 50);
const fdRt = fdIndex.findIndex(n => n > 60);
console.log(fdRt);
console.log(fdResult);

//problem solve 1
const shopStorage = [30, 45, 20, 60, 10]
const spStIncrement = shopStorage.map(n => n + 13);
console.log(spStIncrement);

//problem solve 2
const newItem = [];
const listItems = ['Messi', 'Maradona', 'pele', 'Zidan', '[Ronaldo'];
const findItem = listItems.filter(n => n.length > 5);
newItem.push(findItem);
console.log(newItem);

// problem solve 3

const nList = [10, 15, 20, 25, 30, 35];
const listFilter = nList.filter(n => n > 20);
console.log(listFilter);

//problem solve 4
const listHight = [65, 70, 68, 72, 68, 73];
const findHight = listHight.filter(n => n > 69);
console.log(findHight);

//problem solve 5
const n = [7, 10, 15, 20, 25, 30];
const d = n.map(n => n / 3);
console.log(d);

// problem solve 6
const friendsName = ['Leonardo', 'Bard Pitt', 'Kate Winslet', 'Audrey Hepburn', 'Johnny Depp'];
const findName = friendsName.map(n => n[3]);
console.log(findName);

//problem solve 7
const nm = ['Tom ', 'Harry', 'Sam', 'Jack'];
const findN = nm.find(n => n.startsWith('H'));
console.log(findN);


// problem solve 7

const numbers1 = [10.20, , 50, 6080, 100, 220];
const finds = numbers1.some(check => check < 10);
// console.log(finds);

//problem solve 8

const nums = [21, 40, 13, 60, 90, 44];
const eDivs = nums.every(n => n % 5 == 0);
console.log(eDivs);

// let firstAdd = [];
// let secondAdd = [];
// const combination = [...firstAdd, ...secondAdd];

// for (const value of nums) {
//     if (value % 5 == 0) {
//         firstAdd.push(value);
//     }
//     if (value % 5 > 0) {
//         secondAdd.push(value);
//     }
//     // console.log(value);
// }
// const add1 = firstAdd.map(n => n + 100);
// console.log(add1);
// const add2 = secondAdd.map(n => n + 50);
// console.log(add2);
// console.log(combination);


const num = [21, 40, 13, 60, 90, 44];
let fPush = [];
let sPush = [];
for (const value of num) {
    if (value % 5 == 0) {
        fPush.push(value);
    }
    else {
        sPush.push(value);
    }
}
const firstAdd = fPush.map(n => n + 100);
const secondAdd = sPush.map(n => n + 50);
const newArray = firstAdd.concat(secondAdd);
const shortValue = newArray.sort((a, b) => a - b);
console.log(shortValue);

// problem solve 9
const words = ['jahid', 'hello', 'nahid'];
const checkR = words.some(n => n === 'hello');
console.log(checkR);

// problem solve 10

const age = [20, 36, 58, 20, 25];
const Rs = age.every(e => e >= 18);
console.log(Rs);

//problem solve 11
function stringN(name) {
    const reverse = name.split('').reverse().join('')
    const r = reverse.replace(/\*/g, '');
    return r;
}
console.log(stringN('hell*o*'));

// problem solve 12

const r = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let sum = 50;
for (const num of r) {
    sum = sum + num;
}
console.log(sum);

// same problem solve reduce method.

const sumAdd = r.reduce((sum, num) => sum + num, 0);
console.log(sumAdd);

const items = [
    { id: 2, price: 100, name: 'USB' },
    { id: 1, price: 500, name: 'cat-6' },
    { id: 3, price: 150, name: 'light' },
    { id: 4, price: 300, name: 'fun' }
]

const itemAdd = items.reduce((sum, num) => sum + num.price, 0);
console.log(itemAdd);
const itemCheck = items.filter((n) => n.price > 150);
const itemName = items.map((n) => n.name[0]);
const itemChecks = items.find((n) => n.price > 150);
console.log(itemCheck);
console.log(itemChecks);
console.log(itemName);

// 
const aY = [5, 10, 15, 20, 25];
const sAdd = aY.reduce((sum, num) => sum + num, 0);
console.log(sAdd)

for (i = 0; i < aY.length; i++) {
    const res = aY[i] * 2;
    console.log(res);
}
const re = aY.map(n => n * 2);
console.log(re);
for (const value of aY) {
    const r = value * 2;
    // confirm.log(r);
    console.log(r);
}