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
'"Most men would rather deny a hard truth than face it"','"Death is so terribly final, while life is full of possibilities."'
];

button.addEventListener('click', generateQuote);

function generateQuote(){
	var randomize = quotes[Math.floor(Math.random() * quotes.length)]; /* select random quote from quotes array */
	quote.innerHTML = randomize;
};

favButton.addEventListener('click', addFavorite);

function addFavorite(){
	console.log('click');
	var favorite = quote.innerHTML;
	favoriteQuotes.push(favorite);
	console.log(favorite);
}

savedFavesButton.addEventListener('click', showFavorite);

function showFavorite(){
	console.log('click');
	var favoritesList = document.getElementById('faves-content');
	if (favoriteQuotes == '') {
		favoritesList.style.display = 'none';
	}
	else {
		favoritesList.innerHTML = favoriteQuotes;
		favoritesList.style.display = 'block';
		setTimeout(function(){
			favoritesList.style.display = 'none';
		},3000);
	}	
}