var nums=[4,1,2,1,2]
function findNumber(nums){
    var res= {};
    for (let i=0; i< nums.length; i++){
        res= res ^ nums[i]
    }
    return res;
}
    
    
console.log(findNumber(nums));