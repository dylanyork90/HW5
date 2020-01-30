deck = {
  cardArray: [],

  load: function()
  {
    for (i=0; i < 52; i++){
      for(j = 0; j < 4; j++)
      {
              this.cards.push(Card(j,i));

      }
    }
  }
}