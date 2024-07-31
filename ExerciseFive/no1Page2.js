let mixedArray= ["3", 1, "string", null, false, undefined, 2]
function sumOfNumber(mixedArray){
    let sum=0;
    for(let i=0;i<mixedArray.length; i++){
        if (typeof mixedArray[i] === 'number' && !isNaN(mixedArray[i])){
            sum += mixedArray[i];
        }
    }
    return sum}

console.log(sumOfNumber(mixedArray));
