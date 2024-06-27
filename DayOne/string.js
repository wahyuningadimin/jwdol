const str= "Hello Purwadhika";
const strUpper= str.toUpperCase();
const strLower= str.toLowerCase();
const strChange= str.replace("e", "a");

console.log(strUpper);
console.log(strLower);
console.log(strChange);

console.log("apel merah".replaceAll("a", "i").toUpperCase());
console.log(str.charAt(4));
console.log("Hello".concat(" World"));


let name= "David";
let message= `Hello, ${name}`; 
console.log(message);