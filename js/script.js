'use strict';

const field = document.getElementsByTagName('input')[0];
const reset = document.getElementsByTagName('input')[1];
const player1 = document.getElementsByTagName('input')[2];
const player2 = document.getElementsByTagName('input')[3];
const counter1 = document.getElementsByTagName('div')[0];
const counter2 = document.getElementsByTagName('div')[1];
const count= document.getElementsByTagName('div')[2];
let value;
let divCounter1 = counter1.cloneNode(true);
let divCounter2 = counter2.cloneNode(true);

function addCounter1() {
    value = player1.value++;
    value++;
    divCounter1.textContent = value;
    counter1.replaceWith(divCounter1);
    divCounter1.replaceWith(divCounter1); 
}

function addCounter2() {
    value = player2.value++;
    value++;
    divCounter2.textContent = value;
    counter2.replaceWith(divCounter2);
    divCounter2.replaceWith(divCounter2);
}

player1.onclick = addCounter1;
player2.onclick = addCounter2;