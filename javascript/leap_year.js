#!/usr/bin/node

function isLeapYear() {
	// Conditions for a leap year:
        // Year must be divisible by 4
        // Year must not be divisible by 100 unless it's also divisible by 400
	const readline = require('readline');
	const r1 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    r1.question('Enter the year you want to check: ', (year) => {
	if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
		console.log(`${year} is a leap year`);
	}
	else {
		console.log(`${year} is not a leap`);
	}
	r1.close();
    });
}

isLeapYear();
