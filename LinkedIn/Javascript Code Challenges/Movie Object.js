// Movie "class" in function syntax

function Movie(title, director, genre, releaseYear, rating) {
	this.title = title;
	this.director = director;
	this.genre = genre;
	this.releaseYear = releaseYear;
	this.rating = rating;
}

Movie.prototype.getOverview = function () {
	return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. 
  It received a rating of ${this.rating}`;
};

// Movie "class" in class syntax

class classMovie {
	constructor(title, director, genre, releaseYear, rating) {
		this.title = title;
		this.director = director;
		this.genre = genre;
		this.releaseYear = releaseYear;
		this.rating = rating;
	}

	getOverview() {
		return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. 
    It received a rating of ${this.rating}`;
	}
}

const Hobbit = new Movie(
	'The Hobbit',
	'Peter Jackson',
	'Fantasy',
	'2012',
	'7.8'
);

const Se7en = new classMovie('Se7en', 'David Fincher', 'Drama', '1995', '8.6');

console.log(Hobbit.getOverview(), '\n', Se7en.getOverview());
