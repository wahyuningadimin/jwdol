function sum(a, b, callback){
   callback(a+b)
}

function displayer(value){
    console.log(value);
}

sum(10, 5, displayer)


// let result;
// function greet(str){
//     result= str;
// }
// function hello(){
//     greet("hello");
// }
// function arigatou(){
//     greet("arigatou");
// }

// arigatou()
// hello()
// console.log(result)


// function calculator(a,b){
//     return a+b;
// }
// function displayer(something){
//     console.log(something);
// }
// let result=calculator(5,5);
// displayer(result)


// function calculator(a,b){
//     let result=a+b;
//     displayer(result);
// }
// function displayer(something){
//     console.log(something);
// }
// calculator(5,5)