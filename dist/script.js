"use strict";
var cube = document.querySelector('.cube');
var cube2 = document.querySelector('.cube2');
var rollBtn = document.querySelector('.rollBtn');
var EdBtn = document.querySelector('.EdBtn');
var call = 0;
var currentClass = "";
var currentClass2 = "";
var prev1 = 0;
var prev2 = 0;
var player1 = "Player 1";
var player2 = "Player 2";
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
function justNumbers(wrd) {
    var numsStr = wrd.replace(/[^0-9]/g, '');
    return parseInt(numsStr);
}
function rollDice() {
    var randNum = getRandomInt(1, 7);
    var randNum2 = getRandomInt(1, 7);
    var cclass1 = justNumbers(currentClass);
    var cclass2 = justNumbers(currentClass2);
    if (cclass1 == randNum || cclass2 == randNum2) {
        randNum = getRandomInt(1, 7);
        randNum2 = getRandomInt(1, 7);
        console.log("call here");
    }
    var showClass = 'show-' + randNum;
    var showClass2 = 'show-' + randNum2;
    console.log("sclass1" + showClass);
    console.log("sclass2" + showClass2);
    console.log("cclass1" + currentClass);
    console.log("cclass2" + currentClass2);
    if (currentClass) {
        cube.classList.remove(currentClass);
        cube2.classList.remove(currentClass2);
    }
    cube.classList.add(showClass);
    cube2.classList.add(showClass2);
    currentClass = showClass;
    currentClass2 = showClass2;
    if (call > 0) {
        var container = document.querySelector("h1");
        if (randNum === randNum2) {
            container.innerHTML = "Draw!";
        }
        else if (randNum < randNum2) {
            container.innerHTML
                = (player2 + " WINS!");
        }
        else {
            container.innerHTML
                = (player1 + " WINS!");
        }
    }
    call += 1;
}
// Function to change the player name 
function editNames() {
    player1 = prompt("Change Player1 name");
    player2 = prompt("Change player2 name");
    var container = document.querySelector("p.Player1");
    container.innerHTML = player1;
    var container1 = document.querySelector("p.Player2");
    container1.innerHTML = player2;
}
// set initial side
// @ts-ignore: Object is possibly 'null'
rollDice();
rollBtn.addEventListener("click", rollDice);
EdBtn.addEventListener("click", editNames);
