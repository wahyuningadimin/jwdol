const person= {
    name: "Andi",
    email: "andi@gmail.com",
    greet(){
        return "Hello, " + this.name
    }
}

const person1= {
    name: "Zara",
    email: "zara@gmail.com",
    greet(){
        return "Hello, " + this.name
    }
}

const person2= {
    name: "Lutfi",
    email: "lutfi@gmail.com",
    greet(){
        return "Hello, " + this.name
    }
}

// -----------------------------------------------------------------
//Daripada ngulang" ketik yg sama kayak yg diatas (cuma beda person1,2, isi nama, email), jdi bikin template seperti dibawah, pake class.
class Person{
    name;
    #email; //ini kalo ada # artinya private, gabisa diakses, bakal keluarnya undefined
    static species= "Human" //static
    constructor(nama, surel){
        this.name= nama;
        this.#email= surel; //ini kalo ada # artinya private, gabisa diakses, bakal keluarnya undefined
    }
    greet() {
        return "Hello, " + this.name;
    }
    getEmail() { //ini buat "unlock" si email yang di private, jadi bisa nongol lagi dterminal
        return this.#email;
    }
}

const personOne= new Person("Budi", "budi@gmail.com")
const personTwo= new Person("Clara", "clara@gmail.com")

console.log(personOne);
console.log(personOne.name);
console.log(personTwo.name);
console.log(personOne.getEmail());
console.log(personOne.getEmail());
console.log(personOne.greet());
console.log(personTwo.greet());

console.log(Person.species); //ini lgsg aksesnya ke class, jadinya panggil Person, instead of personOne/personTwo
console.log(Math.PI);



// class houseKeeper{
//     name;
//     age;
//     cleaningRepertoire;
//     constructor(name, age, cleaningRepertoire){
//         this.name= name;
//         this.age= age;
//         this.cleaningRepertoire= cleaningRepertoire;
//     }
//     function(){
//         return "cleaning in progress";
//     }
// }

// const houseKeeper1= new houseKeeper("Tom", "20", ["lobby", "lounge"]);
// const houseKeeper2= new houseKeeper("Jane", "18", ["bar", "pool"]);

// console.log(houseKeeper1);
// console.log(houseKeeper1.function());