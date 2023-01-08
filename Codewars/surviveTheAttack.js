// DESCRIPTION:
// Given two Arrays in which values are the power of each soldier, return true if you survive the attack or
// false if you perish.

// CONDITIONS

// Each soldier attacks the opposing soldier in the same index of the array. The survivor is the number with
// the highest value.
// If the value is the same they both perish
// If one of the values is empty(different array lengths) the non-empty value soldier survives.
// To survive the defending side must have more survivors than the attacking side.
// In case there are the same number of survivors in both sides, the winner is the team with the highest
// initial attack power. If the total attack power of both sides is the same return true.
// The initial attack power is the sum of all the values in each array.
// EXAMPLES

// input: two arrays, attackers and defenders
// output: true if defenders array results in more survivors, false if attackers results in more survivors

// Loop through by the length of whichever is the larger array
// Compare each array at the same position
// If defender has greater value credit them one survivor, vice versa on attacker
// If either has an empty value then the other team gets a survivor
// If they're both the same value then both die
// If they both have the same # of survivors then total sum of array is compared
//   the team with the larger value wins or return true if equal

const surviveTheAttack = (att, def) => {
	let larger = att.length > def.length ? att.length : def.length;
	let attNum = 0;
	let defNum = 0;
	let attSum = 0;
	let defSum = 0;

	for (let i = 0; i < larger; i++) {
		if (att[i] !== undefined) {
			attSum += att[i];
		}

		if (def[i] !== undefined) {
			defSum += def[i];
		}

		if (att[i] > def[i] || def[i] === undefined) {
			attNum++;
		} else if (att[i] < def[i] || att[i] === undefined) {
			defNum++;
		}
	}

	if (defNum > attNum) {
		return true;
	} else if (attNum > defNum) {
		return false;
	}

	if (attSum > defSum) {
		return false;
	} else if (defSum > attSum || defSum === attSum) {
		return true;
	}
};

// attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4, 6, 8 ]
// //0 survivors                4 survivors
// //return true

// attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4 ]
// //2 survivors  (16 damage)   2 survivors (6 damage)
// //return false

// attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4, 0, 8 ]
// //1 survivors                3 survivors
// //return true
