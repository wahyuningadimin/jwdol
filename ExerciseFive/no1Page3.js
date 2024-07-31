const arr= [1, [], undefined, {}, "string", {},[]];
function check(arr){
    let result=[];
    for(var i=0; i<arr.length; i++){
        if(typeof arr[i] === 'number' || typeof arr[i] === 'string' || typeof arr[i] === 'boolean' ||typeof arr[i] === 'null' ||typeof arr[i] === 'undefined'){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(check(arr))