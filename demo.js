// let numbers = [-1, -2, -3, 4, 5, 6,0,0,0];

// let positiveresult = 0;
// let negativeresult = 0;
// let zeroes = 0;
// let sum=0


// for (let i = 0; i < numbers.length; ++i) {

//         sum += numbers[i];
// }
// for (let i = 0; i < numbers.length; ++i) {
//     if (numbers[i] < 0) {
//         positiveresult += numbers[i];
        
//     }
//    else if (numbers[i] > 0) {
//         negativeresult += numbers[i];
        
//     }
//     else if (numbers[i] = 0) {
//         zeroes += numbers[i];
        
//     }
// }
// let addPositive=(positiveresult/sum)
// let addNegative=(negativeresult/sum)
// let addZeros=(zeroes/sum)


// console.log("The Positive values are",addPositive)
// console.log("The negative values are",addNegative)
// console.log("The Zero values are",addZeros)

let numbers = [-1, -2, -3, 4, ,7,8,9,5, 6, 0, 0, 0];

let sum = numbers.reduce((a, b) => a + b);
let positiveRatio = numbers.filter(x => x > 0).length / sum;
let negativeRatio = numbers.filter(x => x < 0).length / sum;
let zeroRatio = numbers.filter(x => x === 0).length / sum;

console.log("The Positive values are", positiveRatio);
console.log("The negative values are", negativeRatio);
console.log("The Zero values are", zeroRatio);
