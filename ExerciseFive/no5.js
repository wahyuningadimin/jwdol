let arr= [1, 2, 3, 4];
let n=7;
function addNumber(arr, n){
    if(!arr.includes(n)){ // ATAU if(arr.includes(n) == false) arr.push(n)
        arr.push(n)
    }
    return arr;
}
console.log(addNumber(arr, n));



