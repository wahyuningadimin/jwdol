//capitalize the first letter of each word in a string
let str="hello world";
let result="";
for (let i=0; i<str.length; i++){
    if (i == 0 || str.charAt(i-1) == " "){  //ketika i-nya 0, atau kalo sblm karakternya ada spasi
        result += str.charAt(i).toUpperCase()
    } else {
        result += str.charAt(i).toLowerCase()
    }
}

console.log(result);