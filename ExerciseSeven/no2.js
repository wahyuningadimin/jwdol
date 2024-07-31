// Create a function to get the intersection of two objects
var obj1= {a: 1, b: 2};
var obj2= {a: 1, c: 3};
function intersection(obj1, obj2){
    let result= {};

    for(let key in obj1){
        if(obj1[key] === obj2[key]){ //ini looping, kalo sama ya masuk ke result.
            result[key]= obj1[key]; //jadi result[key] itu adalah a, sedangkan obj1[key] itu adalah 1
        }
    }
    return result;
}

console.log(intersection(obj1, obj2));