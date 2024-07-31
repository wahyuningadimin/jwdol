let arr= [5, 3, 1, 7, 2, 6];
function secondNumber(arr) {
    const sortArr= arr.sort((a, b)=> a-b); // [1, 2, 3, 5, 6, 7]
    const second= sortArr[1];
    return second;
}

console.log(secondNumber(arr));


//kalo pake function yang diatas kan kebetulan index[1]=2, nah ini contoh dibawah kalo index[1]=1
let arr2= [5, 3, 1, 7, 2, 6, 1, 1, 1, 1];
function secondSmall(arr2){
    arr2.sort((a, b) => a-b) // [1, 1, 1, 1, 1, 2, 3, 5, 6, 7]
    let i=0
    while (i <arr2.length){
        if(arr[i] > arr[0]){
            break
        }
        i++
    }
    return arr[i];
}

console.log(secondSmall(arr2));