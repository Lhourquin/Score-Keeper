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
    
    if (player1.value == max || player2.value == max || max < 0){
    return;
    } else{

    value = player1.value++;
    value++;
    divCounter1.textContent = value;
    counter1.replaceWith(divCounter1);
    divCounter1.replaceWith(divCounter1); 
    colorScore();
    }
}

function addCounter2() {
    
    if (player2.value == max || player1.value == max || max < 0){
    return;
    } else{
    value = player2.value++;
    value++;
    divCounter2.textContent = value;
    counter2.replaceWith(divCounter2);
    divCounter2.replaceWith(divCounter2);
    colorScore();
    }
}

function colorScore() {

    if (player1.value == max){
    divCounter1.style.color = 'green';
    divCounter2.style.color = 'red';
    } else if(player2.value == max){
    divCounter2.style.color = 'green';
    divCounter1.style.color = 'red';
    }
}

function addScore() {
    
    max = field.value;
    max++;
    max--;
    
    if(max < 0){
    return;
    }else{    
    divScore.textContent = max;
    score.replaceWith(divScore);
    }
}

field.addEventListener('keyup', function (event){
     
    if (event.keyCode === 13){
        addScore();
        resetScore();
    } else if (event.keyCode === 69) {
    return;
    }
});

function resetScore() {

    if (player1.value == max || player2.value == max){
    max = 0;
    divScore.textContent = max;
    divScore.replaceWith(divScore);
    value = 0;
    field.value = max;
    player1.value = value;
    player2.value = value;
    divCounter1.style.color = 'black';
    divCounter2.style.color = 'black';
    divCounter1.textContent = value;
    divCounter1.replaceWith(divCounter1);
    divCounter2.textContent = value;
    divCounter2.replaceWith(divCounter2);
    }else if (event.keyCode === 13){
    max = field.value;
    divScore.textContent = max;
    divScore.replaceWith(divScore);
    value = 0;
    player1.value = value;
    player2.value = value;
    divCounter1.style.color = 'black';
    divCounter2.style.color = 'black';
    divCounter1.textContent = value;
    divCounter1.replaceWith(divCounter1);
    divCounter2.textContent = value;
    divCounter2.replaceWith(divCounter2);
    } else if (field.value > 0 || field.value < 0){
    max = 0;
    divScore.textContent = max;
    score.replaceWith(divScore);
    divScore.replaceWith(divScore);
    value = 0;
    field.value = max;
    player1.value = value;
    player2.value = value;
    divCounter1.style.color = 'black';
    divCounter2.style.color = 'black';
    divCounter1.textContent = value;
    divCounter1.replaceWith(divCounter1);
    divCounter2.textContent = value;
    divCounter2.replaceWith(divCounter2);
    } 
}

player1.onclick = addCounter1;
player2.onclick = addCounter2;
reset.onclick = resetScore;
field.onclick = addScore;