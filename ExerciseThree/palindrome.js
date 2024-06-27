// // palindrome
let str= "madam";
let reverseStr= "";
for(let i=str.length - 1; i >=0; i--){
    // console.log(str.charAt(i));
    reverseStr += str.charAt(i)
}
// console.log(str)
// console.log(reverseStr)
console.log(str == reverseStr ? "palindrome" : "not palindrome")
