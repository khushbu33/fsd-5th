// Type Conversion in JavaScript
// Implicit Conversion (Type Coercion)
console.log("5" + 2);       // "52"  → number converted to string (concatenation)
console.log("5" - 2);       // 3     → string converted to number (subtraction)
console.log("5" * "2");     // 10    → both strings converted to numbers
console.log("10" / 2);      // 5     → string converted to number
console.log("5" == 5);      // true  → values equal after coercion
console.log("5" === 5);     // false → strict equality checks type

// Explicit Conversion

let numStr = "123";
let num = Number(numStr);   // Convert string → number
console.log(num, typeof num); // 123 'number'

let boolVal = Boolean(0);   // Convert 0 → false
console.log(boolVal);       // false

let strVal = String(99);    // Convert number → string
console.log(strVal, typeof strVal); // "99" 'string'


// Special Cases

console.log(Number("123abc")); // NaN
console.log(Boolean(""));      // false (empty string → false)
console.log(Boolean(" "));     // true  (non-empty string → true)
console.log(Boolean(0));       // false
console.log(Boolean(1));       // true
console.log(Boolean(null));    // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));     // false
console.log(Boolean([]));      // true (empty array is truthy)
console.log(Boolean({}));      // true (empty object is truthy)
console.log(Boolean(function(){})); // true (functions are truthy)

//null and undefined conversions
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // falsegit rebase --continue
