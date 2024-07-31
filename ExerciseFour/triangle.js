var height= 5;
function triangle(height){
    var result= "";
    var count=1;
    for(let i=1; i<=height; i++){
        for(let j=1; j<=i; j++){
            result += count.toString().padStart(2, '0')+ " ";
            count++;
        }
        // result += "\n";
    }
    return result;
}

console.log(triangle(height));