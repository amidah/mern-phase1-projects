// Conditional Statements  - if, else, switch

let condition = true;

if(condition){
    console.log("The condition is true");
}
else{
    console.log("The condition is false");
}

let value = 2;

if(value === 1){
    console.log("The value is 1.");
}
else if(value === 2){
    console.log("The value is 2.");
}
else{
    console.log("The value is neither 1 nor 2.");
}

let fruit = "apple";
switch(fruit){
   case "banana": 
    console.log("It's a banana");
    break;
   case "apple": 
    console.log("It's an apple");
    break;
   default:
    console.log("It's something else");
}

// Looping- for, while, do.....while, for....in, for...of

console.log("For Loop...")
for(let i = 1; i <= 5; i++){
    console.log(i);
}

console.log("While Loop...")
let counter = 3;
while(counter > 0){
    console.log(counter);
    counter--;
}

console.log("Do...While Loop...")
let doWhileCounter = 2;

do{
    console.log(doWhileCounter);
    doWhileCounter--;
}
while(doWhileCounter > 0);

console.log("For...In Loop- Object Iteration");
let person = {
    name: "John",
    age: 30,
    job: "Developer"
};

for(let key in person){
    console.log(key + " : " + person[key]);
}

console.log("For...Of Loop...");

let numbers = [1, 2, 3, 4, 5];
for(let num of numbers){
    console.log(num);
}

// Break and Continue Statments
console.log("Break Statement:")
for (let i = 1; i <= 5; i++){
    if(i === 3){
        break;
    }
    console.log(i);
}

console.log("Continue Statement:")
for (let i = 1; i <= 5; i++){
    if(i === 3){
        continue;
    }
    console.log(i);
}