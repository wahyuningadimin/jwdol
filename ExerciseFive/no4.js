var arr1=[1, 2, 3]
var arr2=[3, 2, 1]
function addArrays(arr1, arr2) {
    let result = [];
    for(let i=0; i<arr1.length; i++) {
        result.push(arr1[i] + arr2[i]);
    }
    return result;
}
console.log(addArrays(arr1, arr2));


//versi purwadhika
function calculate(arr1, arr2){
    return arr1.map((val, idx) => val + arr2[idx])
}
console.log(calculate(arr1, arr2))