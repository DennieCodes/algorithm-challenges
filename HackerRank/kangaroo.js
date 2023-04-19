// You have two kangaroos at different positions who move at different speeds
// You have to determine from their starting position and movement velocity if they can arrive at the same place
// x1 = kangaroo 1 start, v1 = kangaroo 1 velocity
// x2 = kangaroo 2 start, v2 = kangaroo 2 velocity

// input: x1, v1 = kangaroo 1 start position, x2, v2 = kangaroo 2 start position
// output: YES or NO, if the kangaroos will reach the same position (value)
// constraints:
//  0 <= x1 < x2 <= 10000
//  1 <= v1 <= 10000
//  1 <= v2 <= 10000

// pseudocode:
// 1. iterate until x1 = x2 or either reaches 10000
// 2. Increment both values according to their velocity
// 3. return YES if they reach same value
// 4. return NO if they don't reach same value by 10000

const kangaroo = (x1, v1, x2, v2) => {
	if (v1 > v2 && (x2 - x1) % (v1 - v2) === 0) {
		return 'YES';
	} else {
		return 'NO';
	}
};

// console.log(kangaroo(0, 3, 4, 2));

console.log(kangaroo(4523, 8092, 9419, 8076));
