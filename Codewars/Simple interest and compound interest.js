/* 

Simple interest on a loan is calculated by simply taking the initial amount (the principal, p) and multiplying it by a rate of interest (r) and 
the number of time periods (n).

Compound interest is calculated by adding the interest after each time period to the amount owed, then calculating the next interest payment 
based on the principal PLUS the interest from all previous periods.

Given a principal p, interest rate r, and a number of periods n, return an array [ total owed under simple interest, total owed under compound 
interest ]

Notes:

Round all answers to the nearest integer
Principal will always be an integer between 0 and 9999
interest rate will be a decimal between 0 and 1
number of time periods will be an integer between 0 and 50
Examples
interest(100, 0.1,  1)  =  [110, 110]
interest(100, 0.1,  2)  =  [120, 121]
interest(100, 0.1, 10)  =  [200, 259]

Analysis
--------
Input: Principle, interest rate, time period
Output: An array with total simple interest and total compound interest
ELI5: You need two variables for simple interest sum and compound interest sum
      You're going to iterate a total number of times by the time period value.  For each iteration you will multiple the principle value
      by the interest rate which is the simple interest value.  The compound interest is the principle plus interest on each iteration

Pseudocode
----------
1. Create simple interest sum and compound interest sum variables
2. Iterate [time period] amount of times.
3. Each iteration multiply principle by interest rate and add to simple interest sum
4. Also on each iteration multiply interest rate by compound interest sum, then add new interest rate to compound interest rate sum

*/

const interest = (P, r, n) => {
	let simpleInterestSum = P,
		compoundInterestSum = P;

	for (let period = 0; period < n; period++) {
		simpleInterestSum += P * r;
		compoundInterestSum += compoundInterestSum * r;
	}

	return [Math.round(simpleInterestSum), Math.round(compoundInterestSum)];
};

console.log(
	interest(100, 0.1, 1),
	interest(100, 0.1, 2),
	interest(100, 0.1, 10)
);

