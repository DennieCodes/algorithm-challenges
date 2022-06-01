/*
Password criteria:

- One lowercase letter
- One uppercase letter
- One special character (!@#\$%^&\*)
- One number
- At least 8 characters long

## Requirements

- Use regex to test whether the password is valid
- Use a ternary operator to return "Your password is valid" if it meets all requirements and "Your password is not valid, try again" if it 
  doesn't.
*/

const passwordValidator = (password) => {
	return password.match(/(?=.+[0-9])/) &&
		password.match(/(?=.+[A-Z])/) &&
		password.match(/(?=.+[a-z])/) &&
		password.match(/(?=.+[!@#\$%^&\*])/) &&
		password.length >= 8
		? 'Your password is valid'
		: 'Your password is invalid';
};

console.log(passwordValidator('A231AAA$dA'));

//alt length using RegEx: /(?=.{8})/
