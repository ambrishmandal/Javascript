// let a = prompt("What's your age?");

// // Convert the input to a number
// a = Number.parseInt(a);

// if (isNaN(a)) {
//     alert("Please enter a valid number.");
// } else if (a < 0) {
//     alert("This is an invalid age.");
// } else if (a >= 0 && a < 9) {
//     alert("You are a kid and cannot even think about driving.");
// } else if (a >= 9 && a < 18) {
//     alert("You are a kid and can think of driving after 18.");
// } else {
//     alert("You can now drive as you are above 18."); 
// }

// console.log("Done");

const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

