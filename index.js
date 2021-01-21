
function myFunction(){
    var x = document.getElementById('input').value ;
    var out = new Number (x); 
    output = (out * 1.8) + 32; 
    document.getElementById('output').innerHTML = output; 

    var text ; 
    if ( x == 0 || x < 10 ){
        text = "Weather is cold"; 
    }
    else if ( x >= 10 && x <= 25){
        text ="Weather is Normal. ";
    }
     else if ( x > 25 && x <= 30)
    {
        text = "Weather is Hot. "; 
    }

    else if (x > 30 && x <= 38)
    {
        text = "Weather is extremely hot almost 100 Farenheit."; 
    }
    else if ( x < 0)
    {
        text = "Freezing."; 
    }

    else 
    {
        text = "Weather is Extreme Hot. You should not go outside."; 
    }

    document.getElementById('outputCondition'). innerHTML = text; 
}