// inputs: string in the 12 hour format (hh:mm:ssAM) or (hh:mm:ssPM)
// output: hh:mm:ss, in the 24 hour format
// can we derive output from input? Yes

// parse the time (hh:mm:ss) and (AM or PM)
// if it's AM then time will be returned as is but if it's PM
// then we have to add 12:00:00 to the return value
// exception: 12:00:00AM = 00:00:00 military time
//            12:00:00PM = 12:00:00
// after noon, it'll be 1:00PM = 13:00:00

// 1. To determine AM/PM we can read in 's', second to last letter
// 2. We also have to check if the hours are 12 since that is handled differently
// 3. For AM, simply return the first 8 characters of the input (except 12)
// 4. For PM, increment the hours by 12 and then return the first 8 characters of the input

const timeConversion = (s) => {
	// 1. To determine AM/PM we can read in 's', second to last letter
	if (s[s.length - 2] === 'A') {
		// 2. We also have to check if the hours are 12 since that is handled differently
		if (s.slice(0, 2) === '12') {
			return '00' + s.slice(2, 8);
		}
		return s.slice(0, 8);
	} else {
		// 2. We also have to check if the hours are 12 since that is handled differently
		if (s.slice(0, 2) === '12') {
			return s.slice(0, 8);
		}
		return (parseInt(s.slice(0, 2)) + 12).toString() + s.slice(2, 8);
	}
};

console.log(`12:01:00PM is converted to ${timeConversion('12:01:00PM')}`);
console.log(`03:58:00PM is converted to ${timeConversion('03:58:00PM')}`);
console.log(`12:01:00AM is converted to ${timeConversion('12:01:00AM')}`);
console.log(`03:00:00AM is converted to ${timeConversion('03:00:00AM')}`);
