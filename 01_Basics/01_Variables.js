const accId=123450
let accEmail="Nikes@googgle.com"
var accpassword="789"
accCity="Jaipur"
let accState;

// accId=2 not allowed
/*
prefer not to use var becouse of issue in block scope and functional scope
*/
accEmail="hc@hc.com"
accpassword="212121"
accCity="bengal"
console.log(accId);

console.table([accId,accEmail,accpassword,accCity,accState])