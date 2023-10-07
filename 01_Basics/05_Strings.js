const name="nik"
const repoCount=10

// console.log(name+ repoCount + "Value"); do not write like these make code redable

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName=new String('hitesh-hc-com');
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('k'));

const newString= gameName.substring(0,4)
console.log(newString);

const anotherString=gameName.slice(-8,3)
console.log(anotherString);

const newStringOne="    niket    "
console.log(newStringOne)
console.log(newStringOne.trim())

const url="https://nikes.com/niketh%20patadiya"

console.log(url.replace('%20','-'));

console.log(url.includes('sundar'));

console.log(gameName.split('-'));