const myMap= new Map()


//kiri itu KEY (bisa string, number, boolean, kosong pun bisa), kanan itu VALUE
myMap.set("David", "001")
myMap.set(10, "John")
myMap.set(true, "Benar")
myMap.set("", null)

console.log(myMap);

// ada built-in method juga
console.log(myMap.get(true))
console.log(myMap.keys())