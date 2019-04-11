'use strict';

const field = document.getElementsByTagName('input')[0];
const reset = document.getElementsByTagName('input')[1];
const player1 = document.getElementsByTagName('input')[2];
const player2 = document.getElementsByTagName('input')[3];
const counter1 = document.getElementsByTagName('div')[0];
const counter2 = document.getElementsByTagName('div')[1];
const count= document.getElementsByTagName('div')[2];
let value;

player1.addEventListener ('click', function (event){
    player1.value++;
});

function addCounter1() {
/* lier l'incrementation et le replace with pour lajouter dans la div en mm temps que j'incrémente*/

}