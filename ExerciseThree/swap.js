const str="The QuiCk BrOwN Fox";
let result="";
for (let i=0; i<str.length; i++){
    let char= str.charAt(i);
    if (char === char.toUpperCase()){ 
        result += char.toLowerCase();
 } else {
        result += char.toUpperCase();
 }
}

console.log(result);