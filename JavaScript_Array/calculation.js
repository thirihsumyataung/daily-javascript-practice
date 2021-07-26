 
function myFunction(event){
    event.preventDefault();
    var x = document.getElementById("cinema").selectedIndex;
    console.log(x); 
    console.log(document.getElementsByTagName("option"));
   document.getElementById("order").innerHTML = document.getElementsByTagName("option")[x].value; 
   insert(); 
}

var movieName = []; 
var ticketPrice = []; 
var optionArray = []; 
index = document.getElementById("cinema").selectedIndex;
var movieValue = document.getElementById('movie'); 
var optionValues = document.getElementsByTagName("option")[index];  

var messageBox = document.getElementById('display'); 

function insert(){
    movieName.push(movieValue.value); 
    //ticketPrice.push(movieValue.value); 
    optionArray.push(optionValues.value);
    
    var ticketValue = document.getElementById('ticket').value;
    var x = new Number (ticketValue) ; 
    var price = ( x * 12 ); 
    ticketPrice.push(price); 

    clearAndShow(); 

}

function clearAndShow(){
    movieValue.value = " "; 
    optionValues = " "; 
    document.getElementById('ticket').value = " "; 
    messageBox.innerHTML = " "; 
    messageBox.innerHTML += "Movie : " + movieName.join(" , ") + "</br>"; 
    messageBox.innerHTML += "Cinema located at :" + optionArray.join( " , ") + "</br>"; 
    messageBox.innerHTML += "Ticket Price: " + ticketPrice.join (" , ") + "</br>"; 

}

window.addEventListener("DOMContentLoaded", function(){

    // Get references to DOM elements, not their values
    // This allows you to refrence the element over and over
    // without having to re-scan the DOM for it
    var select = document.getElementById("operation");
    var oper1 = document.getElementById("num1");
    var oper2 = document.getElementById("num2");
    var result = document.getElementById("result");
    var btn = document.getElementById("button1");
  
    // Set up a click event handler for the button and the select:
    btn.addEventListener("click", count);
    select.addEventListener("change", count);
  
    function count() {
      var answer = null;
    
      // Convert the text values to numeric values
      var n1 = parseFloat(oper1.value);
      var n2 = parseFloat(oper2.value);
  
      // Determine the math operation needed and proceed accordingly
      switch (select.value){
        case "+":
          answer = n1 + n2;
          break;
        case "-":
          answer = n1 - n2;
          break;
        case "*":
          answer = n1 * n2;
          break;
        case "/":
          answer = n1 / n2;
          break;
        case "%":
          answer = n1 % n2;
          break;       
      }
  
      // Inject the answer into the HTML element
      result.textContent = answer; 
    }
  });
  
