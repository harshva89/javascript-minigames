document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector(".grid");
  var cardsChosen= [];
  var cardsChosenId = [];
  var cardsWon = [];
  const resultText = document.getElementById("result");
  let resultDisplay=0;

  function CreateBoard(){
      console.log("AB");
      for(let i = 0; i<cardArray.length; i++){
          var card = document.createElement('img');
          card.setAttribute("src","images/blank.png");
          card.setAttribute('id',i);
          card.addEventListener('click',flipCard);
          grid.appendChild(card);
      }
  }


  function checkForMatch(){
      var cards = document.querySelectorAll('img');
      const optionOne = cardsChosenId[0];
      const optionTwo = cardsChosenId[1];
      if(cardsChosen[0]==cardsChosen[1]){
        
        cards[optionOne].setAttribute('src','images/white.png');
        cards[optionTwo].setAttribute('src','images/white.png');
        cards[optionOne].removeEventListener('click',flipCard);
        cards[optionTwo].removeEventListener('click',flipCard);
        cardsWon.push(cardsChosen);
        console.log(cardsWon)
        resultDisplay+=1;
      }
      else{
          cards[optionOne].setAttribute('src','images/blank.png');
        cards[optionTwo].setAttribute('src','images/blank.png');
      }
      cardsChosen =[];
      cardsChosenId =[];
      
      resultText.innerHTML = resultDisplay;
      if(cardsWon.length==cardArray.length/2)
      alert("You Won!");
      
  }

  var diff = 'Medium';
  let difficulty=500;
  switch(diff){
      case 'Easy': difficulty=600;break;
      case 'Medium': difficulty=300;break;
      case 'Hard': difficulty=100;break;
  }

  function flipCard(){
      var index = this.getAttribute('id');
      cardsChosen.push(cardArray[index].name);
      cardsChosenId.push(index);
      this.setAttribute('src',cardArray[index].img)
      if(cardsChosen.length===2){
          setTimeout(checkForMatch,difficulty);
      }
  }

  CreateBoard()
  
}
)