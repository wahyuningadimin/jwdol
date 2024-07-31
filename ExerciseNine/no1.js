// var input= "AB"
// function titleToNumber(input){
//     let res=0;
//     for(let i=0; i<input.length; i++){
//         let char= input.charAt(i);
//         let num= char.charCodeAt(0) - 'A'.charCodeAt(0)+1;
//         res= res*26 + num;
//     }
//     return res;
// }

// console.log(titleToNumber(input));


var input= "AAA"
//ABC
// A -> (0*26) + (65-64), B->(1*26) + (66-64), C->(28*26) +(67-64)
function titleToNumber(input){
    let sum=0;
    for(let i=0; i<input.length; i++){
        sum= (sum * 26) + (input.charCodeAt(i)-64)
    }
    return sum;
}

console.log(titleToNumber(input));



