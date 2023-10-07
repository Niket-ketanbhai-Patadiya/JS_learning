let score="33abc"
/*
similar;y check for score =null,undefined,boolean values
*/
console.log(typeof score);
console.log(typeof (score));

let valueInnumber=Number(score)
console.log(typeof valueInnumber);
console.log(valueInnumber);

// "33" => 33
// "33abc"=>Nan
// true=1;false=0

let isloggedIn="Niket"
let booleanIsloggedIn=Boolean(isloggedIn)
console.log(booleanIsloggedIn);

// 1=>true;0+=>false
// ""=>false
// "hitesh"=>true

let someNum=33
let stringNum=String(someNum)

console.log(stringNum);
console.log(typeof stringNum);