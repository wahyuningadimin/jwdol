let arr= ["apple", "banana", "cherry", "date"];

function arrToString(arr){
    if(arr.length === 0){
        return "";
    } else if(arr.length === 1){
        return arr[0];
    } else{
        const lastFruit= arr[arr.length-1];
        const otherFruit= arr.slice(0, arr.length-1).join(", ");
        return `${otherFruit}, and ${lastFruit}`;
    }
}


console.log(arrToString(arr)); 


//versi purwadhika JAUH LEBIH SIMPLE
function concat(arr){
    const removeItem= arr.pop()
    return arr.join(", ") + ", and " + removeItem
}

console.log(concat(arr));