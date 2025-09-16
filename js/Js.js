

/* // learning with Jhankar Mahbur book
const num = 10;
console.log(num);

const nasim = '20';
const na = '30';
const n1 = parseInt(nasim);
const n2 = parseInt(na);
//console.log(typeof n1,typeof n1, typeof n2);
//console.log(n1 + n2);

// question1
const num1 = '20';
const numCNV = parseInt(num1);
const num2 = 10;
console.log(num2 + numCNV);

// question1 
const FLt = '3.14159';
const FLt1 = parseFloat(FLt);
console.log(FLt1);

// question2
const premikBoy = 'PremikBoy';
const premikBoy1 = parseInt(premikBoy);
console.log(typeof premikBoy1);

// question3
const n = 3.456;
const a = 2.789;
const A = (a + n);
console.log(A.toFixed(2));

// question4
const N = '56.78';
const N1 = parseFloat(N);
const F = '12.34';
const F1 = parseFloat(F);
console.log(N1+F1);

// Question6'

const B = '10.5678';
const B1 = parseFloat(B);
const C = '5.4321';
const C1 = parseFloat(C);
const Add = parseFloat(B1 + C1).toFixed(2);
console.log(Add);

//question7

let nam = '42.45689754';
let nam1 = parseFloat(nam);
let rounded = nam1.toFixed(2);
console.log(rounded);

let Var1 = 5;

if(5===Var1){
    console.log('true')
}
else{
    console.log('false')
}
*/

const { compile } = require("tailwindcss");
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");
const { default: createPlugin } = require("tailwindcss/plugin");


// condition problem solve 

// Question8

/*

const age = 20;
const inch = 65;
if( age > 18  && inch > 60){
    console.log("ami gari telbo!");
}
else{
    console.log("ami gari telbo nah");
}

// Question8
const math = 81;
const english = 97;
if(math > 80 && english > 85){
    console.log('Iam a good student❤️');
}
else{
    console.log("I'am a bad student 😒")
}
// Question9

const Gpa = 6;
const salary = 10000;
if( Gpa >= 5 && salary <= 10000){
    console.log("taka pabo")
}
else{
    console.log("taka pobo nah");
}
// Question10

const year = 10;
const skill = 2.4;
if(year < 30 && skill > 2){
    console.log('Iam employ man')
}
else{
    console.log("I'am don't employ man");
}
// Question11

const student = 81;
const assignment = false;
if(student > 80 && assignment === true){
    console.log('I will take the exam');
}
else{
    console.log('I will not take the exam');
    
} 

const treShat = 151;
if(treShat > 1000){
    const discount = treShat * (20/100);
    const fixed = discount.toFixed(3);
    const parseF = parseFloat(fixed);
    const pay = treShat - parseF;
    console.log(`total amount:${treShat} . discount price:${parseF} and pay taka:${pay}`);
}
else{
    console.log(`full price:${treShat}`)
}
*/

