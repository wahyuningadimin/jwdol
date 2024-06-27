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