// let a=1
// var b=2


// // function sum(num1, num2){
// //     let a=10
// //     var b=20
// //     return num1+num2
// // }


// function sum(num1, num2){
//     a=10
//     b=20
//     return num1+num2
// }


// // if(true)
// // for(let i=0; i<3; i++){
// //     let a=10
// //     var b=20
// // }

// console.log(a)
// console.log(b)

// //ddlm function bisa akses variable global, 
// //tapi kalo diluar function, gabisa akses variable dlm function
// //kalo ddlm scope {}, let pasti isinya gaakan berubah. KECUALI, gapake let(dan gapake var)

// // let i
// // for (i=0; i<10; i++){
// //     a=10
// // }
// // console.log(i) //i=10, knpa bukan 9? krna paling mentoknya kan 10, baru uda gabisa di i++ lgi
// // console.log(i++)//i=10, dia sbnernya berjalan lgi nambah jadi 11, tapi itu krna i yg ddpan, jadinya 10, kalo abis ini lgsg d console.log(i) kluarnya 11.
// // console.log(i)
// // console.log(++i)
// // //kcuali console.log(++1) psti lgsg uda dtambah 1.


// const num= new Number("10")
// console.log(num === 10)//false krna itu data typenya beda, new Number itu object. kalo new-nya di hapus baru true.

// const num2= Number("10.33")
// const num3= parseInt("10.33")
// const num4= "10" * 1
// console.log(num2);//Number ama parseFloat sama sih, gaada di bulatin k nearest number
// console.log(num3);//kalo parseInt dibulatkan nomornya, jadi dari 10.33, jadi 10
// console.log(num2 === num3)

// let num=10
// num += true
// console.log(num); //11 ,krna true secara default itu angka 1


// const count= parseInt("135", 5) //by default radix-nya 10, cuma ini coba input 5.
// // 5 -> (1 * 5^2 + 3 *5^1 + 5 * 5^0)


// const fruits= ["apple", "banana", "mango", "melon", "lemon"]
// for(let abc of fruits){
//     console.log(abc);
// }

// //array
// const num= [1, 2, 3]
// //built-in method
// num.push(4) // [1, 2, 3, 4]
// num.reverse()// [4, 3, 2, 1]
// num.sort()// [1, 2, 3, 4]

// num.concat([5, 6, 7])//gabisa
// const newNum= num.concat([5, 6, 7])//kalo ini baru bisa, jadinya [1, 2, 3, 4, 5, 6, 7]

// console.log(num)
// console.log(newNum)

// console.log(typeof NaN)//number
// console.log(1 / 0)//infinity
// console.log(-1 / 0)//-infinity
// console.log(typeof Infinity)//number
// console.log(Boolean(0.5))//true (boolean, selama bukan 0 ya true)


const arr= [
    "Apple",
    ["Banana", "Kiwi"],
    {fruit1: "Melon", fruit2: "Lemon"},
    () => ["Mango"]
]
console.log(arr[1][0])//Banana
console.log(arr[2].fruit1)//Melon
console.log(arr[3]()[0])//Mango


let x = () => ["Mango"]
console.log(x()[0])//Mango


// console.log(sum(10,20))
// function sum(a,b){
//     return a+b
// }//kalo function, console.lognya mau diatas atw dibawah pun bisa



// const sum2= (a,b) => a+b//kalo kayak gini, consolelog-nya harus dbawahnya
// console.log(sum2(10,20))