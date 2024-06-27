let arr= ["a", "b", "c", "d", "e"]
let arr2= new Array("a", "b", "c", "d", "e")

// console.log(arr);
// console.log(arr2);

// console.log(arr[0]);
// console.log(arr[3]);

// for (let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }


let num= [1, 2, 3, 4, 5];

// num.push(6) //menambahkan value dibelakang
// num.pop() //menghapus value dibelakang

num.shift() //menghapus value didepan
num.unshift(1) //menambah value didepan

num.splice(1, 3) //1=mulai dari index 1 (2), 3=hapus 3 item (2,3,4) (BASICALLY HAPUS VALUE DITENGAH)
num.splice(1, 0, 2,3,4) //1=mulai dari index 1 (2), 0=gaada item yang mau dihapus, 2,3,4,=item yg kita balikin

num.sort((a, b)=> a-b) //ascending (dari kecil ke besar)
num.sort((a, b)=> b-a) //descending (dari besar ke kecil)

num.reverse //dibalik aslinya[1,2,3,4,5] jadinya [5,4,3,2,1]

console.log(num);


// const n=[5, 4, 3, 2, 1]
// n.sort(); //ini quick sort, JADI INI LEBIH SUITABLE BUAT STRING, liat contoh yg const nu, kalo case-nya angkanya ada ratusan.
// console.log(n);

// const nu=[23, 4, 101, 3]
// nu.sort() //ini kalo gapake (a, b)=> a-b, dia sortnya dari angka pertamanya, jadinya 101, 23, 3, 4 (kayak a,b,c,d). JADI INI LEBIH SUITABLE BUAT STRING
// console.log(nu);

// num.forEach((item) =>{ //kalo forEach, GA balikin ARRAY BARU
//     console.log(item);
// })

// num.map((item) =>{ //kalo map, BALIKIN ARRAY BARU
//     console.log(item);
// })

// let newNum= num.map((item) => item +5) //kalo bikin LOOP gini CUMA BISA PAKE .map, karena bisa balik array, kalo .forEach hasilnya pasti UNDEFINED
// console.log(newNum)

let multiplyNum= num.reduce((a, b) => a*b) //ini dikali semua isi arraynya
console.log(multiplyNum);

let sumNum= num.reduce((a, b) => a+b) //di tambah semua isi arraynya
console.log(sumNum);


//for ... of loop
const fruits=["apple", "banana", "melon"];
for(let fruit of fruits){
    console.log(fruit);
}

const items=["car", "key", "book"];
for(let item of items){
    console.log(item);
}