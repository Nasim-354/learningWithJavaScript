// check of indexOf

const city = 'Chattogram';
console.log(city.indexOf('g'));

// check of includes

const name = 'Rifat';
const lastIndex = name.at(-1);
console.log(lastIndex);

const language = 'javaScript';
const index = language.indexOf('rip');
console.log(index);

const text = 'Immutable';
console.log(text.length);

const email = 'User@Example.com';
const lowerCase = email.toLowerCase();
console.log(lowerCase);

const greeting = 'hELlo WoRld';
console.log(greeting.toLowerCase());

const lang = 'JavaScript';
if (lang.toLowerCase()) {
    let indx = lang.slice(4);
    console.log(indx);
}

const tx = 'NodeJs';
if (tx.split('')) {
    let upperCase = tx.includes('N');
    console.log(upperCase);
}
else {
    console.log('this is lowerCase');
}
console.log(tx.split(''));


const friends = "Raju,Rana,Hasan,Kabir,Mahi";
const split = friends.split(',');
console.log(split);
const stg = friends.toString(",");
console.log(stg);


const sentence = "function if else while";
let scn = [];
const spl = sentence.split(' ');
for (const name of spl) {
    scn.push(name);
}
console.log(scn);

const language1 = ['JavaScript', 'Python', 'Java'];
const string1 = language1.toString(" ");
console.log(string1);

const loop = "for, for-in, for-of, while,do-while";
const spt = loop.split(',');
console.log(spt);

const debug = ' console log debug ';
console.log(debug.trim());

const str1 = 'push';
const str2 = 'pop';
const str3 = 'shift';
const str4 = 'unShift';

const concat = str1.concat(' ', str2, ' ', str3, ' ', str4);
console.log(concat);

const java = 'Hello JavaScript Developer';
const splice = java.slice(6, 16);
console.log(splice)

const sn = 'code more learn more';
console.log(sn.substring(10, 15));