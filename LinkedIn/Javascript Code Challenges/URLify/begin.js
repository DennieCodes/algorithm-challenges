/*
Create a function called urlify which takes in a blog title and outputs a url-friendly string where each word is lowercase and spaces are 
replaced with hyphens. Remember to remove all apostrophes.

```
("How I Got Into Programming!!!") => "how-i-got-into-programming"
*/

const urlify = (title) => {
	return title
		.toLowerCase()
		.replaceAll(' ', '-')
		.replaceAll(/[.,!@#$%^&*()]/g, '');
};

console.log(urlify('How I Got Into Programming!!!'));
