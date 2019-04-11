'use strict';

let input = document.getElementsByTagName('input')[0];
let submit = document.getElementsByTagName('input')[1];
let score = document.getElementsByTagName('div')[0];
let reset = document.getElementsByClassName('reset');
let player1 = document.getElementsByClassName('player1');
let player2 = document.getElementsByClassName('player2');
let counterPlayer1 = document.getElementsByClassName('counterPlayer1');
let counterPlayer2 = document.getElementsByClassName('counterPlayer2');
let replace = document.createElement('div');

function addScore() {
        if(input.value = ""){
        return null;
        }else {
        replace.textContent = input.value;
        score.replaceWith(replace);
        }
        deleteInputContent();

}

function deleteInputContent() {
    input.value = "";
}

function resetScore() {
    
    replace.textContent = 5;
    score.replaceWith(replace);
}