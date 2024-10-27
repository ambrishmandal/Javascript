/*
let runAgain =true;

let canDrive = (age)=>{
  return age>=18?true:false
}

while(runAgain){
let age = prompt("Enter the age")
age = Number.parseInt(age)
if(age<0){
  console.error("please enter the valid age")
  break;
}

if(canDrive(age)){
    alert("You can drive")
}
else{
    alert("You can not drive")
}
runAgain=confirm("Do you want to play again")
}
*/

/*
let number = prompt("Enter the number ")
number = Number.parseFloat(number)

if(number>4){
  location.href="https://google.com"
}
*/

let color = prompt("Enter the background color")
document.body.style.background=color
