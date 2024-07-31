// Create a function that can accept input as an array of objects and switch all values into property and
// property into value
// var input= [{ name: 'David', age: '20' }]
// function swtch(input){
//     let res= [];
//     input.forEach(obj => {
//         let switchObj= {};
//         for (let key in obj){
//             switchObj[obj[key]]= key;
//         }
//         res.push(switchObj);
// })
//     return res;
// }


// console.log(swtch(input))


//versi Purwadhika versi array
// var arr= [{ name: 'David', age: '20' }]
// function switchData(arr){
//     let res= {}; //object kosong
//     for (let key in arr[0]) { //asumsi itu index-nya cma ada 1 (brrti kan mulai dari 0)
//         //kalo for...in loop cma bisa akses si key
//         res[arr[0][key]] = key
//         // res.David = "name"
//     } 

//     return res
// }
// console.log(switchData(arr));


//versi Purwadhika tapi di simplified pake OBJECT
var obj= { name: 'David', age: '20' }
function swtchData(obj){
    let res= {}; //object kosong
    for (let key in obj) { 
        //kalo for...in loop cma bisa akses si key
        res[obj[key]] = key
        // res.David = "name"
    } 

    return [res] // ini dikasi [] krna mau outputnya dlm bntuk array
}
console.log(swtchData(obj));