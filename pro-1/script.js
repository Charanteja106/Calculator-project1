
//Calculator Program

const display= document.getElementById("display");

function appendTODisplay(input){
    display.value += input;
}

function ClearDisplay(){
    display.value ="";
}


//eval-Function = It takes an expression such as (1+2+3
// and evaluates it and gives result)

function calculate(){
    try{
        display.value = eval(display.value);
    }
catch(error){
    display.value = "Error";
}
}



// function backward(){
    
// }
