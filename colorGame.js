document.addEventListener("DOMContentLoaded", function(event) { 

 var numSquares = 6;
 var colors = [];
 var pickedColor;

 var reset = document.querySelector("#reset")
 var squares = document.querySelectorAll(".square");
 var colorDisplay = document.getElementById("colorDisplay");
 var msgDisplay = document.getElementById("message");
 var h = document.querySelector("h1");
 var modeButtons = document.querySelectorAll(".mode");
 colorDisplay.textContent = pickedColor;

 init();

 function init(){
     defaults();

     // *========================= >> EVENT-ADDED FOR ALL THREE BTNS << =====================

     for(var i = 0; i<modeButtons.length; i++){
         modeButtons[i].addEventListener("click",function(){
             modeButtons[0].classList.remove("selected");
             modeButtons[1].classList.remove("selected");
             this.classList.add("selected");
             this.textContent==="Easy" ? numSquares = 3 : numSquares = 6;
             defaults();
         });

     }

     reset.addEventListener("click",()=>{
         defaults();
     });


 }


 // ========================== >> GETTING THE DEFAULTS BACK << =====================

 function defaults(){
     // * generating random numSquares Colors
     colors = generateRandomColors(numSquares);
     // * displaying the changes to squares
     var i=0, len = squares.length;
     for(; i<len; i++){
         if(colors[i]){
             squares[i].style.display="block";
             squares[i].style.background = colors[i];
         }
         else{
             squares[i].style.display ="none";
         }
     }
     // * choosing the picked color
     pickedColor = pickColor();
     // * changing the header's color
     h.style.background = "steelblue";
 // * CHANGING TEXT-CONTENTS
     // * msgDisplay to ""
     msgDisplay.textContent = "";
     // * changing colorDisplay
     colorDisplay.textContent = pickedColor;
     // * changing text of Reset btn
     reset.textContent ="New Colors";
 }


 for(var i=0; i < squares.length; i++){
     squares[i].addEventListener("click",function(){
         // grab color of clicked square
         var clickedColor = this.style.background;

         //see if user is correct or not
         if(clickedColor == pickedColor){
             msgDisplay.textContent = "Correct!";
             changeColors(pickedColor);
             reset.textContent = "Play Again?";
         }
         else{
             this.style.background = "#232323";
             msgDisplay.textContent = "Try Again!!";
         }
     });
 }
 // *=========== >> FUNC FOR WINNING CONDITION << ===============
 function changeColors(color){
     squares.forEach(x=>{
         x.style.background =color;
     });
     h.style.background =color;
 }

 function pickColor(){
     var random = Math.floor(Math.random()*colors.length);
     return colors[random];
 }

 function generateRandomColors(num){
     var a;
     //make an array and 
     var arr =[];
     for(var k=0; k<num; k++){
         clr ="rgb(";
         // add num rgb format strings in it
         for(var i=0; i<3;i++){
             a = Math.floor(Math.random()*256);            
             clr +=a;
             if(i==2)clr+=")";
             else clr+=", ";
         }
         // add it to the array
         arr.push(clr);
     }
     return arr;
 }

});