// question11
/*
function input(){
    const inputName = document.querySelector('button').value;
    const amount= inputName.prompt("your amount:");
    if(amount >= 6000){
        const discount= amount * (15/100);
        const paY = amount - discount;   
        const Fixed = paY.toFixed(2);
        const stringTonumber = parseFloat(Fixed);
        console.log(`15% discount total price:${stringTonumber}. Discount unite:${discount}`);
    }
    else if(amount >= 3000){
        const discount= amount * (5/100);
        const paY = amount - discount
        const Fixed = paY.toFixed(2);
        const stringTonumber = parseFloat(Fixed);
        console.log(`5% discount total price:${stringTonumber}. Discount unite:${discount}`);
        
    }
    else{
        console.log(`fixed price:${amount}`)
    }

}


function input() {
    const amount = parseFloat(prompt("Your amount:"));

    if (isNaN(amount)) {
        console.log("Invalid amount!");
        return;
    }

    if (amount >= 6000) {
        const discount = amount * 0.15;
        const pay = amount - discount;   
        console.log(`15% discount total price: ${pay.toFixed(2)}. Discount amount: ${discount.toFixed(2)}`);
    } 
    else if (amount >= 3000) {
        const discount = amount * 0.05;
        const pay = amount - discount;
        console.log(`5% discount total price: ${pay.toFixed(2)}. Discount amount: ${discount.toFixed(2)}`);
    } 
    else {
        console.log(`Fixed price: ${amount.toFixed(2)}`);
    }
}

*/
/*
let input = prompt("Your amount:");
if (input !== null && input.trim() !== "" && !isNaN(input)) {
    const amount = parseFloat(input);
    console.log("Your amount is:", amount);
} else {
    console.log("Invalid amount");
}
*/
/*
const age = 13;
if(age <= 12){
    console.log("Free eat");
}
else if(age > 12 && age <= 60 ){
    console.log("Full taka paid");
}
else if(age> 60){
    console.log('50% discount')
}

const taka = 5001;
if(taka < 1000){
    console.log('Please deposit your taka');
}
else if (taka >= 1000 && taka <= 5000){
    console.log('Life is bindas.');
}
else if(taka > 5000 ){
    console.log('You maris me.')
}

const marks =49;
if(marks < 50){
    console.log('You are File')
}
else if(marks >= 50 && marks < 80){
    console.log('You are Pass');
}

else if(marks >= 80){
    console.log("you are A+")
}

if(marks <= 100 && marks >= 80){
    console.log('A+');
}
else if(marks < 80 && marks >= 50){
    console.log('pass');
}
else{
    console.log('Fail');
}

const CS = 21;
if(CS < 0){
    console.log('Ice');
}
else if(CS >= 0 && CS <= 20){
    console.log('cool cool');
}
else{
    console.log('hot hot');
} */
/*

const moveTaka = 110;
const PopconPrice = 51;
if(moveTaka <= 300){
    console.log("Going watch move");

    if(PopconPrice <=50 ){
         console.log("popcon khobo.");
    }
    else{
         console.log("popcon Khabo nah");
    }
}

else{
     console.log("ami barit bose takbo");
}

const num = 11;
num % 2 === 0 ? console.log('even'): console.log('odd');

*/
/*
const invite = "invite";
const inviteTaka =11100;
if (invite === "invite") {
    console.log("Thanks friend.");
    if (inviteTaka > 1000) {
        console.log('My friend birth day give.')
    }

    else {
        console.log("No give");
    }
}

else {
    console.log("Your are not friend.");
}
*//*

const tre = 'tre';
if(tre ==='tre'){
    console.log("yes, I'am drinking tre.");
    const biskit = 'bisk';
    if(biskit === 'biskit'){
        console.log('Yes, biskit Khobo')
    }
    else{
        console.log('NO, amik hobo nah biskit.')
    }
}
else{
    console.log("Star jolsah dekho.");
}

const cashback = 30000;
 cashback > 3000 ? console.log('discount price:500'): console.log('Fixed price');

 const age =16;
 age>= 15?console.log('teenager'):console.log('child');
 
 const isLoggedIn = true;
 isLoggedIn === true? console.log('welcome back  '): console.log('please login');

 const sunny = true;
 sunny === true? console.log():console.log('Stay home')
 */


// array worker

/*

const num = [1,2,3,4,5,6,7,8,89,2,83,84,34];

    num[8] = 'ahmed';
    num.unshift('nasim','golap');
    num[0] = 'khirul';
    num[1] = 'Islam';
    num[13] = 'Khan jahan'
   const itemChange = num.indexOf(84);
   const itemChack = num.includes('khirul');
   const totalItem = num.length;
   const index = num[10];
   console.log(num)
   console.log(itemChange);
   console.log(itemChack);
   console.log(totalItem);
   console.log(index);

const foods = ['mango','apple','banana','lichi'];
if(foods.includes('jam')){
    console.log('yes, mango ace');
}
else{
    console.log('No, mango nai');
}

const friendName = ['babul','alif', 'soton'];
const indexName = friendName.indexOf('babul');
 console.log(`index position: ${indexName}`);


const friends = ['remon','refat', 'ragib'];
const indexFriends = friends.indexOf('refat');
console.log(indexFriends);

const city =['Dhaka','chittagong','sylhet'];
city.unshift('rajshahi');
const indexPosition = city.includes('rajshahi');
const indexPos = city.indexOf('rajshahi');
console.log(indexPosition);
console.log(indexPos);

const rain = ['দীঘি','মেঘ','বৃষ্টি','র্বষা'];
if(rain.includes('বৃষ্টি')){
    console.log('I need umberalla');
}
else{
    console.log('No rain no pain');
}
 
const play = ['football','cricket','vloiboll'];
const playCha= play.includes('badminton');
console.log(playCha);

*/

// for loop .

