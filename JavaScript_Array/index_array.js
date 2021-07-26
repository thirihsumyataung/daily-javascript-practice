var state1 = []; 
var city1 = []; 
var ticketsPrice =[];
var cityArray = document.getElementById("city"); 
var stateArray = document.getElementById("state"); 
var messageBox = document.getElementById("display"); 
// 

 


function insert() {
    state1.push(stateArray.value); 
    city1.push(cityArray.value); 
    var totalprice = document.getElementById("tickets").value; 
     var x = new Number (totalprice); 
    var price = (x * 12); 

    ticketsPrice.push(price); 
    console.log(price);
    clearAndShow(); 
     
}
 
function clearAndShow(){
    cityArray.value = " "; 
    stateArray.value = " "; 
    document.getElementById("tickets").value = " "; // SHin NEe

    messageBox.innerHTML = " "; 

    messageBox.innerHTML += "City : " + city1.join(", ") + "<br/>"; 
    messageBox.innerHTML += "State : " + state1.join(", ") + "<br/>"; 
    messageBox.innerHTML += "Ticket Price is: " + ticketsPrice.join(" , ") + "</br>"; 



}

function totalAmount(){

}


