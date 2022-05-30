/*
  The index.html contains a div with an ID of clock. Using callback functions and DOM manipulation, output a ticking digital clock which 
  displays the current hours, minutes, and seconds.
*/

const displayTime = () => {
	// get time and display its value
	const clock = document.getElementById('clock');

	// Set Interval
	let timeUpdate = setInterval(() => {
		let time = new Date();
		clock.textContent = time.toLocaleTimeString();
	}, 1000);

	// End interval for cleanup
	setTimeout(() => clearInterval(timeUpdate), 20000);
};

displayTime();
