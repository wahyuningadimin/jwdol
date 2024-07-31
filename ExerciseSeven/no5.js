// Create a function to find a factorial number using recursion
var input=5;
function mulOf(input){
    if(input === 0){
        return 1;
    } else {
        return input * mulOf(input-1);}
}
console.log(mulOf(input));


//versi purwadhika (ini sama aja sih kayak yg diatas, versi simplied aja)
function factorial(n){
    return n == 0 ? 1 : n * factorial(n-1)
}
console.log(factorial(5));