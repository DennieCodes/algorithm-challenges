class Book {
	constructor(title, author, ISBN, numCopies) {
		this.title = title;
		this.author = author;
		this.ISBN = ISBN;
		this.numCopies = numCopies;
	}

	// Getter function
	getAvailability() {
		if (this.numCopies === 0) {
			return 'out of stock';
		} else if (this.numCopies < 10) {
			return 'low stock';
		}
		return 'in stock';
	}

	// Sell
	sell(numSold = 1) {
		this.numCopies -= numSold;
	}

	//Restock
	restock(numCopies = 5) {
		this.numCopies += numCopies;
	}
}

class TechnicalBook extends Book {
	constructor(title, author, ISBN, numCopies, edition) {
		super(title, author, ISBN, numCopies);
		this.edition = edition;
	}

	getEdition() {
		return `The current version of this book is ${edition}`;
	}
}

// Inherits book class, but will also take addition,
// also have getEdition function which returns: The current version of this book is ${edition}
// return using a template literal
