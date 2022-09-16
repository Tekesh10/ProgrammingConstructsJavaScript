console.log("Single digit Random Number is");
console.log(Math.floor(Math.random() * 10));
console.log("----------------------------------");

console.log("Single Dice roll outcome is")
console.log(1 + Math.floor(Math.random() * 6));
console.log("----------------------------------");

let dice1 = 1 + Math.floor(Math.random() * 6);
let dice2 = 1 + Math.floor(Math.random() * 6);
let result = dice1 + dice2;
console.log("double Dice roll outcome is");
console.log(dice1+" + "+dice2+" -> "+result);
console.log("----------------------------------");

sum = 0;
for (let index = 1; index < 6; index++) {
    random = Math.floor(Math.random() * 90) + 10;
    console.log(index + ". Double digit random Number is " + random);
    sum += random;
}
let average = sum / 5;
console.log("Total Sum of 5 Double digit random number is " + sum);
console.log("Total Average of 5 Double digit random number is " + average);