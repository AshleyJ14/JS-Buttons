/* First you need to write a function, then declare a variable.
then write an if/else statement, then getElementById and .innerhtml and set it = to the variable.
*/

// You also want to set the ID in the HTML element before declaring a function.
function myButton() { 
  var txt;
  if (confirm("Click One!")) {
    txt = "You pressed OK!";
  } else {
    txt = "You pressed Cancel!";
  }
  document.getElementById("tryit").innerHTML = txt;
}
    
function myTest() {
    document.getElementById("test").innerHTML= "Why did the chicken cross the road? <br> To get to the other side!!!!!";
}    
    
    
function myColor() {
    document.getElementById("color").style.color = "Purple";
};
