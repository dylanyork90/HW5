document.addEventListener("DOMContentLoaded", function (event){
  playerArray = [];
  computerArray = [];
  document.getElementById("deal").addEventListener("click", function (){

    deck.load();
    for(i=0; i < 26; i++)
    { 
      playerArray[i] = deck.deck.cardArray[i];
      computerArray[i] = deck.cardArray[i + 26];
    }

    //console.log(playerArray);
    //console.log("----------------------");
    //console.log(computerArray);

    
  }) 
  document.getElementById("next").addEventListener("click", function (){
  let pCard = document.getElementById("playerCard");
  let cCard = document.getElementById("computerCard");

  for(i=0; i < 26; i++)
  {
    pCard.innerHTML = playerArray[i].suit + " " + playerArray[i].rank;
    cCard.innerHTML = computerArray[i].suit + " " + playerArray[i].rank;
  }
  })
});



