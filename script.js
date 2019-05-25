// Code goes here


let deckCards = ['Hearts', 'Clubs', 'Diamonds', 'Spade'];
let value = [
      'Ace', 'King', 'Queen', 'Jack', 'Ten',
      'Nine', 'Eight', 'Seven', 'Six', 'Five',
      'Four', 'Three', 'Two', 'One'
    ];
let textArea = document.getElementById('text-area'),
    newGame = document.getElementById('new-game-button'),
    hitButton = document.getElementById('hit-button'),
    stayButton = document.getElementById('stay-button');
    
let gameStarted = false,
    gameOver = false,
    playerWon = false,
    dealerCards = [],
    playerCards = [],
    dealerScore = 0,
    playerScore = 0,
    deck = [];

hitButton.style.display = 'none';
stayButton.style.display = 'none';
showStatus();

newGame.addEventListener('click', function() {
  gameStarted = true;
  gameOver = false;
  playerWon = false;
  
  deck = createDeck();
  shuffleDeck(deck);
  dealerCards = [getNextCard(), getNextCard()];
  playerCards = [getNextCard(), getNextCard()];
  
  newGame.style.display = 'none';
  hitButton.style.display = 'inline';
  stayButton.style.display = 'inline';
  showStatus();
  
});

function getCardNumericValue(card) {
  switch(card.value) {
    case 'Ace':
      return 1;
    case 'Two':
      return 2;
    case 'Three':
      return 3;
    case 'Four':
      return 4;
    case 'Five':
      return 5;
    case 'Six':
      return 6;
    case 'Ace':
      return 1;
    case 'Eight':
      return 8;
    case 'Nine':
      return 9;
    default:
      return 10;
  }
}
 
function getScore(cardArray) {
  let score = 0;
  let hasAce = false;
  for (let i = 0; i < cardArray.length; i++) {
    let card = cardArray[i];
    score += getCardNumericValue(card);
    if (card.value === 'Ace') {
      hasAce = true;
    }
  }
    if (hasAce && score + 10 <= 21) {
      return score + 10;
    }
    return score;
}

function createDeck() {
  
  for (let i = 0; i < deckCards.length; i++) {
    for (let j = 0; j < value.length; j++) {
      let card = {
        value : value[j],
        deckCards : deckCards[i]
      };
      deck.push(card);
    }
  }
  return deck;
}

function shuffleDeck() {
  for (let i = 0; i < deck.length; i++) {
    swapIndex = Math.trunc(Math.random() * deck.length);
    temp = deck[swapIndex];
    deck[swapIndex] = deck[i];
    deck[i] = temp;
  }
}

function getNextCard() {
  return deck.shift();
}

function getCardString(card) {
  return card.value + ' of ' + card.deckCards;
}

function updateScores() {
  dealerScore = getScore(dealerCards);
  playerScore = getScore(playerCards);
}

function showStatus() {
  if (!gameStarted) {
    textArea.innerText = 'Game Started...';
  }
  
  for (let i = 0; i < deck.length; i++) {
    textArea.innerText += '\n' + getCardString(deck[i]);
  }
  
  dealerCardString = '';
  playerCardString = '';
  
  for (let i = 0; i < dealerCards.length; i++) {
    dealerCardString += getCardString(dealerCards[i]) + '\n';
  }
   for (let i = 0; i < playerCards.length; i++) {
    playerCardString += getCardString(playerCards[i]) + '\n';
  }
  
  updateScores();
  
  textArea.innerText = 'Dealer has:\n' +
    dealerCardString + '(scores: ' + dealerScore  + ')\n\n' +
  
   'Player has:\n' +
    playerCardString + ' (scores: ' + playerScore  + ')\n\n';
    
  if (gameOver) {
    if (playerWon) {
      textArea.innerText = 'YOU WIN'; 
    } else {
      textArea.innerText = 'DEALER  WINS';
    }
    newGame.style.display = 'inline';
    hitButton.style.display = 'none';
    stayButton.style.display = 'none';
  }
  
}