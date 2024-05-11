

"use strict";
let answer;

let number1Field = document.getElementById("number1Field");
let number2Field = document.getElementById("number2Field");

window.onload = init; 

function init(){
  let addBtn = document.getElementById("addBtn");
  let subBtn = document.getElementById("subtractBtn");
  let mulBtn = document.getElementById("multiplyBtn");
  let devideBtn = document.getElementById("devideBtn");

  //showBtn.onclick = function() {showGreeting2()};
  addBtn.onclick = onAddBtnClicked
  subBtn.onclick=onSubtractBtnClicked
  mulBtn.onclick=onMultiplyBtnClicked
  devideBtn.onclick=onDevideBtnClicked
  

}

function onAddBtnClicked() {

answer = Number(number1Field.value)+ Number(number2Field.value);

let answerField = document.getElementById("answerField");

answerField.value = answer;
}   
function onSubtractBtnClicked() {

    answer = Number(number1Field.value)- Number(number2Field.value);
    
    let answerField = document.getElementById("answerField");
    
    answerField.value = answer;
    }   

    function onMultiplyBtnClicked() {

        answer = Number(number1Field.value) * Number(number2Field.value);
        
        let answerField = document.getElementById("answerField");
        
        answerField.value = answer;
        }   

        function onDevideBtnClicked() {

            answer = Number(number1Field.value)/ Number(number2Field.value);
            
            let answerField = document.getElementById("answerField");
            
            answerField.value = answer;
            }   

