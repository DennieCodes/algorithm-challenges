import { IMPORTANT_VALUE, logInCaps, Dog } from './import-from-me.js';

window.addEventListener('DOMContentLoaded', async () => {
	console.log('DOM content fully loaded and parsed.');

	const url = 'https://jservice.xyz/api/random-clue';
	try {
		const response = await fetch(url);
		if (response.ok) {
			const data = await response.json();
			console.log(data);
		} else {
			throw new Error('Response not ok');
		}
	} catch (error) {
		console.error('error', error);
	}
});

console.log('IMPORTANT_VALUE is', IMPORTANT_VALUE);
logInCaps('This is a message.');

const dog = new Dog('Fido');
const dogWords = dog.speak();
console.log(dogWords);

console.log('main.js is loaded');
