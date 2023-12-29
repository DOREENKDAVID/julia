#!/usr/bin/node

function fibonacciGenerator(n) {
	sequence = [];
	for (let i = 0; i < n; i++) {
		if (i === 0 || i === 1) {
			sequence.push(i);
		}
		else {
			let next  = sequence[i - 1] + sequence[i - 2];
			sequence.push(next);
		}
	}
	return sequence;
	
}
const result = fibonacciGenerator(20);
console.log(result.join(', '));
