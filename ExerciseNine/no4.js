var n= 5;
function climbStairs(n){
    const ways=[1, 2]//array index 0,1
    for(let i=2; i<=n; i++){ //i=2, karena array index start from 0
        ways[i]= ways[i-1] + ways[i-2];
    }
    return ways[n-1];
}

console.log(climbStairs(n))



// versi Purwa ini sebenerny Fibonnaci
// function fib(n){
//     const res=[0, 1]
//     for(let i=0; i<n;i++){
//         res.push(res[i] + res[i+1])
//     }
//     return res
// }
// console.log(fib(5))