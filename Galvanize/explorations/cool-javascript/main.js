import { IMPORTANT_VALUE, logInCaps, Dog } from './import-from-me.js';

window.addEventListener('DOMContentLoaded', async () => {
	console.log('DOM content fully loaded and parsed.');

	const url = 'https://jservice.xyz/api/random-clue';
	try {
		const response = await fetch(url);
		if (response.ok) {
			const data = await response.json();

			const main = document.querySelector('main');
			const { category, question, answer } = data;
			const { title } = category;

			const html = createTriviaHtml(title, question, answer);
			main.innerHTML += html;
		} else {
			throw new Error('Response not ok');
		}
	} catch (error) {
		console.error('error', error);
	}
});

function createTriviaHtml(category, question, answer) {
	return `
	<div>
		<h3>${category}</h3>
		<p><b>Question:</b>${question}</p>
		<p><b>Answer:</b>${answer}</p>
	</div>
	`;
}

console.log('IMPORTANT_VALUE is', IMPORTANT_VALUE);
logInCaps('This is a message.');

const dog = new Dog('Fido');
const dogWords = dog.speak();
console.log(dogWords);

console.log('main.js is loaded');

const createClueButton = document.getElementById('create-clue');
createClueButton.addEventListener('click', async () => {
	const question = document.getElementById('question').value;
	const answer = document.getElementById('answer').value;
	const value = Number.parseInt(document.getElementById('value').value);

	const data = {
		question: question,
		answer: answer,
		value: value,
		categoryId: 1485,
	};

	const url = 'https://jservice.xyz/api/clues';
	const fetchOptions = {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
		},
	};
	const response = await fetch(url, fetchOptions);
	if (response.ok) {
		const responseData = await response.json();

		const category = responseData.category.title;
		const question = responseData.question;
		const answer = responseData.answer;
		const html = createTriviaHtml(category, question, answer);

		const newClueTag = document.getElementById('new-clue');
		newClueTag.innerHTML = html;
	}
});
