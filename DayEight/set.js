const fruits= ["Apple", "Banana", "Melon", "Apple"]

const newFruits= new Set(fruits) //jadi set ini bakal remove duplicate, itu contohnya ada 2 apple, tapi pas d console.log cuma nongol 1 apple
newFruits.add("Lemon")
newFruits.add("Banana")

// // newFruits.clear() //kalo clear itu, smuanya kehapus
// newFruits.delete("Apple")

console.log(newFruits.has("Apple"))

// console.log(newFruits.entries())

console.log(newFruits);

// newFruits.forEach(item) => {
//     console.log(item);
// }