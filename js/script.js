'use strict';

const field = document.getElementsByTagName('input')[0];
const reset = document.getElementsByTagName('button')[0];
const player1 = document.getElementsByTagName('button')[1];
const player2 = document.getElementsByTagName('button')[2];
const counter1 = document.getElementsByTagName('div')[0];
const counter2 = document.getElementsByTagName('div')[1];
let score = document.getElementsByTagName('div')[2];
let max = 5;
let value;
let divCounter1 = counter1.cloneNode(true);
let divCounter2 = counter2.cloneNode(true);
let divScore = score.cloneNode(true);

function addCounter1() {
    
    if(player1.value == max || player2.value == max){
    return;
    }else{
    value = player1.value++;
    value++;
    divCounter1.textContent = value;
    counter1.replaceWith(divCounter1);
    divCounter1.replaceWith(divCounter1); 
    }
}

function addCounter2() {
    if(player2.value == max || player1.value == max){
    return;
    }else{
    value = player2.value++;
    value++;
    divCounter2.textContent = value;
    counter2.replaceWith(divCounter2);
    divCounter2.replaceWith(divCounter2);
    }
}



function addScore() {
    max = field.value;;
    value = max;
    divScore.textContent = value;
    score.replaceWith(divScore);
}

field.addEventListener('keyup', function (event){
     
    if(event.keyCode === 13){
        addScore();
    }

});

player1.onclick = addCounter1;
player2.onclick = addCounter2;