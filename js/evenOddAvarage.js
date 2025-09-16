/**
 * includes array odd averages 
 */

function oddAverages(Numbers) {
    const odd = [];
    for (const number of Numbers) {
        if (number % 2 === 1) {
            odd.push(number);
        }
    }

    if (odd.length === 0) {
        return 0;
    }
    let sum = 0;
    for (const num of odd) {
        sum = sum + num;
    }
    const count = odd.length;
    const avg = sum / count;
    const toFxd = avg.toFixed(2);

    return Number(toFxd);

}
console.log(oddAverages([20, 12, 32, 18]));
console.log(oddAverages([20, 30, 21, 23, 33]));

const ary = [20, 12, 33, 17];
const average = oddAverages(ary);
console.log(average);


/**
 * include array even average.
 */

function evenAverage(array) {
    const even = [];
    for (const number of array) {
        if (number % 2 === 0) {
            even.push(number);
        }
    }
    let sum = 0;
    for (const number of even) {
        sum = sum + number;
    }
    const count = even.length;
    const avr = sum / count;
    return avr;
}
console.log(evenAverage([1, 2, 3, 4, 5, 6, 7]));

const Ary = [1, 2, 3, 4, 5, 6, 7];
const avg = evenAverage(Ary);
console.log(avg);