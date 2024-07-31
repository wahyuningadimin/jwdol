//function declaration
function sum(a, b){
    return a + b;
}
console.log(sum(10, 2));


//function expression
const square= function(number){
    return number * number
}
console.log(square(10));

//default parameter
function plus(a, b=0){
    return a + b;
}
console.log(plus(10)); //karena b uda default jadi 0, jadi bisa input si a aja. tapi kalo input (plus(10, 2)), defaultnya jadi angus, jadinya 12.


//rest parameter
function rest(a, b, ...more){
    console.log(more);
    return a + b;
}
console.log(rest(10, 2, 1, 2, 3, 4, 5)); //ini cuma ladenin a,b. selebihnya nongol di array krna ada console.log(more). kalo ga console.log(more) ya yauda ga diladenin.


//nested function
function getMessage(firstName){
    function sayHello(){
        return "Hello " + firstName + ".";
    }
    function welcomeMessage(){
        return "Welcome to Purwadhika!";
    }
    return sayHello() + " " + welcomeMessage(); 
}

console.log(getMessage("Uni")); //jangan lupa inputnya kalo huruf tuh pake string


//closure
function greeting(name){
    const defaultMessage= "Hello ";
    return function(){
        return defaultMessage + name;
    }
}
const greetingDavid= greeting("David");
console.log(greetingDavid()); //simplenya console.log(greeting("David")())
//ini dikasih () buat manggil function yg ddlm (yg return defaultMessage+name)
//function yg mengakses parameter dan variable luar.


//currying
// function multiplier(factor, number){
//     return number * factor;
// }
// console.log(multiplier(5, 3));
// console.log(multiplier(10, 3));

function multiplier(factor){
    return function(number){
        return number*factor;
    }
}
const mul3= multiplier(3); //angka brpapun yg mau dikali 3, tnggal panggil mul3
const mul5= multiplier(5); //angka brpapun yg mau dikali 5, tnggal panggil mul5
console.log(mul3(5));
console.log(mul5(6));
//mengubah argument yg tadinya 1, jadi dipecah"


//Recursive
function countDown(fromNumber){
    console.log(fromNumber);
    let nextNumber=fromNumber-1;
    if(nextNumber > 0){
        countDown(nextNumber);
    }
}
countDown(3);


//arrow function
const added= (a,b)=> a+b
console.log(added(10,3));

const myFunc= (name)=> {
    return()=>{
        return "Hello" + name
    }
}
console.log(myFunc("Budi")())



const number= 10* "1" // NaN
console.log(isNaN(number))