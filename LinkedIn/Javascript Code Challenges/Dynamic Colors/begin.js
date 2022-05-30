const dynamicColors = () => {
	const body = document.querySelector('body');
	const buttons = document.querySelectorAll('button');

	buttons.forEach((button) => {
		button.addEventListener('click', (button) => {
			body.style.backgroundColor = button.target.id;
		});
	});
};

dynamicColors();