/*
const numbers = [10,20,30,40,50,60,70,80,90,100];
for(const num of numbers){
    // console.log(num);
}
// console.log(numbers);

const subjects = ['bangla','english','math','science'];
for(const subj of subjects){
    // console.log(subj);
}

const playerName = ['nasim','iqbal','khirul','naim','towfic','mijan','al-mustohfa','al-amin','sanuar','rokibul','santo'];
const playerNumbers  = playerName.length;
// const playerNumbers  = playerName.indexOf('nasim');
// console.log(playerName[4]);

for(const PN of playerName){
    // console.log(PN);
}


const examDate = [12,20,65,18,90];
for (let aDate of examDate){
    
    // console.log(aDate);
}

// while loop 
let num = 0;
let sum = 0;
while( num < 5){
    // console.log(num);
    sum = sum + num
    num += 2;
}
// console.log(`sum: ${sum}`);
let num1 = 1;

while( num1 <= 10 ){
    // console.log(`regular 3hours program practice.`);
    num1++;
}

let number = 50;
while(number <= 100){
    // console.log(number);
    number++
}

let namota = 1;
while(namota <= 10){
   let result = namota * 3 ;
//    console.log(result);
   namota++;
}

let number2 = 110;
while(number2 <= 111){
    const result2 = number2 / 2;
    // console.log(result2);
    number2++;
}

let numN = 21;
let sum1 = 0;
while(numN <= 50){
    sum1 = sum1 + numN ;
    // console.log(` ${sum1} + ${numN}`);
    numN++;
}
// console.log(`Sum:${sum1}`);

let N = 20 ;
let M = 0;
while( N <= 40){
    M = M + N;
    N++;
}
console.log(`sum: ${M}`)

*/
/*
let sum = 0;
for(let i = 31; i <= 58; i++){
    sum += i;
}
// console.log(sum);

for(let i = 1; i <= 10; i++){
    if(i%2==1){
        // console.log(i);
    }
}
let k = 0;
for(let n = 1; n <= 40; n++){
   if(n%5==0){
     k += n;
    //  console.log(n);
    }
}
// console.log(k);

for(let a = 1; a <= 50; a++){
    if(a%3== 0 && a%5== 0){
        console.log(a);
    }
}
*/
/*
for(let b = 40; b <=80; b++){
    if(b%7==0 || b%5==0){
        // console.log(b);
    }
}

let sum = 0;
for(let i = 0; i <+ 40; i++){
    if(i%13==0){
        sum +=i;
        // console.log(i);
    }
}
// console.log(sum);


for(let c = 1; c<=50; c++){
    if(c%3==0 && c%4==0){
    // console.log(c);
    }
}

for(let f = 1; f<15; f++){
    if(f == 5 || f == 10){
        continue;
    }
    // console.log(f);
}

for(let e= 1; e<=21; e++){
    if(e%2==1){
        continue;
    }
    // console.log(e);

}

for(let a = 1; a<=30; a++){
    if(a == 15){
        continue;
    }
    // console.log(a);
}

for(let i =1; i<= 40; i++){
    if(i%7==0){
        // console.log(i)
        continue;
    }
    // console.log(i);
}
for(let i =1; i<= 15; i++){
    if(i==9){
        // console.log(i)
        continue;
    }
    // console.log(i);
}

for(let i =1; i<= 25; i++){
    if(i%3==0){
        // console.log(i)
        continue;
    }
    // console.log(i);
}

for(let h = 91; h <= 120; h++){
    if(h%10==0){
        break;
    }
    console.log(h);
}
    */

// Use of Object 

const teacher = {
    Name: 'Nahid Alom',
    age: 24,
    subject: 'bangla',
    time: '10am',
    face: 'white'
}
// console.log(teacher);

const tre = {
    Name: 'banana',
    year: 10,
    hight: 5.5,
    fruit: 'yellow banana',
    color: {
        green: "#008000",
        yellow: "#ffff00",
        red: "#ff0000"
    },
    man: ['nasim,', 'hakim', 'roja vai', 'alif']
}
// for(const num in tre)
// console.log(num);

// console.log(tre['year']);
// console.log(tre['color']['red']);
// console.log(tre.man[2]);

// const ary = Object.keys(tre);
// const Vlu = Object.values(tre);
// console.log(ary);
// console.log(Vlu);

// const key = Object.keys(tre);
// const check = key.includes('year');
// console.log(check);
// const vlu = Object.values(tre.color);
// const checkV = vlu.includes('#008000');
// console.log(checkV);

// condition property check.

// const entries = Object.entries(tre);
// console.log(entries);

// const profile = {
//     Name: 'Nasim',
//     age: 28,
//     city: 'rajshahi'
// }
// for (const key in profile) {
//     const Value = profile[key];
//     console.log(key, Value);

