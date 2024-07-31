//linear search
function linearSearch(arr, x){
    for(let i=0; i<arr.length; i++){
        if (arr[i] == x) return i
    }
    return -1//artinya gaada.
}

console.log(linearSearch([2, 10, 20, 3], 20))//agak mirip .indexOf, jdi nnti keluarnya tuh 20 ada di index k 2.


//binary search
function binarySearch(arr, l, r, x){
    if(r >= l){
        let mid= l + Math.floor((r-l)/2); //cari middle, atau median-nya aka angka tengah

        if (arr[mid] == x) return mid; //kalo yg dicari tuh uda bener, yauda langsung balik

        if (arr[mid] > x) return binarySearch(arr, l, mid-1, x);//kalo arr[mid] > x, brrti right-1
        
        return binarySearch(arr, mid+1, r, x)//kalo arr[mid] < x, brrti left+1
    }
    return -1
}

let arr= [2, 3, 4, 10, 40]
let x= 10
console.log(binarySearch(arr, 0, arr.length-1, x))