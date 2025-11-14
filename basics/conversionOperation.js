let score = "33"
let age = "22abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
let ageInNumber = Number(age)

console.log(typeof valueInNumber);

console.log(valueInNumber);
console.log(ageInNumber); // Here we have to check if the number is number or not with if(ageInNumber != NaN && ageInNumber != null && ageInNumber != undefined)

// "33" => 33
// "33abc" => NaN
// true =>1

let isLoggedIn = "kaushik"

let booleanLoggedIn = Boolean(isLoggedIn)
console.log(booleanLoggedIn);

// 1 => true
// "" => false
// "kd" => true

let aNumber = 33

let stringToNumber = String(aNumber)
console.log(stringToNumber);
