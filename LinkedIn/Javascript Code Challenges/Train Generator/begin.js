const train = () => {
	function* trainGenerator() {
		yield 'Poughkeepsie';
		yield 'Newburgh';
		yield 'Peekskill';
		yield 'Yonkers';
		yield 'Bronx';
		yield 'Grand Central';
	}

	var train = trainGenerator();
	const button = document.querySelector('#next-stop');

	button.addEventListener('click', () => {
		const stop = train.next();

		if (stop.done) {
			console.log('We made it');
			button.setAttribute('disabled', true);
		}

		console.log(stop.value);
	});
};

train();
