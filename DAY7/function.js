function isOdd(a){
    if(a%2!==0){
        return "Value is odd";
    }
    else{
        return "Value is even";
    }

}
function isODDUsingTernary(a){
    return a%2!==0?"Value is odd":"Value is even";
}
let funAsExpression = function(a){
    if(a%2!==0){
        return "Value is odd";
    }
    else{
        return "Value is even";
    }
}