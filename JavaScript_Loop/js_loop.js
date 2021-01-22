
// For loop 
var names = ['Shane', 'Jowey', 'Dway']; 
for (let i = 0 ; i < names.length ; i ++){
    console.log(names[i]); 
}

for ( x of names){
    console.log(x); 
}

// for ( x in array)
const auser = { firstname: 'Lu', lastname: 'Soe'}; 

for( key in auser) console.log(auser[key] + " "); 



// do while loop 
let avariable = 0  ; 
do {
    avariable++; 
    console.log(avariable); 

} while ( avariable < 10); 

//forEach loop 

let animal = ['dog', 'cat', 'fish', 'cow', 'bird', 'Horse']; 
let str = " "; 
animal.forEach(animals => {
    str =  str + animals + " "; 
    console.log(str);
}); 
