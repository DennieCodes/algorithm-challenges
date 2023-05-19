/*

Given the time in numerals we may convert it into words, as shown below:

At minutes=0, use o' clock. For 1 <= minutes <= 30, use past, and for 30 < minutes use to. Note the space between 
the apostrophe and clock in o' clock. 
Write a program which prints the time in words for the input given in the format described.

Function Description

Complete the timeInWords function in the editor below.

timeInWords has the following parameter(s):

input:
  int h: the hour of the day
  int m: the minutes after the hour
output:
  string: a time string as described
constraints:
  1. minutes === 0, use o' clock. (five o' clock)
  2. 1 <= minutes <= 30, use past. (ten minutes past five)
  3. 15 minutes, quarter past five.
  4. minutes > 30, use to.
  5. 30 minutes, half past five.
  6. 40 minutes, twenty to six.
  7. 45 minutes, quarter to six
  8. 47 minutes, thirteen minutes to six

psuedocode:
  1. Determine the hour which is based on h given except when minutes > 30.
  2. if 0, then use o' clock
  3. from 1 to 30 use past
      if minutes = 15, use quarter.
      if minutes = 30, use half.
  4. from 31 to 59, use to (next hour), subtract m from 60.
  5. if 45, then quarter to (next hour)

*/

function timeInWords(h, m) {
	const single = [
		'one',
		'two',
		'three',
		'four',
		'five',
		'six',
		'seven',
		'eight',
		'nine',
		'ten',
	];

	const teens = [
		'eleven',
		'twelve',
		'thirteen',
		'fourteen',
		'quarter',
		'sixteen',
		'seventeen',
		'eighteen',
		'nineteen',
	];

	let hour;
	let minute;
	let time;

	const tens = ['twenty', 'half', 'forty', 'fifty'];

	if (m === 0) {
		return `${single[h - 1]} o' clock`;
	} else if (m <= 10) {
		minute = single[m - 1];
		return `${minute} minutes past ${single[h - 1]}`;
	} else if (m <= 19 && m !== 15) {
		minute = teens[m - 11];
		return `${minute} minutes past ${single[h - 1]}`;
	} else if (m === 15) {
		return `quarter past ${single[h - 1]}`;
	} else if (m <= 29) {
		minute = single[m - 21];
		return `twenty ${minute} minutes past ${single[h - 1]}`;
	} else if (m === 30) {
		return `half past ${single[h - 1]}`;
	} else if (m <= 59 && m !== 45) {
		// above 30, minus from six
		const remainder = 60 - m;

		if (remainder >= 20) {
			if (remainder === 20) {
				return `twenty to ${single[h]}`;
			}
			return `twenty ${single[remainder - 21]} to ${single[h]}`;
		} else if (remainder > 10) {
			minute = teens[remainder - 11];
			return `${minute} minutes to ${single[h]}`;
		} else {
			return `${single[remainder - 1]} minutes to ${single[h]}`;
		}
	} else if (m === 45) {
		return `quarter to ${single[h]}`;
	}

	return time;
}

console.log(timeInWords(6, 35));
