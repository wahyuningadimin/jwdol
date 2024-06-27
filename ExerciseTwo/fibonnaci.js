//fibonnaci
let number=15;
let a=0;
let b=1;
for(let i=1; i<number; i++){
    let nextNumber= a + b;
    a=b;
    b=nextNumber;
}
console.log(b);