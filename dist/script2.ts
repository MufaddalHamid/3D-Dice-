// Player name 
        var player1:string | null = "Player 1"; 
        var player2:string | null = "Player 2"; 
  
        // Function to change the player name 
        function editNames() { 
            player1 = prompt("Change Player1 name"); 
            player2 = prompt("Change player2 name"); 
  
            const name_container: HTMLElement | any = document.querySelector("p.Player1")
             
            name_container.innerHTML = player1; 
                              
            const name_container1: HTMLElement | any = document.querySelector("p.Player2")
             
            name_container1.innerHTML = player2; 
                              
        } 
  
        // Function to roll the dice 
        function rollTheDice() { 
            setTimeout(function () { 
                var randomNumber1 :number= Math.floor(Math.random() * 8) + 1; 
                var randomNumber2 :number= Math.floor(Math.random() * 8) + 1; 
                const img_container1: HTMLElement | any = document.querySelector(".img1")
                const img_container2: HTMLElement | any = document.querySelector(".img2")
                img_container1.setAttribute("src", 
                     randomNumber1 + ".gif"); 
  
                img_container2.setAttribute("src", 
                     randomNumber2 + ".gif"); 
                
                const container_h1: HTMLElement | any = document.querySelector("h1")
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
    