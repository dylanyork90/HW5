deck = {
  cardArray: [],

  load: function(){
    for (i=1; i < 5; i++){
      for(j = 2; j < 15; j++)
      {
              this.cardArray.push(new Card(i,j));

      }
    }
  }
}