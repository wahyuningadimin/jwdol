class Employee{
    constructor() {
        this.employeeName;
    }
    
    getEmployeeName(){
        return this.employeeName
    }
    
    setEmployeeName(name){
        if(typeof name !== 'string'){
            throw new Error("Name should be a string!")
        }
        this.employeeName= name
    }
}

const employee1= new Employee()
employee1.setEmployeeName("David")//ini kalo masukinnya angka, bakal error. krna diatas ada typeof name HARUS string
console.log(employee1.getEmployeeName())
