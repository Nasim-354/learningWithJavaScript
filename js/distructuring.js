const student = {
    Name: 'naism',
    age: 23,
    village: 'md-alipur',
    collage: 'chapainawabganj polytechnic institute'
}
const { Name, age, village, collage } = student;
console.log(Name);
console.log(age);
console.log(village);
console.log(collage);

// array destructuring 

const number = [10, 20];
const [first, second] = number;
console.log(first);
console.log(second);

// double destructuring 
function double(a, b) {
    return [a * 2, b * 2];
}
const [fs, sd] = double(3, 6);
console.log(fs, sd);

const parson = { name: 'amit', age: 25 }
const { name, phone = 'N/A' } = parson;
console.log(name);
console.log(phone);

export function add(a, b) {
    return a + b;
}