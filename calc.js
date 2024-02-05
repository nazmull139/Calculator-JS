
                     //         SIMPLE CALCULATOR WITH JAVASCRIPT         \\


const display = document.getElementById("display");

function apendToDisplay(input){

   display.value += input;

}


function calCulate(){


 try{
    display.value = eval(display.value);
 }
 catch(error){

    display.value = "Error";
 }

}


function clearDisplay(){

    display.value = "";

}