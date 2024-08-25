// Operators and Expressions

// Arithmetic Operators

let num1 = 10;
let num2 = 5;

let additionResult= num1 + num2;
console.log("Addition Result: ", additionResult);

let subtractionResult = num1 - num2;
console.log("Subtraction Result: ", subtractionResult);

let multiplicationResult = num1 * num2;
console.log("Multiplication Result: ", multiplicationResult);

let divisionResult = num1 / num2;
console.log("Divison Result: ", divisionResult);

let modulusResult = num1 % num2;
console.log("Modulus Result: ", modulusResult);

// Comparision Operators

num1 = "10";
num2 = 10;

let isEqual = num1 === num2;
console.log("isEqual: ", isEqual);

let isNotEqual = num1!== num2;
console.log("isNotEqual ", isNotEqual);

let greaterThanOrEquals = num1 >= num2;
console.log("greaterThanOrEquals ", greaterThanOrEquals);

let lessThanOrEquals = num1 <= num2;
console.log("lessThanOrEquals", lessThanOrEquals);

// Logical Operators
let andOperator = (num1 > 0) && (num2 > 0);
console.log("andOperator: ", andOperator);

let orOperator = (num1 > 0) || (num2 > 0);
console.log("orOperator: ", orOperator);

let notOperator = !(num1 > 0);
console.log("notOperator: ", notOperator);

// Operator Precedenece and Associativity
num1 = 10;
num2 = 10;

let precedenceResult = num1 + num2 * 3;
console.log("precedenceResult: ", precedenceResult);

let associativityResult = num1 - num2 + 5;
console.log("associativityResult: ", associativityResult);

// Expressions
let expressionResult1 = num1 * (2 + num2) / 2;
console.log("expressionResult1: ", expressionResult1);

let expressionResult2 = (num1 + num2) * (num2 - num1);
console.log("expressionResult2: ", expressionResult2);

// Bitwise Operators
let bitwiseAnd = num1 & num2;
console.log("bitwiseAnd: ", bitwiseAnd);

let bitwiseOR = num1 | num2;
console.log("bitwiseOR: ", bitwiseOR);

let bitwiseXOR = num1 ^ num2;
console.log("bitwiseXOR: ", bitwiseXOR);

let bitwiseNOT = ~(-20);
console.log("bitwiseNOT: ", bitwiseNOT);

let leftShift = num1 << 1;
console.log("leftShift: ", leftShift);

let rightShift = num1 >> 1;
console.log("rightShift: ", rightShift);

//  ternary
num1 = 10;
num2 = 20;
let ternaryResult = num1 > num2 ? "Number 1 is greater" : "Number 2 is greater";
console.log("Ternary Result: ", ternaryResult);