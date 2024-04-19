//  prompt using
const prompt = require('prompt-sync')();

const number = prompt("Please enter the number of the month:");
switch (number) {
  case "1":
    console.log("The name of the month is January.");
    break;
  case "2":
    console.log("The name of the month is February.");
    break;
  case "3":
    console.log("The name of the month is March.");
    break;
  case "4":
    console.log("The name of the month is April.");
    break;
  case "5":
  console.log("The name of the month is May.");
  break;
  case "6":
    console.log("The name of the month is June.");
    break;
  case "7":
    console.log("The name of the month is July.");
    break;
  case "8":
    console.log("The name of the month is August.");
    break;
   case "9":
    console.log("The name of the month is September.");
    break;
   case "10":
    console.log("The name of the month is October.");
    break;
   case "11":
    console.log("The name of the month is November.");
    break;
   case "12":
    console.log("The name of the month is December.");
    break;
 default:
}
if(number >= 13){
  console.log("There is no such month")
}