const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');

console.log(quoteContainer, quoteText, authorText, newQuoteBtn);

// get quote from api

async function getQuote() {
	const apiURL = 'https://type.fit/api/quotes';

	try {
		const response = await fetch(apiURL);
		const data = await response.json();

		random = Math.floor(Math.random() * data.length + 1);
		quoteText.innerText = data[random].text;

		// Note: all authors are followed by 'type.fit' so must be truncated
		// also, no authors prints out 'type.fit'

		authorText.innerText = data[random].author;
	} catch (error) {
		console.log('whaaaaaa happpppppennnnnnnnn', error);
	}
}

getQuote();

newQuoteBtn.addEventListener('click', getQuote());
