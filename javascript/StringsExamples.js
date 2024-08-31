let singleQuotesString = 'Single Quotes String';
let doubleQuotesString = "Double Quotes String";
let templateLiteralString = `Template Literal String`;

console.log("singleQuotesString: ", singleQuotesString);
console.log("doubleQuotesString: ", doubleQuotesString);
console.log("templateLiteralString: ", templateLiteralString);

let myStringObj = new String("Hello, Javascript");
console.log("myStringObj: ", myStringObj);

let firstChar = myStringObj[0];
let lastChar = myStringObj[myStringObj.length - 1];

console.log("First char: ", firstChar);
console.log("Last char: ", lastChar);

console.log("Char at 7: ", myStringObj.charAt(7));

console.log("Char at 7: ", myStringObj.charCodeAt(7));

console.log("Concat another string: ", myStringObj.concat(", I want to understand you."));

console.log("Index of , is : ", myStringObj.indexOf(","));