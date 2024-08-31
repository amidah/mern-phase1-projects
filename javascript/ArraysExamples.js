let myArray = [1, 2, 3, 4, 5];
console.log("My Array: ", myArray);
console.log("Array Length: ", myArray.length);

myArray.push(6, 7, 9);
console.log("My Array after push: ", myArray);
console.log("My Array Length: ", myArray.length);

let poppedElement = myArray.pop();
console.log("Popped Element: ", poppedElement);
console.log("My Array after pop: ", myArray);
console.log("My Array Length: ", myArray.length);

let shiftedElement = myArray.shift();
console.log("Shifted ELement: ", shiftedElement);
console.log("My Array after shift: ", myArray);
console.log("My Array Length: ", myArray.length);

myArray.unshift(0, 1);
console.log("My Array after unshift: ", myArray);
console.log("My Array Length: ", myArray.length);

let secondArray = [8, 9, 10];
console.log("My Array after concat: ", myArray.concat(secondArray));
console.log("My Array Length: ", myArray.length);

let joinedString = myArray.join(" | ");
console.log("Joined String: " + joinedString);

let slicedArray = myArray.slice(2, 6);
console.log("Sliced Array: " + slicedArray);
console.log("My Array after slice: ", myArray);
console.log("My Array Length: ", myArray.length);

let splicedArray = myArray.splice(2, 3, "a", "b", "c");
console.log("Spliced Array: " + splicedArray);
console.log("My Array after splice: ", myArray);
console.log("My Array Length: ", myArray.length);

// iterate through the arrays
console.log("For Loop Iteration")
for(let i = 0; i < myArray.length; i++){
    console.log(myArray[i]);
}

console.log("For Each Iteration")
myArray.forEach(element => console.log(element));

let mySplicedArray = myArray.splice(2, 3, 2, 3, 4);
console.log(myArray);

let squaredValueArr = myArray.map(val => val * val);
console.log("Squared Value Array: ", squaredValueArr);

let filteredEvenValuesArray = myArray.filter(num => num != 0 && num % 2 === 0);
console.log("Filtered Even Values Array: " + filteredEvenValuesArray);

let sum = myArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum :" + sum);












