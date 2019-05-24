/*
  This is a simple deck of cards game  
*/
let deckCards = ['Hearts', 'Clubs', 'Diamonds', 'Spade']; // deckCards initialized
// Initialize figures
let figures = [
      'Ace', 'King', 'Queen', 'Jack', 'Ten',
      'Nine', 'Eight', 'Seven', 'Six', 'Five',
      'Four', 'Three', 'Two', 'One'
    ];

function createDeck() {
  let deck = [];
  
  for (let i = 0; i < deckCards.length; i++) { // Start of outer loop
    for (let j = 0; j < figures.length; j++) { // Start of inner loop
      // A card object that holds deckCards and fugires
      let card = {
        figures : figures[j],
        deckCards : deckCards[i]
      }
      deck.push(card); // Push cards to deck array
    } // End of inner loop
  } // End of outer loop
  return deck;
}

function getNextCard() {
  return deck.shift();
}

function getCardString(card) {
  return card.figures + ' of ' + card.deckCards;
}

let deck = createDeck();

let playerCards = [getNextCard(), getNextCard()];

// Log output
console.log('Welcome to BlackJack\nYou are dealt:');
console.log('   ' + getCardString(playerCards[0]));
console.log('   ' + getCardString(playerCards[1]));