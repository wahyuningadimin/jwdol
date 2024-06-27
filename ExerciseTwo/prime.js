//prime number or not
function check(number){
    let prime=true;
        if (number === 1){
            console.log("type number larger than 1")
        } else if (number >1) {
            for(let i=2; i<number; i++){
                if (number % 2 == 0){
                    prime=false;
                    break;
                }
            }
        if (prime){
            console.log("it's a prime number");
        } else {
            console.log("it's not a prime number")
        }
    }}


let num = 6 //input angka berapa aja
let divider = 0 

for (let i=1; i<=num; i++){
    if (num % i == 0) divider++;
}

console.log(divider == 2 ? `${num} is a prime number` : `${num} is not a prime number`);

//versi loop ddlm loop
for (let i=1; i<=10; i++){
    let divider=0
    for (let j=1; j<=i; j++){
        if (i % j == 0) divider++
    }
    console.log(divider == 2 ? `${i} is a prime number` : `${i} is not a prime number`);
}
