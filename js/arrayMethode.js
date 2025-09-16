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