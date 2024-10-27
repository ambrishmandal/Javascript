
// print the sum of n Natural number using for loop

/* let sum = 0;
let n = prompt("Enter the value of n ")
n = Number.parseInt(n)

for(let i= 0;i<n;i++){
    sum += (i+1);
    console.log((i+1),"+");
}
console.log("sum of first "+ n + "natural number is " + sum)
*/
let obj ={
    Ambrish : 90,
    shubh : 66,
    shivika :78,
    ritika : 57,
    shiv :23,
}
// for in loop
for(let a in obj){
    console.log("mark of " + a + "are : " + obj[a])
    // console.log(a)
}

// for of loop
// of loop can be used in term of array or string not in obj case
for(let a of "Ambrish"){
    console.log(a)
}
