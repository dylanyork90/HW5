document.addEventListener("DOMContentLoaded", function (){
  document.getElementById("next").style.visibility = "hidden"
  let playerArray = [];
  let computerArray = [];

  document.getElementById("deal").addEventListener("click", function (){
    deck.cardArray.length = 0;
    document.getElementById("PlayerScore").innerText = "";
    document.getElementById("ComputerScore").innerText = "";
    document.getElementById("PlayerCard").innerText = "";
    document.getElementById("ComputerCard").innerText = "";
    document.getElementById("turnNumber").innerText = "0";
    deck.load();
    let i;
    let random;
    for(i=0; i < 26; i++)
    { 
      random = Math.floor(Math.random() * (52));
      while (deck.cardArray[random].inuse == true){
        random = Math.floor(Math.random() * (52));
      }
      playerArray[i] = deck.cardArray[random];
      deck.cardArray[random].inuse = true;

      random = Math.floor(Math.random() * (52));
      while (deck.cardArray[random].inuse === true){
        random = Math.floor(Math.random() * (52));
      }
      computerArray[i] = deck.cardArray[random];
      deck.cardArray[random].inuse = true;
    }

    document.getElementById("deal").style.visibility = "hidden";
    document.getElementById("next").style.visibility = "visible";
  }); 

  document.getElementById("next").addEventListener("click", function (){
    let turnNumber = Number(document.getElementById("turnNumber").innerText);

    let playerScore = Number(document.getElementById("PlayerScore").innerText);
    let computerScore = Number(document.getElementById("ComputerScore").innerText);

    let playerCardElement = document.getElementById("PlayerCard");
    let computerCardElement = document.getElementById("ComputerCard");

    playerCardElement.innerText = rankConvert(playerArray[turnNumber].rank) + " " + suitConvert(playerArray[turnNumber].suit);

    if ( playerArray[turnNumber].suit === 1 || playerArray[turnNumber].suit === 2){
      playerCardElement.className = "cardBlack";
    } else{
      playerCardElement.className = "cardRed";
    }
    if (computerArray[turnNumber].suit === 1 || computerArray[turnNumber].suit === 2){
      computerCardElement.className = "cardBlack";
    } else {
      computerCardElement.className = "cardRed";
    }

    computerCardElement.innerText = rankConvert(computerArray[turnNumber].rank) + " " + suitConvert(computerArray[turnNumber].suit);
    if (playerArray[turnNumber].rank > computerArray[turnNumber].rank){
      playerScore++;
      document.getElementById("message").innerText = "You wond this hand";
    }

    if (playerArray[turnNumber].rank < computerArray[turnNumber].rank){
      computerScore++;
      document.getElementById("message").innerText = "You lost this hand";
    }

    if(playerArray[turnNumber].rank === computerArray[turnNumber].rank){
      if(playerArray[turnNumber].suit > computerArray[turnNumber].suit){
        playerScore++
        document.getElementById("message").innerText = "You wond this hand";
      }else{
        computerScore++;
      document.getElementById("message").innerText = "You lost this hand";
      }
    }



    document.getElementById("PlayerScore").innerText = playerScore;
    document.getElementById("ComputerScore").innerText = computerScore;

    if(++turnNumber === 26){
      if (playerScore > computerScore){
        document.getElementById("message").innerText = "Game Over you Won";
      }
      if (playerScore < computerScore){
        document.getElementById("message").innerText = "Game Over you lost";
      }
      if (playerScore === computerScore){
        document.getElementById("message").innerText = "Game Over its a tie";
      }
      document.getElementById("next").style.visibility ="hidden";
      document.getElementById("deal").style.visibility ="visible";
    }
    document.getElementById("turnNumber").innerText = turnNumber;
  
});

function suitConvert(someSuit) {
  switch (someSuit){
    case 1:
        return "SPADE";
        break;
    case 2:
        return "CLUB";
        break;
    case 3:
        return "DIAMOND";
        break;
    case 4:
        return "HEART";
        break;
  }
};

function rankConvert(someRank){
  switch (someRank){
    case 2:
        return "2";
        break;
    case 3:
        return "3";
        break;
    case 4:
        return "4";
        break;
    case 5:
        return "5";
        break;
    case 6:
        return "6";
        break;
    case 7:
        return "7";
        break;
    case 8:
        return "8";
        break;
    case 9:
        return "9";
        break;
    case 10:
        return "10";
        break;
    case 11:
        return "JACK";
        break;
    case 12:
        return "QUEEN";
        break;
    case 13:
        return "KING";
        break;
    case 14:
        return "ACE";
        break;
  }
};
});


