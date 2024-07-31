// const car={
//     brand: "BMW",
//     model: "M135i xDrive",
//     price: 800000000
// }

// console.log(car);
// console.log(car.brand);
// console.log(car['model']);


const person={
    name: "Budi",
    email: "budi@gmail.com",
    address: {
        city: "Jakarta",
        country: "Indonesia"
    },
    greet(){
        console.log("Hello")
    }
}

// console.log(person.address.city);
// console.log(person["address"]["country"]);
// person.greet();

//edit value object
person.name= "Andi"

//add value
person.hobby= "Coding"

//delete value
delete person.hobby

//console.log(person)

// console.log(person.name + ". " + person.address.city + ", " + person.address.country)

// //optional chaining
// console.log(person.address?.city) 
//ini posisinya kalo address di block ya. 
//jadi itu ditaro "?"" setelah address, buat ngcheck
//Jadi dicheck dulu ddlm person ada address ga? karena dblock, jadinya gaada, jadi uda ga dcheck lagi city-nya, jadi kalo d console.log keluarnya undefined

console.log(Object.keys(person))

// for(let key in person){
//     console.log(key)
//     console.log(person[key])
// }


// //object destructuring
// const { name, email}= person
// console.log(name, email);


//spread operator
const objectOne= {
    name: "David",
};
const objectTwo= {
    email: "david@gmail.com"
}
const finalObject= {...objectOne, ...objectTwo};
console.log(finalObject);