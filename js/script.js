'use strict';

let input = document.getElementsByTagName('input')[0];
let submit = document.getElementsByTagName('input')[1];
let score = document.getElementsByTagName('div')[0];
let reset = document.getElementsByClassName('reset');
let player1 = document.getElementsByClassName('player1');
let player2 = document.getElementsByClassName('player2');
let counterPlayer1 = document.getElementsByClassName('counterPlayer1');
let counterPlayer2 = document.getElementsByClassName('counterPlayer2');

function addScore() {


   //     score.textContent = input.value;
     //   score.replaceWith(num);

}

function resetScore() {
    let replace = document.createElement('div');
    replace.textContent = 10;
    score.replaceWith(replace);
}