// }

// for(const key in profile){
//     console.log(key, profile[key]);
// }


// practice object 
/*
const book = {
    Name :'English',
    writer: 'Nasim',
    color:'gray'
}
// const key = Object.keys(book);
// console.log(key);
// const value = Object.values(book);
// console.log(value);

const article = {
    title:'Learning Js',
    category:'programming'
}
if('author' in article){
    console.log('yes');
}
else{
    console.log("No");
}

if(article.hasOwnProperty('title')){
     console.log('yes');
}
else{
    console.log("No");
}

const laptop = {
    brand: 'Dell',
    model:'Inspiron',
    price:45000,
}
const keys = Object.keys(laptop);
for(const key of keys){
    console.log(key, laptop[key]);
}
 */

// function declaration

/*
function great(){
    console.log('hello javaScript');
}
great();

// function with parameter.

function add(a,b){
    return a+b;
}
console.log(add(3,5));

// function with expression
const multiply = function(a,b){
    return a * b;
}
console.log(multiply(3,5));

//Arrow function 

const square = (n) => n/4;
console.log(square(20));

// Anonymous function 
setTimeout(function(){
    console.log("Hello European It");
} );
 */
/*

const x = 8;
x%2===0? console.log('even') : console.log('odd');

function doMath(a, b){
    const sum = a + b;
    const diff = a - b;
    const multiply = sum * diff;
    const div = multiply / 2;
    return div;

}
console.log(doMath(5,2));

function evenOdd(x){
    if(x%2===0){
        return true;
    }
    else{
        return false;
    }
}
const result = evenOdd(8);
console.log(result);

function condition(x){
    if(x>10){
        return true;
    }
    else{
        return false;
    }
}
console.log(condition(110));

function Number(x){
    if(x%13===0){
        return true;
    }
    else{
        return false;
    }
}

console.log(Number(39));


function add( rice, curry, drinks){
    const sum = rice + curry + drinks;
    return sum;
}
console.log(add(10,20,30));

function Selection(year){
    if(year >= 18){
        return 'Eligible for voting';
    }
    else{
        return 'Not Eligible';
    }
}
console.log(Selection(18));


function String(){
    const string = 'Welcome to javaScript';
    const length = string.length;
    return length;
}
console.log(String('hello'));

function Summation(a,b,c){
    const sum  = a + b + c;
    const result = sum / 3;
    return result;
}
console.log(Summation(10,10,10));

function numberChaking(x){
    if(x<0){
        // console.log('negative number');
        const m = (x * (-1));
        return `${m} : negative number`;
    }
    else{
        console.log('This positive number ');
    }
}

console.log(numberChaking(64));
*/


/*
*component of string defined even and odd;
*/
/*
function String1(st){
    const r = st.length;
    if(r%2 === 0){
        console.log('even');
    }
    else{
        console.log('odd');
    }
}
String1('hello nais');

function evenOdd(str){
    const s = str.length;
    console.log(str, s);
}
evenOdd('nasim');

/**
 * function for even and odd 
 */
/*
function string(string){
    const result = string.length;
    if(result%2 === 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(string('hello1'));


function doubleOrTriple(num, toDouble){
    if(toDouble === true){
        const result = num * 2;
        return result;
    }
    else{
        const result = num * 3;
        return result;
    }
}
const result = doubleOrTriple(4 , true);
// console.log(result);

function numberOfElement(num){
    const len = num.length;
    return len;
}
const rlt = numberOfElement([10,50,60,658,70]);
console.log(rlt);

*/
/* function evenOdd(num){
    for (const key in num) {
        if(key%2 === 0){
            // console.log('even');
        }
        else{
            // console.log('odd');
        }
    }
}
const result = evenOdd([11,12,13,14,15]);
console.log(result);


function Array(num){
    for (const key of num) {
        if(key%2 === 0){
            console.log('even');
        }
        else{
            console.log('odd');
        }
    }
}
const result1 = Array([555,56,89,566]);
console.log(result);
*/
/*
function add(num){
    var sum = 0;
    for (const key of num) {
        sum += key;
        console.log(sum);
    }
    console.log(sum);
}
 add([10,20,30,40]);
 */
