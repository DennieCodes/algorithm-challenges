/* Create a User object that has three properties
   Username, password and age

   Using Symbols make sure that username and password are private fields
*/

const username = Symbol('username');
const password = Symbol('password');

const user = {
	[username]: 'Dennie Chan',
	[password]: 'password',
	age: 47,
};

console.log(user.username);
console.log(user.password);
