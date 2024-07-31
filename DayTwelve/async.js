// console.log("Task 1");
// setTimeout(() => console.log("Task 2"), 3000)//ini pending 3detik
// console.log("Task 3");//ini k-consolelog bareng ama task1, jadi ga nunggu task2

//promise itu async, jadi pasti jalannya diakhir
const tryPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = false
        if (success){
            resolve("Success")
        } else {
            reject("Error")
        }
    }, 2000)
})

//kalo gapake async await, pasti kluarnya task1, error, finally done, task 2
//async await itu buat bkin si promise berjalan synchron, jadi sesuai urutan. task1, error, finally done, task2
const myFunc = async() => {
    console.log("Task 1")
    await tryPromise
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
        .finally(() => console.log("finally done"))
    console.log("Task 2")
}
myFunc()

//try catch
async function myFunc2() {
    try {
        const res= await tryPromise
        console.log(res)
        console.log("Hello World")
    } catch (err) {
        console.log(err)
    }
}
// myFunc2()//Error krna di tryPromise itu outcomenya error, jadi dia catch error, jadi lgsg console.log(Error)

// const fetchData= async () => {
//     try {
//         const response= await fetch('https://jsonplaceholder.typicode.com/users')
//         if (response.ok == false) throw "error fetch data" //ini kalo error, contoh itu endpoint link-nya harusnya dblkang tuh users bukan user, 
//         //nah, ini throw bakal ditangkep ama catch, jadi keluarnya error fetch data
//         //tapi kalo yg salah itu link-nya, bukan end-pointnya, nnti keluarnya ERROR
//         // console.log(response.ok) //itu .ok-nya boolean buat ngecek uda ga ambil atau blm datanya dari API(url yg jsonplaceholder)
//         const users= await response.json() //harus di await dulu, kalo ga pending, krna users-nya blm kbaca(?)
//         console.log(users)
//     } catch (err) {
//         console.log(err);
//     }
// }
// fetchData()

// module.exports= { fetchData }