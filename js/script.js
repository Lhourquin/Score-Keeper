'use strict';

const field = document.getElementsByTagName('input')[0];
const reset = document.getElementsByTagName('input')[1];
const player1 = document.getElementsByTagName('input')[2];
const player2 = document.getElementsByTagName('input')[3];
const counter1 = document.getElementsByTagName('div')[0];
const counter2 = document.getElementsByTagName('div')[1];
const count= document.getElementsByTagName('div')[2];
let value1;
let divCounter = document.createElement('div');


function addCounter1() {
    value1 = player1.value++;
    value1++;
    divCounter.textContent = value1;
    counter1.replaceWith(divCounter);
    
}

player1.onclick = addCounter1;
player2.onclick = addCounter2;

function addCounter2() {
    value1 = player2.value++;
    value1++;
    divCounter.textContent = value1;
    counter2.replaceWith(divCounter);
}