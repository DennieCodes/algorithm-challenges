export const IMPORTANT_VALUE = 10;

export function logInCaps(message) {
	console.log(message.toUpperCase());
}

export class Dog {
	constructor(name) {
		this.name = name;
	}

	speak() {
		return `Woof! My name is ${this.name}.`;
	}
}

function notExported(value) {
	console.log('The value is', value);
}
