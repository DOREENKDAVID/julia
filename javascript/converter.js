#!/usr/bin/node

const readline = require("readline");

const r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
r1.question('Enter your dogs age: ', (dogAge) => {
	const humanAge = (dogAge -2) * 4 + 21;
	console.log(`The equivalent human age for your dog is: ${humanAge}`);
	r1.close();
});
