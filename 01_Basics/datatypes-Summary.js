// Primitive
// 7 Types: String,number,boolean,null,undefined,BigInt,Symbol

let score=100
let scoreValue=100.3

const isLoggedIn=true
const outsideTemp=null
let userEmail;

const id=Symbol('123');
const anotherId=Symbol('123')

console.log(id === anotherId);

const bigNumber=165465489797254654657897891n;
console.log(bigNumber);

// Reference or non-primitive
// aa badha no datatype is function & function nu datatype is object function
// array , objects ,functions

const heros=["shakyiman","nagraaj","doga"];

let myObj = {
    name:"hitesh",
    age:22
}

const myFunction=function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);
console.log(typeof myFunction); //it will return function actually it is object function