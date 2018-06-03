//Card list
const cards = ['diamond', 'paper-plane-o', 'anchor', 'bolt', 'cube', 'leaf', 'bicycle', 'bomb', 'diamond', 'paper-plane-o', 'anchor', 'bolt', 'cube', 'leaf', 'bicycle', 'bomb'];

   const deck = document.querySelector('.deck');
   const scorePanel = document.querySelector('.score-panel');
   const restart = scorePanel.querySelector('.restart');
   const moves = scorePanel.querySelector('.moves');
   const timer = scorePanel.querySelector('.timer');
   let cardItem = [];
   let opened = [];
   let matchVar = 0;
   let movesVar = 0;
   let firstClick = true;
   timerSeconds = 0;
   timerMinutes = 0;

// Score-panel restart (reload) function
restart.addEventListener('click', function (){
  location.reload(true);
});

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

//Place Random cards function
function placeCards() {
  let shuffled = shuffle(cards);
  for (var i = 0; i < shuffled.length; i++) {
     let template = `<li class = "card"><i class = "fa fa-${shuffled[i]}"></i></li>`;
     deck.insertAdjacentHTML('beforeend', template);
  };
};

//Card Clicking Functions
function openCard (card) {
  card.target.classList.add('open','show');
  opened.push(card.target);
}

function closeCard (card) {
  opened[1].classList.remove('open','show','unmatch');
  opened[0].classList.remove('open','show','unmatch');
  opened.splice(0,2);

}

//check card functionality
   function checkCard(card)
   {
     if (opened.length > 1 && opened[0].firstChild.className === opened[1].firstChild.className) {
       matchCards(card);
       movesVar ++;
     } else {
       movesVar ++;
       unmatchCards(card);
       setTimeout(function(){
       closeCard(card);
     }, 600)
     }
   };

//Matching cards functionality
 function matchCards (card){
matchVar ++;
moves.innerText = movesVar;
opened[0].classList.toggle('match');
opened[1].classList.toggle('match');
opened.splice(0,2);
 };

 function unmatchCards (card) {
matchVar ++;
moves.innerText = movesVar;
opened[0].classList.toggle('unmatch');
opened[1].classList.toggle('unmatch');
 }

//Function on Win
function youWin () {
  console.log('Congratulations')
};

//Initialize game function
 function gameInit(){
   placeCards();
   cardItem.push(deck.getElementsByTagName('i'));

    deck.addEventListener('click', function (card) {
      if (opened.length == 1) {
         openCard(card);
         checkCard(card);
      }
      else if (opened.length > 1) {
        
      } else if (opened.length == 0) {
        openCard(card);
       } else if (matchVar === 8) {
          youWin();
      }
    }
  )
}

gameInit();
