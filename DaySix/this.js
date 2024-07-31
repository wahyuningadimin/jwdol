const person={
    firstName: "Ariana",
    lastName: "Grande",
    greet(){
        console.log(`Hello ${this.lastName}`);
    }
};

person.greet();