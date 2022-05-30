/*

Planning menu italian dinner.  Some guests are vegetarians create a list of veggie items for tem.
Given an array of Italian dishes, create an unordered list of all vegetarian dinner options.

Each menu item is an object containing the dish name and a Boolean indicating whether or not it is vegetarian.

Dynamically generate the list items in the DOM from the array of vegetarian items.

*/

const body = document.querySelector('body');

const menu = [
	{ name: 'Pasta Carbonara', vegetarian: false },
	{ name: 'Pasta Primavera', vegetarian: true },
	{ name: 'Bruschetta', vegetarian: true },
	{ name: 'Pasta Bolognese', vegetarian: false },
	{ name: 'Broccoli Rabe', vegetarian: true },
];

let menuNode = document.createElement('ul');
const vegetarianItems = menu
	.filter((item) => item.vegetarian === true)
	.forEach((item) => {
		let listItem = document.createElement('li');
		listItem.appendChild(document.createTextNode(item.name));
		// alt. listItem.textContent = item.name
		menuNode.appendChild(listItem);
	});

body.appendChild(menuNode);

console.log(body);
