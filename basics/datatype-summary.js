// Primitive datatype
// 7 types -- String , Number,Boolean,null,undefined,Symbol,BigInt

//Reference Type
// Array, Objects, Functions

const roll = 100
const value = 10.33

const name = "Kaushik"
const isStudent = false
const haveMoney = null
let userId;

const id = Symbol("123")
const anotherId = Symbol("123")
const bigNumber = 345215687899411n

const empName= ["Sandeep","Gaurav","Harshita"]
let newObj = {
    name:'KD',
    priority:'high',
    facevalue:10
}

let myFunc = function(){
    console.log("Hello worlds");
}

console.log(typeof userId);
console.log(anotherId, id);
console.log(id === anotherId);
console.log(typeof bigNumber);
console.log(typeof empName);
console.log(typeof newObj);
console.log(typeof myFunc);





