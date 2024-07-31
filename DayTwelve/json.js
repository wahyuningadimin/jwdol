const person= {
    name: "David",
    age: 30
}

const jsonPerson = JSON.stringify(person);// jadi string, jadinya key-nya ada ""
console.log(person);
console.log(jsonPerson);
console.log(JSON.parse(jsonPerson))//ini dibalikin lagi k semula


// const person1= {
//     name: "David",
//     age: 30,
// }
// const person2= {
//     name: "David",
//     age: 30,
// }
// console.log(person1 == person2)//false, krna object gabisa dicompare
// console.log(JSON.stringify(person1) == JSON.stringify(person2))//true, krna objectnya uda djadiin string. ini krna isi datanya sama, kalo beda ya false juga


// const arr1=[1, 2, 3]
// const arr2=[1, 2, 3]
// console.log(arr1 == arr2)//false, krna array gabisa dicompare
// console.log(JSON.stringify(arr1) == JSON.stringify(arr2))//true, krna uda djadiin string


module.exports= person //ini mau d export filenya k index.js