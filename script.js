var quote = document.getElementById('quote-text');
var button = document.getElementById('generate-btn');
var favButton = document.getElementById('fav');
var savedFavesButton = document.getElementById('show-faves');
var favoriteQuotes = [];
var favorite;

/* array with quotes */
var quotes = [
'"A mind needs books as a sword needs a whetstone, if it is to keep its edge."',
'"Never forget what you are, for surely the world will not. Make it your strength. Then it can never be your weakness. Armour yourself in it, and it will never be used to hurt you."',
'"Fear cuts deeper than swords."', '"Winter is coming."', '"When you play a game of thrones you win or you die."', '"Some old wounds never truly heal, and bleed again at the slightest word."',
'"Most men would rather deny a hard truth than face it"','"Death is so terribly final, while life is full of possibilities."', '"The north remembers."', 
'"Why is it that when one man builds a wall, the next man immediately needs to know what is on the other side?"','"Summer friends will melt away like summer snows, but winter friends are friends forever."'
];

button.addEventListener('click', generateQuote);

/* generate the quotes upon loading */
function generateQuote(){
	var randomize = quotes[Math.floor(Math.random() * quotes.length)]; /* select random quote from quotes array */
	quote.innerHTML = randomize;
};

favButton.addEventListener('click', addFavorite);

/* mark quote as favorite after clicking on a star next to the generated quote */
function addFavorite(){
	console.log('click');
	var favorite = quote.innerHTML + '\n';
	favoriteQuotes.push(favorite);
	console.log(favorite);
}

savedFavesButton.addEventListener('click', showFavorite);

/* show favorite quotes */
function showFavorite(){
	console.log('click');
	var favoritesList = document.getElementById('faves-content');
	if (favoriteQuotes == '') {
		favoritesList.style.display = 'none'; // if there are no quotes marked as favorite the div won't show up
	}
	else {
		favoritesList.innerHTML = favoriteQuotes;
		favoritesList.style.display = 'block';
		setTimeout(function(){
			favoritesList.style.display = 'none'; // the timeout function hides the favorite quote after 3 seconds 
		},3000);
	}	
}