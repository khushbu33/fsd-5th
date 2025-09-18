function fun(){
var a =20;
let b =30;
const pi =3.14;
console.log("Block scope");
console.log(a);
console.log(b);
console.log(pi);
function callValues(a, b, pi){
    console.log("block scope");
    console.log("the values are: ", a, b, pi);
}
fun();
console.log("Outside scope");
console.log(a);
console.log(b);
console.log(pi);
callValues(a,b,pi);
}
