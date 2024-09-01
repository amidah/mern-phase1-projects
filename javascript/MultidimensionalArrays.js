// Two dimensional array

let myNumbers = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15]];

console.log(myNumbers.length)
console.log(myNumbers);

//myNumbers.forEach(element => console.log(element));

for(let i = 0; i < myNumbers.length; i++){
 console.log("Array at index : ", i, " is ", myNumbers[i]);  
 for(let j = 0; j < myNumbers[i].length; j++){
    console.log(myNumbers[i][j])   
 } 
}