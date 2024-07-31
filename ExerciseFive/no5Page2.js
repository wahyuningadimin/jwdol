var arr1=[1, 2, 3, 4, 5];
var arr2=[3, 4, 5, 6, 7];
function difference(arr1, arr2){
    var diff1= arr1.filter(x => !arr2.includes(x));
    var diff2= arr2.filter(x => !arr1.includes(x));
    var diff= diff1.concat(diff2);
    return diff;
}
console.log(difference(arr1, arr2));