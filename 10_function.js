
function OneplusAvg(x,y){
    return Math.round(1 + (x + y)/2) ;

}

let a = 2;
let b = 3;
let c = 4;

console.log("the average of a and b is : ",OneplusAvg(a,b))
console.log("the average of a and b is : ",OneplusAvg(b,c))
console.log("the average of a and b is : ",OneplusAvg(c,a))
