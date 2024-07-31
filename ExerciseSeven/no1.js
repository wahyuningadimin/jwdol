// // Create a function to check if two objects are equal
// const a= {a: 1};
// const b= {a: 2};
// function check(a,b){
//     if(a === null || a === undefined || b === null || b === undefined){
//         return a === b
//     }

//     const a1= Object.keys(a);
//     const b2= Object.keys(b);
//     if(a1.length !== b2.length){
//         return false;
//     } 

//     for (let key of a1){
//         const val1= a[key];
//         const val2= b[key];

//         if(typeof val1 === 'object' && typeof val2 === 'object'){
//             if(!isEqual(a, b)){
//                 return false;
//             }
//         } else {
//             if (val1 !== val2){
//                 return false;
//     }
//     }    
// }
// return true;
// }
// console.log(check(a,b))


//versi Purwa
// function checkObj(obj1, obj2){
//     return obj1.a === obj2.a;
// }

// console.log(checkObj({ a: 2 }, { a: 1}));
// console.log(checkObj({ a: "Hello" }, { a: 1}));
// console.log(checkObj({ a: 1 }, { a: 1}));


//object kalopun isinya sama, tetep gabisa dibandingin, makanya kalo d console.log, keluarnya pasti FALSE
const person1= {
    name: "Andi",
    age: 20
}

const person2= {
    name: "Andi",
    age: 20
}
console.log(person1 === person2)


//kecuali kalo dibikin kayak gini, person4= person3, krna heap-nya sama.
const person3= {
    name: "Andi",
    age: 20
}

const person4= person3;
console.log(person3 === person4)

//kalo ini
const personOld= {
    name: "Andi",
    age: 20
}
const personNew= personOld
personOld.name= "Budi"
console.log(personNew);


//kalo ini, name2 gabakal ikut keganti kalopun name1-nya dganti
let name1= "David"
let name2= name1
name1= "John"
console.log(name2);