var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	  };
};

var flipCard = function (cardId) {
	cardsInPlay.push(cards[cardId]);
	console.log("User flipped" + " " + cards[cardId]);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	};
};

flipCard(0);
flipCard(2);







/*var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png",
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png",
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png",
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png",
}

var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute(src, "images/back.png");
		cardElement.setAttribute(data-id, i);
		cardElement.addEventListener("click", flipCard);
		cardElement.append
		

	}
}
];
var cardsInPlay = [];
var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else {
console.log("Sorry, try again.");
}
var flipCard = function(cardId) {
	cardsinPlay.push(cards[cardId].rank);
	console.log("User flipped" + cards[cardId].rank);
	checkForMatch();
}
console.log(cards[cardId.cardImage]);
console.log(cards[cardId.suit]);

flipcard(0);
flipcard(2);
*/
