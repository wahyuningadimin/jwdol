var arr=[1, 2, 2, 2, 3, 3, 4, 5, 5];
function findDuplicate(arr){
    let countNum={};
    let duplicate=[];
    for(let i=0; i<arr.length; i++){
        let num= arr[i];
        if (countNum[num]){
            if (countNum[num] === 1){
                duplicate.push(num);
            }
            countNum[num]++;
        } else {
            countNum[num]= 1;
        }
        return duplicate;
        }
}
console.log(findDuplicate(arr));