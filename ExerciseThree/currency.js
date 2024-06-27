//number to currency
const number= 1000;
console.log(new Intl.NumberFormat('en-US', {
    style: "currency", 
    currency: "IDR"}).format(number));

//OR
let num=1234;
let strNum= num.toString() // "1234"
let rupiah= "";
for (let i=strNum.length-1; i>=0; i--){
    rupiah= strNum.charAt(i) + rupiah;

    if (rupiah.length % 3 == 0){
        rupiah= "." + rupiah
    }
}
console.log(rupiah)