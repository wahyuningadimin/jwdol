// const test= new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         const success = false;
//         if(success){
//             resolve("success");
//         } else{
//             reject("error");
//         }
//     }, 2000)
// });

const person = require("./json");

// test
// .then((res)=> console.log(res))
// .catch((err)=> console.log(err))
// .finally(()=> console.log("finally done"))

// const fetchData= async() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) =>{
//         return response.json()
//     })
//     .then((users) =>{
//         console.log(users)
//     })
//     .catch((error)=>{
//         console.log(error)
//     })
//     .finally(()=>{
//         console.log("always running!")
//     })
// }

// fetchData()

// const test= new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         const success = false;
//         if(success){
//             resolve("success");
//         } else{
//             reject("error");
//         }
//     }, 2000)
// });

// //without async await
// const asyncAwait= () => {
//     console.log("satu");
//     test
//         .then((res)=> console.log(res))
//         .catch((err)=> console.log(err))
//         .finally(()=> console.log("finally done"))
//     console.log("dua")
// };
// asyncAwait();

// //with async await
// const asyncAwait= async() => {
//     console.log("satu");
//     await test
//         .then((res)=> console.log(res))
//         .catch((err)=> console.log(err))
//         .finally(()=> console.log("finally done"))
//     console.log("dua")
// };
// asyncAwait();


// //error handling
// const tryAndCatch= async() =>{
//     try {
//         const result= await test;
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// };
// tryAndCatch();


// //error handling throw
// const tryThrow= () =>{
//     try{
//         let isFalse=true;
//         if(isFalse){
//             throw "there is an Error!";
//         }
//         console.log("Success");
//     } catch(err){
//         console.log(err)
//     }
// }
// tryThrow();

const tryThrow= () =>{
    let isFalse= true;
    if(isFalse){
        throw new Error ("there is an Error!");
    }
    console.log("Success");
} 
tryThrow();

module.exports= tryThrow