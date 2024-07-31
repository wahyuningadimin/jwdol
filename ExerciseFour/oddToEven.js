const allNumber=  [1,2,3,4,5,6,7,8,9,10];

function removeOdd(allNumber){
    const result= allNumber.filter((number)=> number % 2 === 0);
    return result;
}

console.log(removeOdd(allNumber));


