var a =20;
let b =30;
const pi =3.14;
console.log("Global scope");
console.log(a);
console.log(b);
console.log(pi);
function callValues(a, b, pi){
    console.log("Function scope");
    console.log("Inside function");
    console.log("the values are: ", a, b, pi);
}
callValues(100, 200, 3.1459);
console.log("Outside function");
console.log("the values are: ", a, b, pi);