/*
function Num(num){
    if(num>10){
        const div = num / 10;
        return div;
    }
    else{
        const mul = num * 10;
        return mul;
    }
}

const result = Num(111);
console.log(result);

function String(str){
    const st = str[0];
    return st;
}
console.log(String('Raju'));


function ArraY(num){
    const sum = num[0] + num[1];
    return sum;
}

console.log(ArraY([20,20,30]));

function positiveNegative(n){
    if(n > 0){
        const j = n * 2;
        return j;
    }
    else{
        const j = n * 3;
        return j;
    }
}
console.log(positiveNegative(3));
console.log(positiveNegative(-3));


function Str(num1, num2){
    const n1 = num1.length;
    const n2 = num2.length;
    if(n1>n2){
        return true;
    }
    else{
        return false;
    }
}
console.log(Str('nasim','atik'));

function multiply(n1 , n2){
    const M = n1 * n2;
    if( M > 100){
        const half = M / 2;
        return half;
    }
    return M;
}
const result5 = multiply(5,22);
// console.log(result5);


function even(arry) {
    let sum = 0;
    for (const arrys of arry) {
        if (arrys % 2 === 0) {
            sum += arrys;
        }
    }
    return sum;
}
const A = [10, 11, 12, 13, 14, 15, 16];
const resultF = even(A);
console.log( `total even number: ${resultF}`);



function odd(number){
    let S = 0;
    for (const numbers of number) {
        if(numbers % 2 === 1){
            S += numbers
        }
    }
    return S;
}
const ary = [5,15,8,7];
const r = odd(ary);
console.log(r);


const number = 50;
if(number >= 80){
    console.log('A+');
}
else if(number >= 70 || number <= 79 ){
    console.log("A");
}
else if(number >= 60 || number <= 69){
    console.log("B");   
}
else if(number >= 50 || number <=59){
    console.log("C")
}
else if(number >= 40 || number <=49){
    console.log("D")
}
else if(number >= 33){
    console.log("E")
}
else{
    console.log('Fail');
}


/**
 * inch to fit convert to js 
//  */
// function inchToFit(inch){
//     const fit = inch / 12;
//     return fit;
// }
// const result = inchToFit(50);
// console.log(result);

// function inchToFitConvert(inch){
//     const feet = inch /12;
//     const fitInt = parseInt(feet);
//     const inchTo = inch % 12;
//     const currentValue = `${fitInt}' ${inchTo}"`;
//     return currentValue;
// }
// const Rst = inchToFitConvert(70);
// console.log( Rst);

// /**
//  * mile to kilometer coveter
//  */

// function mileToKilometer(mile){
//      const kilo = mile * 1.6204;
//      const fixed = kilo.toFixed(2);
//      return fixed;
// }
// const ans = mileToKilometer(5);
// console.log(ans);

// /**
//  * kilometer to mile convert 
//  */

// function kiloToMile(kilo){
//     const mile  = 0.621 * kilo ;
//     return mile;
// }
// const Ans = kiloToMile(5)
// console.log(Ans);

// /**
//  * mile to gos convert
//  */
// function mileToGos (mile){
//     const gos  = 1760 * mile;
//     return gos;
// }
// const An = mileToGos(13);
// console.log(An);

/**
   * Kwh to Kcal convert
*/
// function KwhToKCal(Kwh){
//     const Kcal = 860 * Kwh;
//     return Kcal;
// }
// console.log(KwhToKCal(10));
// /**
//  * Hours to seconds
//  */

// function HouToSecond(hour){
//     const sec = hour * 60 * 60;
//     return sec;
// }
// console.log(HouToSecond(2));

// /**
//  * centimeter to meter convert 
//  */
// function CmToM(centimeter){
//     const meter = centimeter / 100;
//     return meter;
// }
// console.log(CmToM(1000));

// /**
//  * inch to centimeter convert
//  */
// function iToC(inch){
//     const centimeter = inch * 2.54;
//     return centimeter
// }
// console.log(iToC(20));

// /**
//  * pound to kilogram
//  */
// let pound = 2;
// let kilogram = 0.453;
// const result1  =  pound * kilogram;
// console.log(result1);

/**
 * LeapYear 
 */

function isLeapYear(year) {
    if (year % 4 === 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLeapYear(2025));

function income(taka) {
    if (taka <= 50000) {
        return 10;
    }
    else if (taka >= 50001 && taka <= 100000) {
        return 20;
    }
    else if (taka >= 100001 && taka <= 200000) {
        return 30;
    }
    else if (taka > 200000) {
        return 40;
    }
}
console.log(income(500011))

var name = 'naism';
const rv = name.split('').reverse().join('');
console.log(rv);

function String(text) {
    const clean = text.replace(/\*/g, '');
    return clean.split('').reverse().join('');
}
console.log(String('**nasim***'));
console.log(String('**noman***'));
