//JS Donut Counter Lab

//declare 2 variables one for guests and one for donuts
var guests;
var donuts;

//use prompt method to bring up a dialog box in the browser for the user to insert the number of guests and donuts.
//use parseInt to convert the users answer from a string to an integer.

guests = parseInt(prompt("How many guests do you have?"),10)

donuts = parseInt(prompt("How many donuts do you have?"),10)

//write a conditional to check if there are enough donuts

if (guests < donuts) {
  alert('There are ${guests} guests and ${donuts} donuts. Everyone is happy!')
}
else {
  alert('There are ${guests} guests and ${donuts} donuts. Everyone is sad!')
}

  //alert the user with a message telling them the numbers of donuts and guests, and if there are enough donuts for each guest.
