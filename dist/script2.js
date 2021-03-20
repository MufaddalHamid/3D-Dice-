// Player name 
var player1 = "Player 1";
var player2 = "Player 2";
// Function to change the player name 
function editNames() {
    player1 = prompt("Change Player1 name");
    player2 = prompt("Change player2 name");
    var name_container = document.querySelector("p.Player1");
    name_container.innerHTML = player1;
    var name_container1 = document.querySelector("p.Player2");
    name_container1.innerHTML = player2;
}
// Function to roll the dice 
function rollTheDice() {
    setTimeout(function () {
        var randomNumber1 = Math.floor(Math.random() * 8) + 1;
        var randomNumber2 = Math.floor(Math.random() * 8) + 1;
        var img_container1 = document.querySelector(".img1");
        var img_container2 = document.querySelector(".img2");
        img_container1.setAttribute("src", "images/"+randomNumber1 + ".gif");
        img_container2.setAttribute("src", "images/"+randomNumber2 + ".gif");
        var container_h1 = document.querySelector("h1");
        if (randomNumber1 === randomNumber2) {
            container_h1.innerHTML = "Draw!";
        }
        else if (randomNumber1 < randomNumber2) {
            container_h1.innerHTML
                = (player2 + " WINS!");
        }
        else {
            container_h1.innerHTML
                = (player1 + " WINS!");
        }
    }, 1000);
}
