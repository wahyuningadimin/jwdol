let arr= [12, 5, 23, 18, 4, 45, 32];

//with sort
function minMax(arr) {
    const sortArr= (arr.sort((a, b)=> a-b));
    const min= sortArr[0];
    const max= sortArr[sortArr.length-1];
    const total= sortArr.reduce((a, b)=> a+b);
    const avrg= total/arr.length;
    return {
        min: min, 
        max: max, 
        avrg: avrg.toFixed(2)
}};

console.log(minMax(arr))


//without sort, jadi looping (versi purwadhika)
function minMax2(arr){
    let lowest= arr[0];
    let highest= arr[0];
    const average= (arr.reduce((a,b) => a+b)/ arr.length).toFixed(2);
    for(var i=1; i < arr.length; i++){
        if(arr[i] <lowest) lowest= arr[i];
        if(arr[i] >highest) highest= arr[i];
    }
    return {lowest, highest, average}
}

console.log(minMax2(arr));


//versi terSIMPLE (versi purwadhika)
function minMax3(arr){
    const minLow= Math.min(...arr);
    const maxHigh= Math.max(...arr);
    const avrage= (arr.reduce((a,b) => a+b)/ arr.length).toFixed(2);
    return {minLow, maxHigh, avrage}
}

console.log(minMax3(arr));