// function constructor
function Employee(name, designation, yearOfBirth){
    this.name = name;
    this.designation = designation;
    this.yearOfBirth = yearOfBirth;
}

Employee.prototype.calculateAge = function(){
    console.log("The current age is: " + (2024 - this.yearOfBirth));
}

console.log(Employee.prototype);

// Lets create employee objects
let emp1 = new Employee('Alex', 'Developer', 1995);
console.log("Employee object: ", emp1);
emp1.calculateAge();

let emp2 = new Employee('John', 'Tester', 1992);
console.log("Employee object: ", emp2);
emp2.calculateAge();

let emp3 = new Employee('Smith', 'Product Owner', 1990);
console.log("Employee object: ", emp3);
emp3.calculateAge();

