function Username_add() {
    player1_name = document.getElementById("player1").value;
    player2_name = document.getElementById("player2").value; 
      localStorage.setItem("player1", player1);
      localStorage.setItem("player2", player2);
  
      window.location = "Game.html";
   }