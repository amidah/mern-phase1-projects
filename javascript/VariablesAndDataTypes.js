//  Variables and Constants
// Declare variables using let, const, var

let variableExample = "I am a variable.";
const constantExample = "I am a constant.";
var legacyVariable = "I am a legacy variable.";

// Output variables to console

console.log("Variable-", variableExample);
console.log("Constant-", constantExample);
console.log("LegacyVariable-", legacyVariable);

// Update variable value

variableExample = "I have a new variable value.";
legacyVariable = "I have a new legacy variable value.";

// Output updated variables to console

console.log("Updated Variable-", variableExample);
console.log("Updated LegacyVariable-", legacyVariable);

// Update cosntant value - won't work as reassignment won't be possible

//constantExample = "I have a new constant value.";

// Output updated constant value to console

//console.log("Updated Constant-", constantExample);

// Primitive Data Types

// Strings
let stringExample = "Hello JavaScript";
console.log("String- ", stringExample, " and Data Type- ", typeof stringExample);

// Numbers
let numberExample = 50;
console.log("Number- ", numberExample, " and Data Type- ", typeof numberExample);

// Booleans
let booleanExample = true;
console.log("Boolean- ", booleanExample, " and Data Type- ", typeof booleanExample);

// Data Type Conversion

// Convert - number -> string
let convertedString = String(numberExample);
console.log("Converted String- ", convertedString, " and Data Type- ", typeof convertedString);

// Convert - string -> number
let convertedNumber = Number(convertedString);
console.log("Converted Number- ", convertedNumber, " and Data Type- ", typeof convertedNumber);

// Convert - boolean -> string
let convertedBooleanString = String(booleanExample);
console.log("Converted Boolean String- ", convertedBooleanString, " and Data Type- ", typeof convertedBooleanString);

// Convert - boolean -> number
let convertedBooleanNumber = Number(booleanExample);
console.log("Converted Boolean Number- ", convertedBooleanNumber, " and Data Type- ", typeof convertedBooleanNumber);

// Implicit Conversion
let implicitConversion = "5" + 5 + 5;
console.log("Implicit Conversion- ", implicitConversion, " and Data Type- ", typeof implicitConversion);

// Explicit Conversion
let explicitConversion = Number("5") + 5 + 5;
console.log("Explicit Conversion- ", explicitConversion, " and Data Type- ", typeof explicitConversion);

let parseIntConversionExample = parseInt('3.14');
let numberConversionExample = Number('3.14');

console.log("parseIntConversionExample", parseIntConversionExample);
console.log("numberConversionExample", numberConversionExample);