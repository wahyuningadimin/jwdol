let age= 10;
if (age >= 17){
    console.log ("you can now create an ID card.")
} else {
    console.log ("you are not old enough to create an ID card.")
};


let grade= "A";
if (grade === "A"){
    console.log("Excellent Result!")
} else if (grade === "B"){
    console.log ("Great Result")
} else if (grade === "C"){
    console.log("Average Result")
} else {
    console.log("Invalid Result")
};


switch (grade) {
    case "A":
        console.log("Excellent Result!");
        break;
    case "B":
        console.log("Great Result");
        break;
    case "C":
        console.log("Average Result");
        break;
    default:
        console.log("Invalid Result");
        break;
}



let car= "MERCEDES";
if (car =="BMW" || car =="TOYOTA"){
    console.log("This car is awesome")
};

const str="Javascript"
//ternary
console.log(str == "Javascript" ? "Javascript" : "not Javascript");

//ini versi IF aja, gaada ELSE
str == "Javascript" && console.log("Javascript");


var guest="Brad";
console.log(guest == "Angela" ? "Welcome" : "What's your name?");