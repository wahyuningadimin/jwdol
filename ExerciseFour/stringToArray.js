var hello="Hello World";
function separate(hello){
    var split= hello.split(" ");
    var changed= new Array(split);
    return changed
}
console.log(separate(hello))